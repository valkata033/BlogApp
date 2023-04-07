import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';

import { useForm } from "../../hooks/useForm";
import { AuthContext } from '../../contexts/AuthContext';

import styles from './Register.module.css';
import { Link } from 'react-router-dom';


export const Register = () => {
    
    const {onRegisterSubmit, errors} = useContext(AuthContext);
    const {values, formErrors, changeHandler, onSubmit} = useForm({
        firstName: '',
        lastName: '',
        profileImage: '',
        email: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);

    return (
        <Form id={styles.registerForm} onSubmit={onSubmit} >
            <h1>Register</h1>
            <hr/>
            <div className={styles.error}>{errors.message}</div>
            <div className={styles.error}>{formErrors.message}</div>

            <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label className={styles.labels}>First Name</Form.Label>
                <Form.Control type="text" name="firstName" placeholder="Enter your first name"
                    value={values.firstName} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label className={styles.labels}>LastName</Form.Label>
                <Form.Control type="text" name="lastName" placeholder="Enter your last name"
                    value={values.lastName} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className={styles.labels}>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email"
                    value={values.email} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicProfileImage">
                <Form.Label className={styles.labels}>Profile Image</Form.Label>
                <Form.Control type="text" name="profileImage" placeholder="Enter your profile image"
                    value={values.profileImage} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className={styles.labels}>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password"
                    value={values.password} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label className={styles.labels}>Confirm Password</Form.Label>
                <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password"
                    value={values.confirmPassword} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSignIn">
                <Link className={styles.logIn} to='/login'>Sign in </Link>
                <div className={styles.logIn}>from here</div>
            </Form.Group>

            <Button id={styles.submitBtn} variant="primary" type="submit">Submit</Button>
        </Form>
    );
};