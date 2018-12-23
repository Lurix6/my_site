import {SEARCH_MUSICS} from '../../constants'

export default (state = '', action) => {
    const {type, payload} = action
    switch (type) {
      case SEARCH_MUSICS: return payload.search

    }

    return state
}
