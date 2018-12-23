import React, { Component } from 'react'
import FriendElement from './FriendElement'
import {connect} from 'react-redux'
import {filterActiveFriends} from '../../selectors'
import {changeFilterFriends, clearAllFilter} from '../../AC'
import './style.css'

class Friends extends Component {
  constructor(props){
    super(props)

    this.state = {
      moreFilters: false,
      findByName: '',
      city: '',
      sex: 'all',
      from: 10,
      to: 35,
    }
  }

  render() {
    const friendsElemet = this.props.friensList.map(element => <li key={element.id}>
      <FriendElement
          element= {element}
      />
    </li> )

    return (
        <div id='friendsMainBlock'>
          <div id='friendsFiltersOne'>
            <div>
              <div onClick={this.handleAllFriends} className={this.props.friendFilter.online ? 'activeFriends' : null}>Усі друзі<span>{this.props.allFriends.length}</span></div>
              <div onClick={this.handleActiveFriends} className={this.props.friendFilter.online ? null : 'activeFriends' }>Друзі онлайн<span>{this.onlineFriendNumber()}</span></div>
            </div>
            <button onClick={this.clearFilters} id='findFriends'>
              Очистити фільтри
            </button>
          </div>
          <hr />
          <div id='searchFriendName'>
            <img alt="" src='https://www.freeiconspng.com/uploads/search-icon-png-18.png' />
            <input id='searchInputName' type='text' autoComplete="off" autoCorrect="off" value={this.state.findByName} autoCapitalize="off" spellCheck="false" placeholder="Почніть вводити ім'я друга" onChange={this.handlefriendFilterName} />
          </div>
          <hr />
          <div id='friendsFiltersTwo'><div onClick={this.openParametrs}>Параметри</div><img alt="" id='parametersFilters' src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png' /></div>
          {this.state.moreFilters ? this.moreFilters() : null}
          <div className='friedsList'>
            <ul>
                { friendsElemet }
            </ul>
          </div>
        </div>

    );
  }

  moreFilters = () =>{
    return <div id="moreFilters">
          <div><p>Місто</p><input onChange={this.findCity} type='text' value={this.state.city} /></div>
          <div><p>Стать</p><select onChange={this.changeSex}><option selected={this.state.sex === 'all'} value="all">Будь яка</option><option value="male" selected={this.state.sex === 'male'} >Чловік</option><option value="female" selected={this.state.sex === 'female'}>Жінка</option></select></div>
          <div><p>Вік:</p><p>від</p><input min="0" max="100" type="number" value={this.state.from} onChange={this.changeFrom}/><p id='toP'>до</p><input id='to' type="number" min={this.state.from+1} max="100" value={this.state.to} onChange={this.changeTo}/></div>
      </div>
  }

  openParametrs = () => {
      this.setState({
        moreFilters: !this.state.moreFilters
      })
  }

  clearFilters = () =>{
    this.setState({
      moreFilters: false,
      findByName: ''
    })
    this.props.clearAllFilter()
  }

  changeTo = (ev) =>{
    const to = parseInt(ev.target.value,10)
    this.setState({
      to:to
    })

    if (to > this.state.from) {
      this.props.changeFilterFriends({...this.props.friendFilter,age: {to: to, from: this.state.from}})
    }
  }

  changeFrom = (ev) =>{
    const from = parseInt(ev.target.value,10)
    this.setState({
      from: from
    })

    if (from < this.state.to) {
      this.props.changeFilterFriends({...this.props.friendFilter,age: {from: from, to: this.state.to}})
    }
  }

  findCity = (ev) => {
    this.setState({
      city: ev.target.value
    })
    this.props.changeFilterFriends({...this.props.friendFilter,city: ev.target.value })
  }

  changeSex = (ev) => {
    this.props.changeFilterFriends({...this.props.friendFilter,sex: ev.target.value })
  }

  handlefriendFilterName = (ev) => {
    this.setState({
      findByName: ev.target.value
    })
    this.props.changeFilterFriends({...this.props.friendFilter,name: ev.target.value})
  }

  handleAllFriends = () => {
    this.props.changeFilterFriends({...this.props.friendFilter,online: true })
  }

  handleActiveFriends = () => {
    this.props.changeFilterFriends({...this.props.friendFilter,online: false })
  }

  onlineFriendNumber = () => {
    return this.props.allFriends.filter(element => element.online).length
  }

}

export default connect(state => ({
  friensList : filterActiveFriends(state),
  allFriends : state.accounts,
  friendFilter : state.friendsFilter
}), {changeFilterFriends, clearAllFilter})(Friends)
