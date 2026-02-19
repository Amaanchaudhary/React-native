import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { playListData, PlayListType } from '../constants'
import SongInfo from '../components/SongInfo'
import SongSlider from '../components/SongSlider'
import ControlCentre from '../components/ControlCentre'
import { getCurrentTrack, playTrack, setTrackListener } from '../../playerService'
const { width, height } = Dimensions.get("window")

const MusicPlayer = () => {
    const [track, setTrack] = useState<PlayListType | null>()
    const flatListRef = useRef<FlatList>(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // listen for track changes
        setTrackListener((track, idx) => {
            setTrack(track);
            setIndex(idx);

            flatListRef.current?.scrollToIndex({
                index: idx,
                animated: true,
            });
        });

        // load first song automatically
        const init = async () => {
            await playTrack(4);
        };

        init();
    }, []);

    const renderArtwork = ({ item }: { item: PlayListType }) => {
        return (
            <View style={styles.listArtWrapper}>
                <View style={styles.albumContainer}>
                    <Image
                        style={styles.albumArtImg}
                        source={{ uri: item.artwork }}
                    />
                </View>
            </View>
        );
    };

    const onScrollEnd = (event: any) => {
        const slideIndex = Math.round(
            event.nativeEvent.contentOffset.x / width
        );

        if (slideIndex !== index) {
            playTrack(slideIndex);
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                horizontal
                data={playListData}
                renderItem={renderArtwork}
                keyExtractor={song => song.id.toString()}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={onScrollEnd}
                getItemLayout={(data, index) => ({
                    length: width,
                    offset: width * index,
                    index,
                })}
            />
            <SongInfo track={track} />
            <SongSlider />
            <ControlCentre />
        </View>
    )
}
export default MusicPlayer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#001d23',
    },
    listArtWrapper: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    albumContainer: {
        width: 300,
        height: 300,
    },
    albumArtImg: {
        height: '100%',
        borderRadius: 4,
    },
});