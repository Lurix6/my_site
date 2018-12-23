import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import {loginMainProfile} from '../../AC'
import {connect} from 'react-redux'
import PropTypes from "prop-types";
import DatePickers from './DatePickers'
import RadioButtons from './RadioButtons'

class LoginMainBody extends React.Component {

	static contextTypes = {
	router: PropTypes.object
}

	constructor(props){
		super(props)

		this.state = {
				loginDate : {
					email: null,
					password:null
				},
				signUp: {
					firstName: '',
					lastName: '',
					birthDay: '1998-05-24',
					sex: 'female'
				},
				id: null,
				errorMassege: 'Some text',
				styleBottom: null,
				finish: false

		}
	}

	render(){
		const inputStyleRed = {borderColor: 'red'}

		return <div id='loginMainBody'>
        <div id='aboutAs'>
        </div>
        <div id='forms'>
        	<div id='logIn'>
						<input id='phoneAndEmail' type='text' style={this.state.loginDate.email ? null : inputStyleRed} placeholder='Phone or email' onChange={this.changeEmail}/>
						<input id='password' type='text' style={this.state.loginDate.password ? null : inputStyleRed} placeholder='Password' onChange={this.changePassword} />
						<div><button onClick={this.login}>Log In</button><p>Forgot your password?</p></div>
						<div></div>
					</div>
          <div id='signUp'  >
							<p>Sign up</p>
							<input id='firstName' type='text' placeholder='Your first name' onChange={(ev) => {this.setState({signUp: {...this.state.signUp,firstName: ev.target.value }})}} />
							<input id='lastName' type='text' placeholder='Your last name' onChange={(ev) => {this.setState({signUp: {...this.state.signUp,lastName: ev.target.value }})}} />
							<div id='sexAndBirthday' ><DatePickers handlerBirthday={this.handlerBirthday} />
						  <div id='radioGroup'><RadioButtons handlerSex={this.handlerSex} /></div>
							</div>
							<Link to={this.state.finish ?'/?act=finish':''}><button onClick={this.registration}>Continue registration</button></Link>
							<div id='errorMassege' style={this.state.styleBottom} hidden={this.state.styleBottom ? false : true} >{this.state.errorMassege}</div>
					</div>
        </div>
		</div>
	}



	registration = () => {

			const	oneThousandNineHundredAndSixtyFive = -157766400000
			const twoThousandSeven = 1167609600000

			if (this.state.signUp.firstName.length > 1 ) {

					if (this.state.signUp.lastName.length > 1 ) {
							let date = Date.parse(this.state.signUp.birthDay)
							if (date > oneThousandNineHundredAndSixtyFive && date < twoThousandSeven) {
								this.setState({
									styleBottom: null,
									finish: true
								})


							}else {
								this.setState({
									errorMassege: 'Рік народрення повинен бути з 1965 до 2007',
									styleBottom: {bottom: '260px'},
									finish:false
								})
							}

					}else {
						this.setState({
							errorMassege: 'Прізвище не відрлвідає вимогам',
							styleBottom: {bottom: '303px'},
							finish:false
						})
					}

				}else {
						this.setState({
							errorMassege: 'Імя не відрлвідає вимогам',
							styleBottom: {bottom: '355px'},
							finish:false
						})
					}

	}

	handlerBirthday = (ev) => {
			this.setState({
				signUp: {...this.state.signUp, birthDay: ev}
			})
	}

	handlerSex = (ev) => {
			this.setState({
				signUp: {...this.state.signUp, sex: ev}

			})
	}

	/*
<input type='text' placeholder='Day'/><input type='text' placeholder='Mounth'/><input type='text' placeholder='Year'/>
	*/

	changeEmail = (ev) =>{
		const email = ev.target.value
		if (this.testingEmail(email)) {
			this.setState({
				loginDate: {...this.state.loginDate, email: email }
			})

		}else {
			this.setState({
				loginDate: {...this.state.loginDate, email: null }
			})
		}

	}
	changePassword = (ev) =>{
		const password = ev.target.value
		if (this.testingPassword(password)) {
				this.setState({
					loginDate: {...this.state.loginDate, password: password}
				})
		}else {
				this.setState({
					loginDate: {...this.state.loginDate, password: null}
				})

		}

	}

	login = () => {
		const account = this.props.allProfile.filter(element => element.password === this.state.loginDate.password && element.email === this.state.loginDate.email)
		if (account.length > 0) {
			this.props.loginMainProfile(account[0]);
			localStorage.setItem('loginedUser', JSON.stringify(account[0]));
			this.props.history.push('/profil/id/'+account[0].id)

		}
	}

	testingEmail = (email) =>{
		const filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
		return filter.test(email)
	}

	testingPassword = (password) =>{
		 const filter  = /^[a-zA-Z0-9!@#$%^&*]{6,20}$/
		 return filter.test(password)
	}

		disabledButton = () => {
			if (this.state.loginDate.email && this.state.loginDate.password) {
					this.setState({
							loginDate: {...this.state.loginDate, buttonActive: true}
					})
			}
		}

		closeClue = () => {
			this.setState({
				styleBottom: null,
			})
		}


}

export default connect(state =>({
		allProfile : state.accounts
}),{loginMainProfile})(withRouter(LoginMainBody))
