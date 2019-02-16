import React from 'react'
import InputBase from '@material-ui/core/InputBase';
import Style from 'style-it';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import Avatar from '@material-ui/core/Avatar';
import Moment from 'react-moment'
import Divider from '@material-ui/core/Divider'
import {connect} from 'react-redux'
import { deleteSelectedPost, likeSelectedPost } from '../../AC'




class Post extends React.Component {

  render(){

    const {selectedAccount, post} = this.props

    return      <Paper key={post.id} style={{marginTop: '8px', padding: '15px', }}>
                      <div style={{display: 'flex', justifyContent: 'space-between'}} alt="">
                        <div style={{display: 'flex', alignItems: 'center'}}>
                          <Avatar alt="Remy Sharp" src={selectedAccount.img} />
                            <div style={{marginLeft: '10px'}}>
                                <Typography  color='textPrimary' style={{color: '#355E88'}} variant='h6'>
                                    {selectedAccount.firstName + ' ' + selectedAccount.lastName}
                                </Typography>
                                <Moment date={post.date} style={{color: '#aaaaaa'}} format='HH:mm MM-DD-YYYY' />
                            </div>

                        </div>
                        <div style={{alignItems: 'center'}}>
                            <Icon>expand_more</Icon>
                            <Icon onClick={() => this.deleteSelectedPost(selectedAccount.id,post.id)} >delete</Icon>
                        </div>
                      </div>

                    {post.simplePost ?
                              <div>
                                  <div style={{margin: '15px 0 15px 15px' }}>
                                      {post.text}
                                  </div>
                              </div>
                              :
                              <div>
                                  <div  style={{margin: '15px 0' ,width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' ,backgroundImage: String('url('+ post.selectedImg +')'),  position: 'relative' ,opacity: '1', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' ,color: 'black' ,  minHeight: '400px', maxHeight: '900px' ,  backgroundPosition: 'center'}} alt="">
                                      <div style={{textAlign: 'center' ,fontSize: '40px' ,width: '50%', height: '40%', position: 'absolute', top: '30%', left: '50%',  margin: '0 0 0 -25%'}}>
                                                {post.text}
                                      </div>
                                  </div>
                                  </div>
                        }


                        <Divider />
                            <Style>
                                {`.imgColorDefault{
                                    color: #868D9B;
                                },
                                .imgColorDefault:hover{
                                    color: #555656;
                                }
                                `
                              }
                              <div style={{marginTop: '15px' ,display: 'flex', justifyContent: 'space-between'}}>
                                  <div>
                                    <Icon onClick={() => this.likeSelecktedPost(selectedAccount, post)} className='imgColorDefault'>favorite_border</Icon>
                                    <Icon className='imgColorDefault'>chat_bubble_outline</Icon>
                                    <Icon className='imgColorDefault'>reply</Icon>
                                  </div>
                                  <Icon>visibility</Icon>
                              </div>
                            </Style>
              </Paper>
        }

        deleteSelectedPost = (accountId ,postId) => {
          this.props.deleteSelectedPost({accountId, postId})
        }
        likeSelecktedPost = (selectedAccount, post) => {
          // const res = post.whoLike.filter(el => el.id == selectedAccount.id)

          // if(res.lenght){
          //     console.log('likePost')
          // }
          this.props.likeSelectedPost({selectedAccount, post})

        }

}

export default connect(null , {deleteSelectedPost, likeSelectedPost}) (Post)
