import React from 'react'
import './communitiElement.css'
import Icon from '@material-ui/core/Icon';
import history from '../../history'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom'



class communitiElement extends React.Component {
		state = {
			anchorEl: null,
		}

		 handleClick = event => {
			 this.setState({ anchorEl: event.currentTarget });
		 };

		 handleClose = () => {
			 this.setState({ anchorEl: null });
		 };
	    render(){
				const element = this.props.element
				const { anchorEl } = this.state;
				console.log(this.state);
	        return (
                <div id='root' style={{zIndex: '1'}} >
                    <div id='mainBlock'>
                        <img alt="" id='avatar' src={element.img} />
                        <div >
                            <div id='title' onClick={() => {history.push('/profil/communities/'+element.url)}} >{element.title}</div>
                            <div id='subject'>{element.subject}</div>
                            <div id='subscribers'>{element.subscribers.length} підписники</div>
                        </div>
                    </div>
                    <div style={{margin: '12px'}} >
                    	<Icon fontSize='large'
														aria-owns={anchorEl ? 'simple-menu' : undefined}
									          aria-haspopup="true"
									          onClick={this.handleClick}>more_horiz
											</Icon>
                    </div>
										<Menu
						           id="simple-menu"
						           anchorEl={anchorEl}
						           open={Boolean(anchorEl)}
						           onClose={this.handleClose}
						         >
						           <MenuItem onClick={this.handleClose}>Profile</MenuItem>
						           <MenuItem onClick={this.handleClose}>My account</MenuItem>
						           <MenuItem onClick={this.handleClose}>Logout</MenuItem>
						         </Menu>
        	      </div>

	        );
	    }


}


export default communitiElement
