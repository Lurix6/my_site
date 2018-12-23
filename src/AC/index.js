import {DELETE_MUSIC_ELEMENT, CHANGE_CARENT_MUSIC, SEARCH_MUSICS,
  ADD_NEW_MUSIC_IN_MY_LIST, CHANGE_SELECTED_FRIEND,
  CHANGE_FILTERS_FRIEND, LOGIN_MAIN_PROFILE,
  CHANGE_CURENT_MUSIC_CATEGORY, CHANGE_SITE_STYLE,
  CHANGE_PRIVATE_DATA_MAIN_PROFILE, CLEAR_ALL_FILTER, LOGOUT_MAIN_PROFILE} from '../constants'


export function deleteMusicElement(id){
  return {
    type: DELETE_MUSIC_ELEMENT,
    payload:{ id }
  }
}

export function setNewCarentMusic(element){
  return{
    type: CHANGE_CARENT_MUSIC,
    payload: { element }
  }
}

export function setSearchDate(search){
  return{
    type:SEARCH_MUSICS,
    payload: { search }
  }
}

export function addNewMusic(element){
  return{
    type: ADD_NEW_MUSIC_IN_MY_LIST,
    payload: {element}
  }
}


export function changeSelectedFiend(element){
  return{
    type: CHANGE_SELECTED_FRIEND,
    payload: {element}
  }
}

export function changeFilterFriends(filter) {
  return{
    type:CHANGE_FILTERS_FRIEND,
    payload:{filter}
  }
}

export function loginMainProfile(mainProfil){
  return{
    type:LOGIN_MAIN_PROFILE,
    payload:{mainProfil}
  }
}


export function logoutMainProfile(){
  return{
    type:LOGOUT_MAIN_PROFILE
  }
}



export function changeSiteStyle(background){
  return{
    type:CHANGE_SITE_STYLE,
    payload:{background}
  }
}

export function changePrivateDataMainProfile(props){
  return{
    type: CHANGE_PRIVATE_DATA_MAIN_PROFILE,
    payload: {props}
  }
}

export function clearAllFilter(){
  return{
    type: CLEAR_ALL_FILTER,
  }
}
