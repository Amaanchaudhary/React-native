import Sound from 'react-native-sound';
import { playListData } from './src/constants';

Sound.setCategory('Playback');

let currentSound: Sound | null = null;
let currentTrack: any = null;
let currentIndex = 0;
let isPlaying = false;

export const getCurrentIndex = () => currentIndex;

let onPlaybackChange: ((val: boolean) => void) | null = null;

export const setPlaybackListener = (cb: (val: boolean) => void) => {
  onPlaybackChange = cb;
};

let onTrackChange: ((track: any, index: number) => void) | null = null;

export const setTrackListener = (cb: (track: any, index: number) => void) => {
  onTrackChange = cb;
};

// export const playListData = [
//   'one.mp3',
//   'two.mp3',
//   'three.mp3',
//   'four.mp3',
//   'five.mp3',
//   'six.mp3',
// ];

export const getIsPlaying = () => isPlaying;

export const loadTrack = (index: number) => {
  return new Promise<Sound>((resolve, reject) => {
    if (currentSound) {
      currentSound.release();
    }

    const sound = new Sound(
      playListData[index].file,
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('Failed to load sound', error);
          reject(error);
          return;
        }

        currentTrack = playListData[index];

        currentSound = sound;
        currentIndex = index;
        
        onTrackChange?.(currentTrack, index);
        resolve(sound);
      },
    );
  });
};

export const playTrack = async (index?: number) => {
  try {
    if (index !== undefined) {
      await loadTrack(index);
    }

    currentSound?.play(success => {
      isPlaying = false;
      onPlaybackChange?.(false);
      if (success) console.log('Finished playing');
      else console.log('Playback failed');
    });

    isPlaying = true;
    onPlaybackChange?.(true);
  } catch (err) {
    console.log('Error playing track', err);
  }
};

export const pauseTrack = () => {
  currentSound?.pause();
  isPlaying = false;
  onPlaybackChange?.(false);
};

export const stopTrack = () => {
  currentSound?.stop();
  isPlaying = false;
  onPlaybackChange?.(false);
};

export const nextTrack = async () => {
  let nextIndex = currentIndex + 1;
  if (nextIndex >= playListData.length) nextIndex = 0;

  await playTrack(nextIndex);
};

export const prevTrack = async () => {
  let prevIndex = currentIndex - 1;
  if (prevIndex < 0) prevIndex = playListData.length - 1;

  await playTrack(prevIndex);
};

export const togglePlayback = async () => {
  if (!currentSound) return;

  if (isPlaying) {
    pauseTrack();
  } else {
    currentSound.play(success => {
      isPlaying = false;
      onPlaybackChange?.(false);
    });
    isPlaying = true;
    onPlaybackChange?.(true);
  }
};

export const getDuration = () => {
  return currentSound?.getDuration() || 0;
};

export const getCurrentTime = () => {
  return new Promise<number>(resolve => {
    currentSound?.getCurrentTime(seconds => {
      resolve(seconds);
    });
  });
};

export const seekTo = (seconds: number) => {
  currentSound?.setCurrentTime(seconds);
};

export const getCurrentTrack = () => currentTrack;
