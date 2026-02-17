import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { nextTrack, pauseTrack, playTrack, prevTrack } from '../playerService'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <View>
          <Button title="Play" onPress={() => playTrack(0)} />
          <Button title="Pause" onPress={pauseTrack} />
          <Button title="Next" onPress={nextTrack} />
          <Button title="Prev" onPress={prevTrack} />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})