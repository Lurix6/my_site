import {CHANGE_FILTERS_FRIEND, CLEAR_ALL_FILTER} from '../../constants'

const defaultFilterFriends = {
		name:null,
		online: true,
		city:null,
		age: '',
		sex: 'all'


}

export default (filterState = defaultFilterFriends, action) => {
  const {type, payload} = action
  switch (type) {
    case CHANGE_FILTERS_FRIEND: return payload.filter
		case CLEAR_ALL_FILTER: return defaultFilterFriends
  }
  return filterState
}
