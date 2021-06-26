import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import { Container, Row } from 'react-bootstrap';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <Container>
            <Row md={8}>
            {
                posts.map(posts => <Post posts={posts}></Post>)
            }
            </Row>
       </Container>
    );
};

export default Home;