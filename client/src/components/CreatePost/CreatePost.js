import { usePostContext } from '../../contexts/PostContext';
import { useForm } from '../../hooks/useForm';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './CreatePost.module.css';

export const CreatePost = () => {
    const { onCreatePostSubmit } = usePostContext();
    
    const { values, formErrors, changeHandler, onSubmit } = useForm({
        firstName: '',
        lastName: '',
        profileImage: '',
        description: '',
        image: '',
    }, onCreatePostSubmit);

    return (
        <Form id={styles.createPostForm} onSubmit={onSubmit} >
            <h1>Create Post</h1>
            <hr />
            <div className={styles.errors}>{formErrors.message}</div>

            <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label className={styles.labels}>First Name</Form.Label>
                <Form.Control type="text" name="firstName" placeholder="Enter your first name"
                    value={values.firstName} onChange={changeHandler} />
                {formErrors.firstName &&
                    <p className={styles.errors}>{formErrors.firstName}</p>
                }
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label className={styles.labels}>Last Name</Form.Label>
                <Form.Control type="text" name="lastName" placeholder="Enter your last name"
                    value={values.lastName} onChange={changeHandler} />
                {formErrors.lastName &&
                    <p className={styles.errors}>{formErrors.lastName}</p>
                }
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicProfileImage">
                <Form.Label className={styles.labels}>Profile Image</Form.Label>
                <Form.Control type="text" name="profileImage" placeholder="Enter your profile image"
                    value={values.profileImage} onChange={changeHandler} />
                {formErrors.profileImage &&
                    <p className={styles.errors}>{formErrors.profileImage}</p>
                }
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label className={styles.labels}>Description</Form.Label>
                <Form.Control type="text" name="description" placeholder="Enter post description"
                    value={values.description} onChange={changeHandler} />
                {formErrors.description &&
                    <p className={styles.errors}>{formErrors.description}</p>
                }
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Label className={styles.labels}>Post Image</Form.Label>
                <Form.Control type="text" name="image" placeholder="Enter post image"
                    value={values.image} onChange={changeHandler} />
                {formErrors.image &&
                    <p className={styles.errors}>{formErrors.image}</p>
                }
            </Form.Group>

            <Button id={styles.submitBtn} variant="primary" type="submit">Submit</Button>
        </Form>
    );
}