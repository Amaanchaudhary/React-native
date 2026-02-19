import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Slider from '@react-native-community/slider';
import { getCurrentTime, getDuration, seekTo } from '../../playerService';

export default function SongSlider() {

    const [position, setPosition] = useState(0);
    const [duration, setDuration] = useState(0);

    const handleSeek = (value: number) => {
        seekTo(value);
        setPosition(value);
    }

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);

        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    useEffect(() => {
        const interval = setInterval(async () => {
            const time = await getCurrentTime();
            const dur = getDuration();

            setPosition(time);
            setDuration(dur);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <View>
            <Slider
                value={position}
                minimumValue={0}
                maximumValue={duration}
                onSlidingComplete={handleSeek}
                thumbTintColor='#FFFFFF'
                minimumTrackTintColor='#1DB954'
                maximumTrackTintColor='#FFFFFF'
                style={styles.sliderContainer}
            />
            <View style={styles.timeContainer}>
                <Text style={styles.time}>
                    {formatTime(position)}
                </Text>

                <Text style={styles.time}>
                    {formatTime(duration)}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sliderContainer: {
        width: 350,
        height: 40,
        marginTop: 25,

        flexDirection: 'row',
    },
    timeContainer: {
        width: 340,

        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    time: {
        color: '#fff',
    },
});