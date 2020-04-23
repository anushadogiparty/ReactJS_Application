import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const LivePosts = () => {
    const [liveFeeds, setLiveFeeds] = useState([]);

    useEffect(() => {
        getLiveFeeds();
        //setLiveFeeds(staticPosts);
        setInterval(getLiveFeeds, 5000);
    }, [])

    const getLiveFeeds = () => {
        fetch('http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=dfd1aefc994e43c89e72fecc0de1dfce')
            .then(
                (result, a, b) => {
                    result.json().then((data) => {
                        console.log("data", data.articles);
                        setLiveFeeds(data.articles);
                    });
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    return (
        <div className="rightChild">
        <div style={{margin: 10,width:300,backgroundColor: 'oldlace', padding: '5px 10px'}}>
            <h5 style={{textAlign: 'center',color: 'green'}}> Top Headlines </h5>
            <div>
                {liveFeeds.slice(0, 10).map((item, number) => (
                        <div key={number} style={{marginBottom: 20,padding: '5px 10px', borderBottom: '1px solid green'}}>
                            <div style={{ fontSize: 18, width:280, color: 'blue' ,fontWeight: 'Bolder' }}>

                                <a href={item.url} target="_blank">
                                    {item.title}
                                </a>


                            </div>
                            <div style={{fontSize: 15,fontStyle: 'italic',color: 'purple'}}> Published on {item.publishedAt.slice(0,10)} {item.publishedAt.slice(11,19)} </div>
                        </div>
                    )
                )}
            </div>
        </div>
        </div>
    );
}
export default LivePosts;
