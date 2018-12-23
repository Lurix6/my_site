import {Profils} from '../../components/DB'
import {CHANGE_SITE_STYLE} from '../../constants'


export default (accountState = Profils, action) => {
  const {type, payload} = action
  return accountState
}
