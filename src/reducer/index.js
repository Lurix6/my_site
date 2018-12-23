import {combineReducers} from 'redux'
import songs from './music/songs'
import curentElement from './music/curentMusic'
import search from './music/search'
import noveltySongs from './music/exempleNewSongs'
import accounts from './friends/friends'
import allMusic from './music/allMusic'
import friendsFilter from './friends/filter'
import selectedFriend from './friends/selectedFriend'
import loginProfil from './profile/login'
import communities from './communities/fullList'

export default combineReducers({
    musics: songs,
    curentElement,
    search, noveltySongs,
    accounts, allMusic,
    selectedFriend, friendsFilter,
    loginProfil,communities
})
