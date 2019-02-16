import {Profils} from '../../components/DB'
import {ADD_NEW_POST_TO_PROFILE, DELETE_SELECTED_POST, LIKE_SELECTED_POST} from '../../constants'
import {arrToMapId, mapToArr}  from '../../helper/'
 import {Map, Record} from 'immutable'


const profileRecord = Record ({
  	id:'',
  	email:'',
  	password:'',
  	status: '',
  	firstName:'',
  	lastName:'',
  	online: false,
  	img:'https://i.pinimg.com/originals/a3/13/8d/a3138d75e764cdd799ad3901ef90b8e6.jpg',
  	rating: null,
  	tag:[],
  	siteStyle: null,
  	personalDate : {
  		country:'',
  		city:'',
  		language:[],
  		birthday:'',
  		age: null,
  		sex: 'null'
  	},
  	posts: [Record({
      id: '',
      author: '',
      selectedImg: '',
      text: '',
      date: '',
      whoLike: '',
      simplePost: '',
    })],
    photo: [],
  	musicList: []
})




const profilsMap = arrToMapId(Profils, profileRecord)

export default (accountState = profilsMap, action) => {
  const {type, payload} = action
  console.log(payload)
  switch(type){
    case(ADD_NEW_POST_TO_PROFILE): return accountState.set(payload.post.author, accountState.get(payload.post.author).set('posts',[payload.post, ...accountState.get(payload.post.author).get('posts')]))
    case(DELETE_SELECTED_POST): return accountState.set(payload.date.accountId, accountState.get(payload.date.accountId).set('posts',accountState.get(payload.date.accountId).get('posts').filter(el => el.id !== payload.date.postId)))
    case(LIKE_SELECTED_POST): return accountState
  }
    return accountState
}
