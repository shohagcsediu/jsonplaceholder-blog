import React from 'react';
import { Col } from 'react-bootstrap';

const Post = (props) => {
    const {title, body} = props.posts;
    return (
        <Col border="primary" md={4} >
            <h3>{title}</h3>
            <p>{body}</p>
        </Col>
    );
};

export default Post;