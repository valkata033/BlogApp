import { Link } from 'react-router-dom';

import styles from './Post.module.css';

export const Post = ({
    _id,
    profileImage,
    firstName,
    lastName,
    image,
    description,
    onDeleteClick,
}) => {
    const isUserInfo = window.location.toString().includes('user-info');
    const isTrue = isUserInfo ? '' : 'hidden';
    
    return (
        <>
            <article className={styles.post}>
                <div className={styles.postHeader}>
                    <img className={styles.profileImg} src={profileImage} />
                    <Link className={styles.profileName} to='/user-info'>{`${firstName} ${lastName}`}</Link>
                    <div hidden={isTrue} className={styles.editDeleteButtons}>
                        <Link className={styles.editBtn} to={`/user-info/${_id}/edit`} >Edit</Link>
                        <button className={styles.deleteBtn} onClick={() => onDeleteClick(_id)} >Delete</button>
                    </div> 
                </div>

                <p className={styles.description}>{description}</p>

                <img className={styles.image} src={image} />

                <div className={styles.postFooter}>
                    <button className={styles.likeBtn}>Like</button>
                    <button className={styles.commentBtn}>Comment</button>
                </div>

                <div hidden className={styles.comments}>
                    <p className={styles.comment}>Hallo form there!</p>
                    <p className={styles.comment}>Second comment</p>
                    <p className={styles.comment}>Are be mama ti da eba idiot</p>
                </div>

            </article>

        </>
    );
};