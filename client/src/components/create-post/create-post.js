import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './createPost.module.css';

import { useState } from 'react';

export const CreatePost = ({
    onCreatePostSubmit
}) => {

    const [post, setPost] = useState({
        firstName: '',
        lastName: '',
        profileImage: '',
        description: '',
        image: '',
    });

    const onChangeHandler = (e) => {
        setPost(state => ({...state, [e.target.name]: e.target.value}));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onCreatePostSubmit(post);
    }

    return (
        <Form id={styles.createPostForm} onSubmit={onSubmit} >
            <h1>Create Post</h1>
            <hr/>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstName" placeholder="Enter your first name"
                    value={post.firstName} onChange={onChangeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lastName" placeholder="Enter your last name"
                    value={post.lastName} onChange={onChangeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Profile Image</Form.Label>
                <Form.Control type="text" name="profileImage" placeholder="Enter your profile image"
                    value={post.profileImage} onChange={onChangeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" name="description" placeholder="Enter post description"
                    value={post.description} onChange={onChangeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Post Image</Form.Label>
                <Form.Control type="text" name="image" placeholder="Enter post image"
                    value={post.image} onChange={onChangeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button id={styles.submitBtn} variant="primary" type="submit">Submit</Button>
        </Form>
    );
}