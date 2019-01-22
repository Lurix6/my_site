import React from 'react'
import CardMedia from '@material-ui/core/CardMedia';
import { postImg } from '../DB'
import Avatar from "./index";
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
   })

class NewPostElement extends React.Component{
        state = {
            selectedImg: 0,
            rows: 1
        }

    render() {

        const {classes} = this.props
        const fullListImg = this.fillListImg()

        const ListImg = fullListImg.map((el, index) => <img className={classes.cardContent} src={el.img} alt="" key={index} onClick={() => {this.setState({selectedImg: el.index})}} />)

                return(
                <div style={{position: 'relative'}}>
                    <div  style={{ backgroundImage: String('url('+ fullListImg[this.state.selectedImg].img+ ')'), color: 'white' , display: 'flex',  justifyContent: 'space-between', width: '100%', height: '100%',  minHeight: '400px', maxHeight: '900px' , backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} alt="">
                            <Button style={{ color: 'white', width: '5%'}} onClick={()=> { if(this.state.selectedImg > 0 && this.state.selectedImg <= fullListImg.length){ this.setState({selectedImg: this.state.selectedImg-1})} }}><Icon style={{ fontSize: 50 }}>navigate_before</Icon></Button>
                            <div style={{display: 'flex', flexDirection: 'column', width: '80%',aligenItems: 'center', marginTop: '20px',textAlign:'center'}}>
                                <Button style={{backgroundColor: 'white', color: 'black'}}>{fullListImg[this.state.selectedImg].name}</Button>
                                <div style={{height: '100%' , display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                    <textarea maxlength='95' defaultValue='hello' autofocus rows={this.state.rows} onChange={(ev) => {if(ev.target.value.length >= 0 && ev.target.value.length < 22) { this.setState({rows: 1}) }else if (ev.target.value.length >= 22 && ev.target.value.length < 44){this.setState({rows: 2}) }else if(ev.target.value.length >= 44 && ev.target.value.length < 66) {this.setState({rows: 3})}else {this.setState({rows: 4})}   }} cols="0" style={{color: 'white' ,backgroundColor: 'transparent', border: '0', textAlign:'center', fontSize:'40px', maxWidth: '900px' }}>
                                    </textarea>
                                </div>
                            </div>
                            <Button onClick={() => {if(this.state.selectedImg >= 0 && this.state.selectedImg < fullListImg.length-1){ this.setState({selectedImg: this.state.selectedImg+1})} }} style={{ color: 'white',  width: '5%'}}><Icon style={{ fontSize: 50 }}>navigate_next</Icon></Button>

                    </div>
                    <div className={classes.card}>
                        {ListImg}
                    </div>
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
                    return list
                }



}

export default withStyles(styles)(NewPostElement)
