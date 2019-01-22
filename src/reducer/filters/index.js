import {SEARCH_COMMUNITIES_TITLE} from '../../constants'

const filters = {communities: {title: ''}}

export default (state = filters, action) => {
    const {type, payload} = action
    switch (type) {
      case SEARCH_COMMUNITIES_TITLE: return {communities: {title: payload.newFilters.title}}

    }

    return state
}
