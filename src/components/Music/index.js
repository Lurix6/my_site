import React from 'react'
import CurentMusic from './CurentMusic'
import Category from './Category'
import AboutList from './AboutList'
import MusicList from './MusicList'
import PlayList from'./PlayList'
import Search from './Search'
import Recommend from './Recommend'

class Music extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      category: 'myList'
    }
  }

    render(){

      return(
        <div className ="musicBlock">
            <CurentMusic/>
            <div className="fullListMusic">
              <Category changeCategoty={this.handleMusicCategory} activeCategory={this.state.category}/>
              <hr />
              <div className="showlist">
                <Search />
                <div className="about_list">
                      <p>Аудіозаписи</p>
                      <p>за замовчуванням</p>
                </div>
                  {this.openCategory()}
              </div>
            </div>
        </div>
      )
    }

    openCategory = () => {
          switch (this.state.category) {
            case 'playList': return <div><PlayList /></div>
            case 'recommend': return <div><Recommend selected={this.state.category} /></div>
            case 'myList': return <div><MusicList /></div>

          }
    }

    handleMusicCategory = (category) =>{
      this.setState({
        category: category
      })
    }
}

export default Music
