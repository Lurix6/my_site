import React from 'react'
import CardMedia from '@material-ui/core/CardMedia';
import { postImg } from '../DB'
import Avatar from "./index";
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon';


class NewPostElement extends React.Component{
        state = {
            selectedImg: 0


        }

        render() {
            const fullListImg = this.fillListImg()
            const ListImg = fullListImg.map((el, index) => <img src={el.img} alt="" key={index} onClick={() => {this.setState({selectedImg: el.index})}} />)

                return(
                <div style={{position: 'relative'}}>
                    <div  style={{ backgroundImage: String('url('+ fullListImg[this.state.selectedImg].img+ ')'), color: 'white' , display: 'flex',  justifyContent: 'space-between', width: '100%', height: '100%',  minHeight: '400px', maxHeight: '900px' , backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} alt="">
                            <Button style={{ color: 'white', width: '5%'}} onClick={()=> { if(this.state.selectedImg > 0 && this.state.selectedImg <= fullListImg.length){ this.setState({selectedImg: this.state.selectedImg-1})} }}><Icon style={{ fontSize: 50 }}>navigate_before</Icon></Button>
                            <div style={{display: 'flex', flexDirection: 'column', width: '85%',aligenItems: 'center', marginTop: '20px',textAlign:'center'   }}>
                                <Button style={{backgroundColor: 'white', color: 'black'}}>{fullListImg[this.state.selectedImg].name}</Button>
                                <div style={{height: '100%', display: 'flex',   flexDirection: 'column', justifyContent: 'center'}}>
                                    <TextField
                                        id = "inputNewPostElement"
                                        multiline
                                        margin="normal"
                                    />
                                </div>
                            </div>
                            <Button onClick={() => {if(this.state.selectedImg >= 0 && this.state.selectedImg < fullListImg.length-1){ this.setState({selectedImg: this.state.selectedImg+1})} }} style={{ color: 'white',  width: '5%'}}><Icon style={{ fontSize: 50 }}>navigate_next</Icon></Button>

                    </div>
                    {ListImg}


                </div>
               )

                }

                fillListImg = () => {
                    let list = []

                    for (let i = 0; i < postImg.abstractImg.length; i++) {
                        list[list.length] = {img : postImg.abstractImg[i].img,name : 'abstract', index: i}
                    }
                    for (let i = 0; i < postImg.gradientImg.length; i++) {
                        list[list.length] = {img : postImg.gradientImg[i].img, name : 'gradient', index: postImg.abstractImg.length+i}
                    }

                    console.log(list, this.state)
                    return list
                }



}

export default NewPostElement
