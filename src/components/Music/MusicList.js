import React, {Component} from 'react';
import MusicElement from './MusicElement'
import './../style/MusicList.css'
import {connect} from 'react-redux'
import {setNewCarentMusic} from '../../AC'
import {filterSearchMusics} from '../../selectors'

class MusicList extends Component{

	render(){
		const musicElements = this.props.listElements.map(element => <li onClick={() => {const {setNewCarentMusic} = this.props; setNewCarentMusic(element)}} key={element.id}>
			<MusicElement
				element = {element}
			/>
		</li> )

		return(

			<div id="list_music">
				<ul>
					{musicElements}
				</ul>
			</div>
			);
		}
	}



export default connect(state => ({
	listElements: filterSearchMusics(state)
}), {setNewCarentMusic})(MusicList)
