import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { AddComment } from './AddComment/AddComment';
import * as commentService from '../../services/commentService';

import styles from './Post.module.css';
import { useState, useEffect } from 'react';

export const Post = ({
    _id,
    profileImage,
    firstName,
    lastName,
    image,
    description,
    onDeleteClick,
}) => {
    const { isAuthenticated } = useAuthContext();
    const [post, setPost] = useState({});

    const isUserInfo = window.location.toString().includes('user-info');
    const isTrue = isUserInfo ? '' : 'hidden';

    useEffect(() => {
        commentService.getAll(_id)
            .then(comments => {
                setPost({
                    ...post,
                    comments,
                })
            })
    }, [_id]);

    const onCommentSubmit = async (values) => {
        const response = await commentService.create(_id, values.comment);

        setPost(state => ({
            ...state,
            comments: [...state.comments, response]
        }));

    };

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
                    <button className={styles.commentBtn} onClick={onClick}>Comments</button>
                </div>

                <div  className={styles.comments}>
                <hr />
                    {post.comments && post.comments.map(x => (
                        <p key={x._id} className={styles.comment}>
                            {x.author?.firstName} {x.author?.lastName}: {x.comment}
                        </p>
                    ))}

                    <hr />
                    {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
                </div>

            </article>
        </>
    );
};