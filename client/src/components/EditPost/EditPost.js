import { useEffect } from "react";
import { useParams } from "react-router";
import { useForm } from "../../hooks/useForm";
import { useService } from '../../hooks/useService';
import { usePostContext } from "../../contexts/PostContext";
import { postServiceFactory } from "../../services/postService";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './EditPost.module.css';

export const EditPost = () => {

    const { onPostEditSubmit } = usePostContext();
    const { postId } = useParams();
    const postService = useService(postServiceFactory);
    
    const {values, changeHandler, onSubmit, changeValues} = useForm({
        _id: '',
        firstName: '',
        lastName: '',
        profileImage: '',
        description: '',
        image: '',
    }, onPostEditSubmit);

    useEffect(() => {
        postService.getOne(postId)
            .then(result => {
                changeValues(result);
            });
    }, [postId]);

    return (
        <Form id={styles.createPostForm} onSubmit={onSubmit} >
            <h1>Edit Post</h1>
            <hr/>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstName" placeholder="Enter your first name"
                    value={values.firstName} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lastName" placeholder="Enter your last name"
                    value={values.lastName} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Profile Image</Form.Label>
                <Form.Control type="text" name="profileImage" placeholder="Enter your profile image"
                    value={values.profileImage} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" name="description" placeholder="Enter post description"
                    value={values.description} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Post Image</Form.Label>
                <Form.Control type="text" name="image" placeholder="Enter post image"
                    value={values.image} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button id={styles.submitBtn} variant="primary" type="submit">Submit</Button>
        </Form>
    );
}