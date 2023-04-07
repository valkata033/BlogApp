import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import { useUserData } from '../../hooks/useUserData';
import * as commentService from '../../services/commentService';
import * as likeService from '../../services/likeService';
import { AddComment } from './AddComment/AddComment';

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
    const { isAuthenticated } = useAuthContext();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState('hidden');
    const { userId, authFirstName, authLastName } = useUserData();

    const isUserInfo = window.location.toString().includes('user-info');
    const isTrue = isUserInfo ? '' : 'hidden';

    useEffect(() => {
        Promise.all([
            commentService.getAll(_id),
            likeService.getAll(_id)
        ]).then(([comments, likes]) => {
                setPost({
                    ...post,
                    comments,
                    likes,
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
    
    const onCommentClick = () => {
        if (comments === ''){
            setComments('hidden');
        }
        else if (comments === 'hidden'){
            setComments('');
        }
    };

    const onLikeSubmit = async () => {
        const likes = await likeService.getAll(_id);
        
        if (likes && likes.find(x => x._ownerId === userId)){
            await likeService.deleteLike(likes.find(x => x._ownerId === userId)._id);
            setPost(state => ({
                ...state,
                likes: [...state.likes.filter(like => like._id !== likes.find(x => x._ownerId === userId)._id)]
            }));
            return;
        }

        const response = await likeService.create(_id);
        
        setPost(state => ({
            ...state,
            likes: [...state.likes, response]
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
                    <button className={styles.likeBtn} onClick={() => onLikeSubmit(_id)}>
                        Like <span>{post?.likes?.length}</span></button>

                    <button className={styles.commentBtn} onClick={() => onCommentClick(_id)}>
                        Comments</button>
                </div>

                <div hidden={comments} className={styles.comments}>
                    <hr />

                    {post.comments && post.comments.map(x => (
                        <p key={x._id} className={styles.comment}>
                            {x.author ? x.author?.firstName : authFirstName} {x.author ? x.author?.lastName : authLastName}: {x.comment}
                        </p>
                    ))}

                    <hr />
                    {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
                </div>

            </article>
        </>
    );
};