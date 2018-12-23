import React from 'react'
import {NavLink} from 'react-router-dom'
import './../style/Category.css'

class Category extends React.Component{

	render(){

	return  (<div className="category">
                <a className={this.props.activeCategory === 'myList' ? 'active' : null } onClick={this.categotyMyList}>Моя Музика</a>
                <a className={this.props.activeCategory === 'playList' ? 'active' : null } onClick={this.categotyPlayList}>Плейлисти</a>
								<a className={this.props.activeCategory === 'recommend' ? 'active' : null } onClick={this.categotyRecommend}>Рекомендовані</a>

							</div>)


	}

	categotyMyList = (ev) =>{
		this.props.changeCategoty('myList');
	}
	categotyPlayList = (ev) =>{
		this.props.changeCategoty('playList');
	}
	categotyRecommend = (ev) =>{
		this.props.changeCategoty('recommend');
	}


}





export default Category



/*

.category p:hover {
 	border-bottom: 2px solid #b3b4b5;
}


*/
