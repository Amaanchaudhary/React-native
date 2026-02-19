import { ActivityIndicator, Button, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { nextTrack, pauseTrack, playTrack, prevTrack } from '../playerService'
import { SafeAreaView } from 'react-native-safe-area-context'
import MusicPlayer from './screens/MusicPlayer'

export default function App() {

  if (false) {
    return (
      <SafeAreaView>
        <ActivityIndicator size={40} />
      </SafeAreaView>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <MusicPlayer />
      {/* <View>
          <Button title="Play" onPress={() => playTrack(0)} />
          <Button title="Pause" onPress={pauseTrack} />
          <Button title="Next" onPress={nextTrack} />
          <Button title="Prev" onPress={prevTrack} />
        </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})