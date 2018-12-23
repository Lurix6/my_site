import React from 'react'


const AboutList = () => {

		return <div>
					{this.props.categoryMusic ? <div className="about_list">
	              	<p>Аудіозаписи</p>
	            	<p>за замовчуванням</p>
	    		</div> : <div className="about_list">
            		<p><span>1</span> список відтворення</p>

	    		</div>}
		</div>
	}
export default AboutList
