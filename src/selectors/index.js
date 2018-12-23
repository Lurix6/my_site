import {createSelector} from 'reselect'

const musicsGetter = state => state.musics
const searchDate = state => state.search
const allFriends = state => state.accounts
const friendsFilter = state => state.friendsFilter



export const filterSearchMusics = createSelector(musicsGetter, searchDate, (musics, search) => {
    const result = musics.filter(element =>
       element.title.toUpperCase().includes(search.toUpperCase()) || element.executor.toUpperCase().includes(search.toUpperCase()))
    return result

} )


export const filterActiveFriends = createSelector(allFriends,friendsFilter ,(friends, filter) => {
  let result
  if (!filter.online){
    result = friends.filter(element =>
      element.online === filter.online)
  }else {
    result = friends
  }
  if (filter.name) {
    result = result.filter(element =>
    element.firstName.toUpperCase().includes(filter.name.toUpperCase()) || element.lastName.toUpperCase().includes(filter.name.toUpperCase()))
  }
  if(filter.sex !== 'all'){
    if (filter.sex === 'male') {
      result = result.filter(element =>
      element.personalDate.sex === 'male')
    }else {
      result = result.filter(element =>
      element.personalDate.sex === 'female')
    }
  }
  if (filter.city) {
    result = result.filter(element =>
    element.personalDate.city.toUpperCase().includes(filter.city.toUpperCase()))
  }
  if(filter.age){
    result = result.filter(element =>
    element.personalDate.age <= filter.age.to && element.personalDate.age >= filter.age.from)
  }

  return result
})



export const getFriendById = createSelector(allFriends,friendsFilter ,(accounts, friendsFilter) => {
  return accounts
})
