import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getIsPlaying, nextTrack, prevTrack, setPlaybackListener, togglePlayback } from '../../playerService'
import Icon from 'react-native-vector-icons/MaterialIcons'

const ControlCentre = () => {
    const [playing, setPlaying] = useState(getIsPlaying());

    const skipToNext = async () => {
        await nextTrack();
    }
    const skipToPrevious = async () => {
        await prevTrack();
    }

    const handleToggle = async () => {
        await togglePlayback();
        setPlaying(getIsPlaying()); // refresh UI
    };

    useEffect(() => {
        setPlaybackListener(setPlaying);
    }, []);

    return (
        <View style={styles.container}>
            <Pressable onPress={skipToPrevious}>
                <Icon style={styles.icon} name="skip-previous" size={40} />
            </Pressable>
            <Pressable onPress={handleToggle}>
                <Icon style={styles.icon} name={playing ? "pause" : "play-arrow"} size={75} />
            </Pressable>
            <Pressable onPress={skipToNext}>
                <Icon style={styles.icon} name="skip-next" size={40} />
            </Pressable>
        </View>
    )
}

export default ControlCentre

const styles = StyleSheet.create({
    container: {
        marginBottom: 56,

        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        color: '#FFFFFF',
    },
    playButton: {
        marginHorizontal: 24,
    },
});