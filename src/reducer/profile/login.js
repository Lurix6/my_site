import {LOGIN_MAIN_PROFILE, CHANGE_SITE_STYLE,
  CHANGE_PRIVATE_DATA_MAIN_PROFILE, LOGOUT_MAIN_PROFILE} from '../../constants'

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
  	musicList: ['56c782f18990ecf954f6e027','56c782f17b4e0ba78c7ad717','56c782f1978fdf9a0100df52','56c782f1e17f4f9311dfaa2c','56c782f197fe2bad471b3740','56c782f1a2c2c3268ddb3206','56c782fghgfc2c3268ddb3206']

  }


  /*{
    email: null,
    password:null,
    buttonActive: false
  }*/

export default ( loginState = defaultLogin , action) => {
    const {type, payload} = action
    console.log(type, ' ------ ', payload);
    switch (type) {
      case LOGOUT_MAIN_PROFILE: return null
      case LOGIN_MAIN_PROFILE: return payload.mainProfil
      case CHANGE_SITE_STYLE: return {...loginState, siteStyle: {background: payload.background}}
      case CHANGE_PRIVATE_DATA_MAIN_PROFILE: return {...loginState, firstName: payload.props.firstName, lastName: payload.props.lastName, personalDate: {...loginState.personalDate, birthday: payload.props.birthday, city: payload.props.city, sex: payload.props.sex}}

        break;
    }

    return loginState
}
