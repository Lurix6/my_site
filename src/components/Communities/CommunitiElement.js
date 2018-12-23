import React from 'react'
import './communitiElement.css'


class communitiElement extends React.Component {

	    render(){

	        return (
                <div id='root'>
                    <div id='mainBlock'>
                        <img alt="" id='avatar' src="https://pp.userapi.com/c840224/v840224794/66df3/2X83zEgJptY.jpg?ava=1" />
                        <div >
                            <div id='title' onClick={this.props.handleUpdate} >Европейский Футбол | Ман Юнайтед - Арсенал</div>
                            <div id='subject'>Футбол</div>
                            <div id='subscribers'>1 415 702 підписники</div>
                        </div>
                    </div>
                    <div>
                      <img alt="" id='more' src='/assets/img/music/more1.png' />
                    </div>
        	      </div>

	        );
	    }


}


export default communitiElement
