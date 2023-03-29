import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './Register.module.css';

import { useState } from 'react';

export const Register = ({
    onRegisterSubmit
}) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const onChangeHandler = (e) => {
        setUser(state => ({...state, [e.target.name]: e.target.value}));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onRegisterSubmit(user);
    }

    return (
        <Form id={styles.registerForm} onSubmit={onSubmit} >
            <h1>Register</h1>
            <hr/>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstName" placeholder="Enter your first name"
                    value={user.firstName} onChange={onChangeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>LastName</Form.Label>
                <Form.Control type="text" name="lastName" placeholder="Enter your last name"
                    value={user.lastName} onChange={onChangeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email"
                    value={user.email} onChange={onChangeHandler} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password"
                    value={user.password} onChange={onChangeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password"
                    value={user.confirmPassword} onChange={onChangeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button id={styles.submitBtn} variant="primary" type="submit">Submit</Button>
        </Form>
    );
};