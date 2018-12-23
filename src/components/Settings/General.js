import React from 'react'
import './general.css'
import {connect} from 'react-redux'
import {changeSiteStyle, changePrivateDataMainProfile} from '../../AC'

class General extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      requred: {
        firstName: props.loginProfil.firstName,
        lastName: props.loginProfil.lastName,
      },
      sex: props.loginProfil.personalDate.sex,
      birthday: props.loginProfil.personalDate.birthday,
      city: props.loginProfil.personalDate.city,
      activeSiteBtn: {background: 'url(https://site-made-in.odessa.ua/website-image/QIEmajk4RGw/%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE-%D1%84%D0%BE%D0%BD-%D0%B4%D0%BB%D1%8F-%D1%81%D0%B0%D0%B9%D1%82%D0%B0-%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D1%84%D0%BE%D0%BD.jpg)  no-repeat'},
      btnActive: true

    }
  }

  render (){


    const styleList = {
          btn1:{background: 'url(https://site-made-in.odessa.ua/website-image/QIEmajk4RGw/%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE-%D1%84%D0%BE%D0%BD-%D0%B4%D0%BB%D1%8F-%D1%81%D0%B0%D0%B9%D1%82%D0%B0-%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D1%84%D0%BE%D0%BD.jpg)  no-repeat'},
          btn2:{background: 'url(https://i.ytimg.com/vi/w9T97fRu3qc/maxresdefault.jpg)'},
          btn3:{background: 'url(https://i.ytimg.com/vi/s2EthFBFXCE/maxresdefault.jpg)'},
          btn4:{background: 'url(https://i.ytimg.com/vi/BwBhaQoiV94/maxresdefault.jpg)'},
          btn5:{background: 'url(https://www.xmple.com/wallpaper/black-linear-gradient-grey-1920x1080-c2-c0c0c0-000000-a-15-f-14.svg)'},
          redBorder: {border: '1px solid red'}
    }

    const loginedUser = this.props.loginProfil


    return(
        <div>
          <div className="mainTitle">
              Загальні
          </div>
          <hr />
          <div className="changeStyle">
              <div className="title">Змінити стиль сайта:</div>
              <div className="buttonSelect">
              <button onClick={this.styleBtn1} style={styleList.btn1}></button>
              <button onClick={this.styleBtn2} style={styleList.btn2}></button>
              <button onClick={this.styleBtn3} style={styleList.btn3}></button>
              <button onClick={this.styleBtn4} style={styleList.btn4}></button>
              <button onClick={this.styleBtn5} style={styleList.btn5}></button>
              </div>
          </div>
          <hr />
          <div className="changePersonalData">
              <p>Змінити особисті данні користувача</p>
              <div className="changeParametr"><div><p>Імя:</p></div><input style={this.state.requred.firstName ? null : styleList.redBorder} placeholder={this.state.requred.firstName ? null : 'Це поле обовязкове'} onChange={this.changeFirstName} type='text' value={this.state.requred.firstName} /></div>
              <div className="changeParametr"><div><p>Прізвище:</p></div><input style={this.state.requred.lastName ? null : styleList.redBorder} placeholder={this.state.requred.lastName ? null : 'Це поле обовязкове'} onChange={this.changeLastName} type='text' value={this.state.requred.lastName} /></div>
              <div className="changeParametr"><div><p>Cтать:</p></div><select onChange={this.changeSex} className="selectSex"><option selected = {this.state.sex === 'male'} value="male">Чоловік</option><option selected={this.state.sex === 'female'} value="female">Жінка</option></select></div>
              <div className="changeParametr"><div><p>День народження:</p></div><input onChange={this.changeBirthDay} type='text' value={this.state.birthday} /></div>
              <div className="changeParametr"><div><p>Рідне місто:</p></div><input onChange={this.changeCity} type='text' value={this.state.city}/></div>
              <div><button disabled={!this.state.btnActive} onClick={this.saveChange} className="saveChange">Зберегти зміни</button></div>
          </div>
        </div>
    )
  }

  componentWillUpdate(nextProps, nextState){
    localStorage.setItem(this.props.loginProfil.id, nextState.activeSiteBtn);
  }


  saveChange = () => {
      this.props.changePrivateDataMainProfile({firstName : this.state.requred.firstName, lastName: this.state.requred.lastName, birthday: this.state.birthday, city: this.state.city, sex: this.state.sex})
  }

  changeSex = (ev) => {
    this.setState({
      sex: ev.target.value
    })

  }

  changeFirstName = (ev) => {
    let newRequred = Object.assign({},this.state.requred,{firstName: ev.target.value})
    newRequred.firstName = ev.target.value
    this.setState({
      requred: newRequred
    })
    this.btnIsActive(ev)
  }

  changeLastName = (ev) => {
    let newRequred = Object.assign({},this.state.requred,{lastName: ev.target.value})
    this.setState({
      requred: newRequred
    })

    this.btnIsActive(ev)
  }

  btnIsActive = (ev) => {
    if (this.state.requred.lastName && this.state.requred.firstName) {
        this.setState({
          btnActive: true
        })
    }else {
      this.setState({
        btnActive: false
      })
    }

  }

  changeBirthDay = (ev) =>{
    this.setState({
        birthday: ev.target.value
    })
  }

  changeCity = (ev) =>{
    this.setState({
      city: ev.target.value
    })
  }

  styleBtn1 = () => {
      this.props.changeSiteStyle("url(https://site-made-in.odessa.ua/website-image/QIEmajk4RGw/%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE-%D1%84%D0%BE%D0%BD-%D0%B4%D0%BB%D1%8F-%D1%81%D0%B0%D0%B9%D1%82%D0%B0-%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D1%84%D0%BE%D0%BD.jpg)")
      this.setState({
        activeSiteBtn: "url(https://site-made-in.odessa.ua/website-image/QIEmajk4RGw/%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE-%D1%84%D0%BE%D0%BD-%D0%B4%D0%BB%D1%8F-%D1%81%D0%B0%D0%B9%D1%82%D0%B0-%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D1%84%D0%BE%D0%BD.jpg)"
      })
  }
  styleBtn2 = () => {
      this.props.changeSiteStyle("url(https://i.ytimg.com/vi/w9T97fRu3qc/maxresdefault.jpg)")
      this.setState({
        activeSiteBtn: "url(https://i.ytimg.com/vi/w9T97fRu3qc/maxresdefault.jpg)"
      })
  }
  styleBtn3 = () => {
      this.props.changeSiteStyle("url(https://i.ytimg.com/vi/s2EthFBFXCE/maxresdefault.jpg)")
      this.setState({
        activeSiteBtn: "url(https://i.ytimg.com/vi/s2EthFBFXCE/maxresdefault.jpg)"
      })
  }
  styleBtn4 = () => {
      this.props.changeSiteStyle("url(https://i.ytimg.com/vi/BwBhaQoiV94/maxresdefault.jpg)")
      this.setState({
        activeSiteBtn: "url(https://i.ytimg.com/vi/BwBhaQoiV94/maxresdefault.jpg)"
      })
  }
  styleBtn5 = () => {
      this.props.changeSiteStyle("url(https://www.xmple.com/wallpaper/black-linear-gradient-grey-1920x1080-c2-c0c0c0-000000-a-15-f-14.svg)")
      this.setState({
        activeSiteBtn: "url(https://www.xmple.com/wallpaper/black-linear-gradient-grey-1920x1080-c2-c0c0c0-000000-a-15-f-14.svg)"
      })
  }


}
export default connect(state => ({
    loginProfil: state.loginProfil
}) , {changeSiteStyle,changePrivateDataMainProfile} )(General)
