import { useForm } from "../../../hooks/useForm";
import styles from './AddComment.module.css';

export const AddComment = ({
    onCommentSubmit,
}) => {
    const {values, changeHandler, onSubmit} = useForm({
        comment: '',
    }, onCommentSubmit);

    return (
        <form onSubmit={onSubmit}>
            <p className={styles.label}>Add new comment:</p>
            <input className={styles.input} type='text' name='comment' placeholder='Comment....' value={values.comment} onChange={changeHandler} />
            <input className={styles.addBtn} type='submit' value='Add Comment' />
        </form>
    );
};