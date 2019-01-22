import React from 'react'
import './communitiElement.css'
import Icon from '@material-ui/core/Icon';
import history from '../../history'


class communitiElement extends React.Component {

	    render(){
				const element = this.props.element

	        return (
                <div id='root' style={{zIndex: '1'}} >
                    <div id='mainBlock'>
                        <img alt="" id='avatar' src={element.img} />
                        <div >
                            <div id='title' >{element.title}</div>
                            <div id='subject'>{element.subject}</div>
                            <div id='subscribers'>{element.subscribers.length} підписники</div>
                        </div>
                    </div>
                    <div style={{margin: '12px'}} >
                    	<Icon fontSize='large' >more_horiz</Icon>
                    </div>
        	      </div>

	        );
	    }


}


export default communitiElement
