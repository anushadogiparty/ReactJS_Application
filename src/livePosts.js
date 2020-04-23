import React from 'react';

const Posts = () => {
    const staticPosts = [
            { title: 'A1', date: '123', summary: 's1', body: 'b1', imageName: 'pic1.jpg' },
            { title: 'A2', date: '123', summary: 's2', body: 'b2', imageName: 'pic1.jpg' },
            { title: 'A3', date: '123', summary: 's3', body: 'b3', imageName: 'pic1.jpg' },
        ]
    return (
        staticPosts.map((item) => (
            <div style={{ marginBottom: 20}}>
                <div>{item.title}</div>
                <img src={item.imageName} style={{height:30, width:30}}/>
                <div>{item.date}</div>
                <div>{item.summary}</div>
                <div>{item.body}</div>
            </div>
            )
        )
    );
}
export default Posts;