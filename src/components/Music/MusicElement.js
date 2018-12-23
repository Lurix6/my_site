import React from 'react'
import './../style/MusicElement.css'
import hoverElement from '../../decorators/hoverElement'
import {connect} from 'react-redux'
import {deleteMusicElement, addNewMusic} from '../../AC'

class MusicElement extends React.Component {

			constructor (props) {

				super(props)
		        this.state = {
		            myList : props.isRecomended,
								added : props.my_music_list.includes(props.element),
								update : false
		          };

						}



	    render(){

	    	const {element, hover, hoverOn, hoverOff} = this.props
	    	const btnStyle = {
	    			opacity:'1'
	    		};
				console.log(this.props);

	        return (
	        	<div
	    	    	className= "root"
		            onMouseEnter={hoverOn}
		            onMouseLeave={hoverOff}>
		        	<div>
		        		{hover ? this.decorateMainImg(btnStyle) : null }
						<img src={element.icon === null ? "https://cdn4.iconfinder.com/data/icons/devine_icons/Black/PNG/File%20Types/MP3.png" : element.icon} style={btnStyle} alt="" />
						<div className="list_music_inf">
							<span>{element.title}</span>
							<span>{element.executor}</span>
						</div>
					</div>
					<div className="list_music_time">
						{hover ? this.getImageBody() : element.full_time }
					</div>

	        	</div>
	        );
	    }

			componentWillMount(){
				const a = this.props.my_music_list.filter(element => element.id === this.props.element.id)
				if (a.length > 0) {
					this.setState({
						added: true
					})
				}else {
					this.setState({
						added: false
					})
				}

			}

	    decorateMainImg = (btnStyle) => {

	    	btnStyle.opacity = 0.25

	    	const imgstyle = {
	    		position: "absolute",
					marginLeft: "10px",
					marginTop: "10px",
					width: "30px",
	    		height: "30px",
	    		zIndex: "2"
	    	}
	    	return <img src="/assets/img/music/play(white).png" style={imgstyle} alt="" />
	    }

	    getImageBody = () => {
	    	return <div>
	  			<img src="/assets/img/music/magic1.png" alt="" title="Показати схожі" />
					{this.state.myList ? 	null : <img src="/assets/img/music/del1.png" title="Видалит" alt="" onClick={this.hendleDelete} /> }
	  			<img src={this.state.myList ? ( this.state.added ? "/assets/img/music/check.png" : "/assets/img/music/plus.png" ) : "/assets/img/music/more1.png"} alt="" onClick={this.state.myList ? (this.state.added ? null : this.hendleAddNewMusick) : null } title={this.state.myList ? "Додати в свій список" : "Блільше" } />
	    	</div>
	    }

			hendleDelete = () => {
				const {deleteMusicElement, element} = this.props
				deleteMusicElement(element.id);
				this.setState({
					update: !this.state.update
				})
			}



			hendleAddNewMusick = () => {
				const {addNewMusic, element} = this.props

				addNewMusic(element)

				this.setState({
					added: true,
					update: !this.state.update
				})
			}



}


export default connect(state => ({
	my_music_list : state.musics
}), {deleteMusicElement, addNewMusic})(hoverElement(MusicElement))
