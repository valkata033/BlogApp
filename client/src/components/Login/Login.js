import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useForm } from "../../hooks/useForm";
import { useAuthContext } from '../../contexts/AuthContext';

import styles from './Login.module.css';

export const Login = () => {
    
    const { onLoginSubmit } = useAuthContext();
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
    }, onLoginSubmit);

    return (
        
        <Form id={styles.loginForm} onSubmit={onSubmit} >
            <h1>Login</h1>
            <hr/>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className={styles.labels}>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" 
                    value={values.email} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className={styles.labels}>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" 
                    value={values.password} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSignUp">
                <Link className={styles.register} to='/register'>Sign up </Link>
                <div className={styles.register}>from here</div>
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );
};