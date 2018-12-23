import React from 'react'
import { connect } from 'react-redux'
import { setSearchDate } from '../../AC'

class Search extends React.Component{
    render(){

      return  <div className="search">
                <input type="text"
                  id="audio_search"
                  placeholder="Пошук за музикою"
                  onChange={this.handleUserChange}
                  />
                <button className="button_search">
                </button>
              </div>
    }

    handleUserChange = ev =>{
      if (ev.target.value !== '' ) {
        const {setSearchDate} = this.props
        setSearchDate(ev.target.value)

      }
    }

}

export default connect(null ,{setSearchDate})(Search)
