import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import {connect} from 'react-redux'


class CurentMusic extends React.Component{

  render(){
    const {curentElement} = this.props
    const musicElement = curentElement.music

    return<div className = "curentMusic">
              <ReactAudioPlayer
                  src={musicElement.url_link}
                  // autoPlay
                  controls
                  loop
                  onEnded
                  // muted
              />
                <div id="about_current_music">
                  <img alt="music albom" src={musicElement.icon === null ? "https://cdn4.iconfinder.com/data/icons/devine_icons/Black/PNG/File%20Types/MP3.png" : musicElement.icon}   />
                    <div>
                        <p>{musicElement.title}</p>
                        <p>{musicElement.executor}</p>
                    </div>
                </div>

      </div>
    }
}

export default connect(state => ({
  musics: state.musics,
  curentElement: state.curentElement
}))(CurentMusic)
