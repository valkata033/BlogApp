import { usePostContext } from '../../contexts/PostContext';
import { useForm } from '../../hooks/useForm';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './CreatePost.module.css';

export const CreatePost = () => {
    const { onCreatePostSubmit } = usePostContext();

    const {values, changeHandler, onSubmit} = useForm({
        firstName: '',
        lastName: '',
        profileImage: '',
        description: '',
        image: '',
    }, onCreatePostSubmit);

    return (
        <Form id={styles.createPostForm} onSubmit={onSubmit} >
            <h1>Create Post</h1>
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