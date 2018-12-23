import React from 'react'
import './../style/Recommend.css'
import MusicElement from './MusicElement'
import NewMusicList from './NewMusicList'
import hoverElement from '../../decorators/hoverElement'

class Recommend extends React.Component {
    constructor(props){
      super(props)

      this.state = {
        showAllMusicList: false
      }
    }

    render(){
      const {hover, hoverOn, hoverOff} = this.props
      const show_all_style = {}

      return	<div className = "recommend_root">
									<div className="recommend">
											<div>
												<div className="specially_for_you">
													Спеціально для Вас
												</div>
												<div className="new_songs">
													Portugal. The Man, Timo Maas, Inter Delirium та інші
												</div>
												<input id="listen_all" type='button' value='Слухати все' />
											</div>
                      <div>
												<img className="new_songs_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhIJdJTwv_DlEJWreuRqdNxSKggeW9twMO7QnN9qn8G-2Ozhs4mg" />
                      </div>
									</div>
                  <div className="black_line">
                  </div>
                  <div id="novelty">
            				<div id="novelty_text">
            					<p>Новинки</p>
            					<div
                        onMouseEnter={hoverOn}
                        onMouseLeave={hoverOff}
                        id="show_all">
            						<p onClick={this.showAllMusicList} >Показати всі</p>
            						<img src="/assets/img/music/recommend/show_all(right).png" style={hover ? this.decorateShowAll(show_all_style) : show_all_style} alt="" />
            					</div>
            				</div>
            				<div id="novelty_list">
                      <NewMusicList showAllMusicList={this.state.showAllMusicList} selected={this.props.selected}/>

                    </div>
                  </div>
                </div>

          }

      showAllMusicList = () => {
          this.setState({
            showAllMusicList: !this.state.showAllMusicList
          })
      }

      decorateShowAll = (btnStyle) => {

        const imgstyle = {
          transitionDuration: '.8s',
           // transform: 'scale(1.5)',
           marginLeft: '10px',
           transition: '1s'
        }
        return imgstyle
      }
}

export default hoverElement(Recommend)
