import {communities} from '../../components/DB'
import {ADD_NEW_COMMUNITIE} from '../../constants'
import {arrToMap}  from '../../helper/'
import {Map, Record} from 'immutable'

const CommunitieRecord = Record ({
  url: undefined,
  title: '',
  img: 'https://us.v-cdn.net/6030293/uploads/TCYRA09SKWFQ.jpg',
  subscribers: [],
  subject: undefined,
  defaultURL: undefined,
  administrators: undefined
})

const communitiesMap = arrToMap(communities, CommunitieRecord)


export default (accountState = communitiesMap, action) => {
  const {type, payload} = action
  switch (type) {
    case ADD_NEW_COMMUNITIE: return accountState.set(payload.communitie.url,payload.communitie)

  }
  return accountState
}
