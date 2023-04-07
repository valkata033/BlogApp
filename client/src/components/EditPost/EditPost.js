import { useEffect } from "react";
import { useParams } from "react-router";
import { useForm } from "../../hooks/useForm";
import { usePostContext } from "../../contexts/PostContext";
import * as postService from "../../services/postService";
import { useUserData } from "../../hooks/useUserData";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './EditPost.module.css';

export const EditPost = () => {

    const { onPostEditSubmit } = usePostContext();
    const { postId } = useParams();
    
    const {values, formErrors, changeHandler, onSubmit, changeValues} = useForm({
        _id: '',
        description: '',
        image: '',
    }, onPostEditSubmit);

    useEffect(() => {
        postService.getOne(postId)
            .then(result => {
                changeValues(result);
            });
    }, [postId]);

    const { firstName, lastName, profileImage } = useUserData();

    return (
        <Form id={styles.createPostForm} onSubmit={onSubmit} >
            <h1>Edit Post</h1>
            <hr/>
            <div className={styles.errors}>{formErrors.message}</div>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label className={styles.labels}>First Name</Form.Label>
                <Form.Control type="text" name="firstName" placeholder="Enter your first name"
                    value={firstName} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label className={styles.labels}>Last Name</Form.Label>
                <Form.Control type="text" name="lastName" placeholder="Enter your last name"
                    value={lastName} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label className={styles.labels}>Profile Image</Form.Label>
                <Form.Control type="text" name="profileImage" placeholder="Enter your profile image"
                    value={profileImage} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label className={styles.labels}>Description</Form.Label>
                <Form.Control type="text" name="description" placeholder="Enter post description"
                    value={values.description} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label className={styles.labels}>Post Image</Form.Label>
                <Form.Control type="text" name="image" placeholder="Enter post image"
                    value={values.image} onChange={changeHandler} />
            </Form.Group>

            <Button id={styles.submitBtn} variant="primary" type="submit">Submit</Button>
        </Form>
    );
}