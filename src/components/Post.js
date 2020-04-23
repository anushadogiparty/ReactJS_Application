import React, { Component } from 'react'
import PostData from '../Post-data'
import {Link, useParams} from 'react-router-dom';

class Post extends Component {
    state = {
        posts: PostData
    }

    render() {
        const id = this.props.match.params.post_id

        return (
            <div className="container">
                <div className="flexContainer">
                    <div className="leftChild">
                    <div className="post card">
                        <div className="card-content">
                            <Link to={"/"}>Home Page</Link>
                        <div style={{ margin: 10, paddingBottom: 10}}>
                            <div style={{fontWeight:'Bolder',fontSize:25,color:'dimgrey'}}>
                                {this.state.posts[id].title}
                            </div>
                        </div>
                            <img style={{width: "700px", height:"500px"}} src={this.state.posts[id].img} />
                            <div style={{margin: '10px 0px', fontStyle: 'italic'}}>
                                    {this.state.posts[id].Date}
                            </div>
                        <p> {this.state.posts[id].blog} </p>

                    </div>
                    </div>
                    </div>

                </div>


            </div>
        )

    }
}

export default Post

