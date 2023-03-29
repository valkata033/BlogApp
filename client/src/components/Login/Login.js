import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Login.module.css';

import { useState } from 'react';

export const Login = ({
    onLoginSubmit
}) => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const onChangeHandler = (e) => {
        setUser(state => ({...state, [e.target.name]: e.target.value}));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        
        onLoginSubmit(user);
    }

    return (
        
        <Form id={styles.loginForm} onSubmit={onSubmit} >
            <h1>Login</h1>
            <hr/>
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};