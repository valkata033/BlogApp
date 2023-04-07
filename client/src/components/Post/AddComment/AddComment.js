import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

import { useForm } from "../../../hooks/useForm";
import styles from './AddComment.module.css';

export const AddComment = ({
    onCommentSubmit,
}) => {
    const { values, formErrors, changeHandler, onSubmit } = useForm({
        comment: '',
    }, onCommentSubmit);
    
    return (
        <Form className={styles.form} onSubmit={onSubmit}>
                <Form.Label className={styles.label}>Add new comment:</Form.Label>
                <Form.Label className={styles.errorLabel}>{formErrors.message}</Form.Label>
                <Form.Control type="text" className={styles.input} name="comment" placeholder="Comment..."
                    value={values.comment} onChange={changeHandler} />
            <Button id={styles.submitBtn} variant="primary" type="submit">Add Comment</Button>
        </Form >
    );
};