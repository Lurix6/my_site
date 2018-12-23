import {selectedFriend} from '../../components/DB'
import {CHANGE_SELECTED_FRIEND} from '../../constants'


export default ( selectedState = selectedFriend , action) => {
  const {type, payload} = action
  switch (type) {
    case CHANGE_SELECTED_FRIEND: return payload.element 

  }

  return selectedState
}
