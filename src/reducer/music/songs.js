import {musics} from '../../components/DB'
import {DELETE_MUSIC_ELEMENT, ADD_NEW_MUSIC_IN_MY_LIST} from '../../constants'

export default (musicState = musics, action) => {
  const {type, payload} = action

  switch (type) {
    case DELETE_MUSIC_ELEMENT: return musicState.filter(music => music.id !== payload.id)

    case ADD_NEW_MUSIC_IN_MY_LIST:  {
      return [...musicState, payload.element]
    }
  }

  return musicState
}
