import { Audio } from 'expo-av'

import {
  PLAY_SOUND
} from 'common/lib/core/actions/audio'

const mobileAudioMiddleware = store => next => async action => {

  if (action) {
    const state = store.getState()
    
    if (action.type === PLAY_SOUND) {
        const { sound, status } = await Audio.Sound.createAsync(
          action.source,
          {
            shouldPlay: true,
            volume: action.volume,
            isLooping: action.loop,
          },
          // status => console.log('status', status)
        )
    }
  }
  return next(action)
}
export default mobileAudioMiddleware
