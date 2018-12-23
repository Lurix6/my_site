import React, {Component} from 'react';
import MusicElement from './MusicElement'
import {connect} from 'react-redux'
import {setNewCarentMusic} from '../../AC'


class NewMusicList extends Component{

	render(){

		const listElements = this.getMusicList(this.props.showAllMusicList)
		const musicElements = listElements.map(element => <li onClick={() => {const {setNewCarentMusic} = this.props; setNewCarentMusic(element)}} key={element.id}>
			<MusicElement
				element = {element}
				isRecomended= {this.isRecomended}
			/>
		</li> )


		return(
				<ul>
					{musicElements}
				</ul>
			);
		}


	getMusicList = (allList) =>{
		if (allList) {
		 return this.props.allMusic
		}else {
			return this.props.novelty
		}
	}

	isRecomended = () => {
		return this.props.selected ? true : false;
	}

}

export default connect(state => ({
  novelty: state.noveltySongs,
	allMusic: state.allMusic
}), {setNewCarentMusic})(NewMusicList)
