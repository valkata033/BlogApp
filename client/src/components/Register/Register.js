import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';

import { useForm } from "../../hooks/useForm";
import { AuthContext } from '../../contexts/AuthContext';

import styles from './Register.module.css';


export const Register = () => {
    
    const {onRegisterSubmit} = useContext(AuthContext);
    const {values, changeHandler, onSubmit} = useForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);

    return (
        <Form id={styles.registerForm} onSubmit={onSubmit} >
            <h1>Register</h1>
            <hr/>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstName" placeholder="Enter your first name"
                    value={values.firstName} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>LastName</Form.Label>
                <Form.Control type="text" name="lastName" placeholder="Enter your last name"
                    value={values.lastName} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email"
                    value={values.email} onChange={changeHandler} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password"
                    value={values.password} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password"
                    value={values.confirmPassword} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button id={styles.submitBtn} variant="primary" type="submit">Submit</Button>
        </Form>
    );
};