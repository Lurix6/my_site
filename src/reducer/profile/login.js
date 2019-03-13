import {LOGIN_MAIN_PROFILE, CHANGE_PRIVATE_DATA_MAIN_PROFILE,
  LOGOUT_MAIN_PROFILE} from '../../constants'

  const defaultLogin ={
  	id:'0000',
  	email:'vasya_popovych23@gmai.com',
  	password:'123456789',
  	status: 'На судьбу , дураков и женщин не обижаются =)',
  	firstName:'Vasya',
  	lastName:'Popovych',
  	online: true,
  	img:'https://i.pinimg.com/originals/a3/13/8d/a3138d75e764cdd799ad3901ef90b8e6.jpg',
  	rating: 10,
  	tag:['familyTag', 'bestFriendTag'],
  	siteStyle: null,
  	personalDate : {
  		country:'Україна',
  		city:'Ужгород',
  		language:'Українська',
  		birthday:'19 жовтня 1997',
  		age: 21,
  		sex: 'male'
  	},
    posts: [],
    photo:[
      {img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Larry_Fitzgerald_catches_TD_at_2009_Pro_Bowl.jpg/1200px-Larry_Fitzgerald_catches_TD_at_2009_Pro_Bowl.jpg'},
      {img: 'https://cdn.vox-cdn.com/thumbor/d4W1yeSVwtAKDP2yPLSqynkqv00=/0x108:2880x2028/1200x800/filters:focal(0x108:2880x2028)/cdn.vox-cdn.com/uploads/chorus_image/image/46756014/0715_USA-FRA_SocMed07.0.0.jpg'},
      {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2S59b7-srvEYuJcoL9X5otD6zSr8EjxzAsLB7nn3wQ72VxwLQ'},
      {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zMrWc5f9wNDEi3fWK1JusXvS8AXIPBwQ7VylHi8xBNa2FRu-jw'},
      {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDztDDv4xxTnPf5sTPikzRJHQ6TUTfIJwMoShDqd-ihXSXEfA7'},
      {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4huxSef1CodEtDRS4nq609y31nV2BQHpXG-6mx3sYM6Iqtldl2Q'}
    ],
  	musicList: ['56c782f18990ecf954f6e027','56c782f17b4e0ba78c7ad717','56c782f1978fdf9a0100df52','56c782f1e17f4f9311dfaa2c','56c782f197fe2bad471b3740','56c782f1a2c2c3268ddb3206','56c782fghgfc2c3268ddb3206']

  }


export default ( loginState = defaultLogin , action) => {
    const {type, payload} = action
    switch (type) {
      case LOGOUT_MAIN_PROFILE: return null
      case LOGIN_MAIN_PROFILE: return payload.mainProfil
      case CHANGE_PRIVATE_DATA_MAIN_PROFILE: return {...loginState, firstName: payload.props.firstName, lastName: payload.props.lastName, personalDate: {...loginState.personalDate, birthday: payload.props.birthday, city: payload.props.city, sex: payload.props.sex}}
    }

    return loginState
}
