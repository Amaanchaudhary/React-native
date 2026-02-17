import Sound from 'react-native-sound';

Sound.setCategory('Playback');

let currentSound: Sound | null = null;
let currentIndex = 0;

export const playListData = [
  'one.mp3',
  'two.mp3',
  'three.mp3',
  'four.mp3',
  'five.mp3',
  'six.mp3',
];

export const loadTrack = (index: number) => {
  console.log('track value:', playListData[index]);
  console.log('type:', typeof playListData[index]);
  return new Promise<Sound>((resolve, reject) => {
    if (currentSound) {
      currentSound.release();
    }

    const sound = new Sound(playListData[index], Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('Failed to load sound', error);
        reject(error);
        return;
      }

      currentSound = sound;
      currentIndex = index;
      resolve(sound);
    });
  });
};

export const playTrack = async (index?: number) => {
  try {
    if (index !== undefined) {
      console.log('loading track', index);
      const sound = await loadTrack(index);
      console.log('loaded sound', sound);
    }

    currentSound?.play(success => {
      if (success) console.log('Finished playing');
      else console.log('Playback failed');
    });
  } catch (err) {
    console.log('Error playing track', err);
  }
};

export const pauseTrack = () => {
  currentSound?.pause();
};

export const stopTrack = () => {
  currentSound?.stop();
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
