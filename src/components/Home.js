import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import LivePosts from './/LivePosts'
import Footer from './Footer'
import PostData from '../Post-data'

class Home extends Component {
    
    state = {
        posts: PostData
    }
   
   
    render() {


       
        const postList = this.state.posts.map(post => {
                return (
                    
                    <div className="post card" key={post.id}>
                        <div style ={{backgroundColor: 'lavenderblush'}}>
                        <div className="card-content">

                            <Link to={'/' + post.id}>
                                <span className="card-title"> <b> {post.title} </b> </span> </Link>
                            <img style={{width: "630px", height:"400px"}} src={post.img} />
                            <div style={{margin: '10px 0px',fontStyle: 'italic',color:'purple'}}>  {post.Date} </div>
                            <div>  {post.front} </div>
                                <div>

                                </div>
                            </div>

                        </div>
                    </div>
                )
            })
        
        return (
            <div>
                <div className="container">

                    <div className="flexContainer">
                        <div>
                            <div style={{width: '75%', float: 'left' }}>
                                {postList}
                            </div>
                            <div style={{ width: '25%', float: 'right' }}>
                                <LivePosts style={{width: 1500}}/>
                            </div>

                    </div>
                    </div>
                </div>
        <Footer/>
        </div>

        )
    }
}






export default Home