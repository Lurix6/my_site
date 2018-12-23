import {CHANGE_CARENT_MUSIC, CHANGE_CURENT_MUSIC_CATEGORY} from '../../constants'

const defaultProps = {
    music: {
  			"id": "56c782f1e17f4f9311dfaa2c",
  			"executor":"Alan Walker",
  			"title":"Fade [NCS Release]",
  			"icon":"https://pp.userapi.com/c639721/v639721949/5131e/-bf4PRxQZ40.jpg",
  			"url_link":"http://taimp3nhanh.com/stream/stream.php?id=177671751",
  			"full_time": "3:50"
    }
}

export default (state = defaultProps, action) => {
    const {type, payload} = action

    switch (type) {
            case CHANGE_CARENT_MUSIC: return {...state,music: payload.element}
    }

    return state

}
