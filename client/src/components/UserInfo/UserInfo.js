import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { usePostContext } from '../../contexts/PostContext';
import { useUserData } from '../../hooks/useUserData';
import * as postService from '../../services/postService';

import { Post } from '../Post/Post';

import styles from './UserInfo.module.css';

export const UserInfo = () => {

    const [posts, setPosts] = useState([]);

    const { deletePost } = usePostContext();
    const navigate = useNavigate();

    const { userId, authFirstName, authLastName, authProfileImage } = useUserData();

    useEffect(() => {
        postService.getAllByOwnerId(userId)
            .then(result => {
                setPosts(result)
            })
    }, []);

    const onDeleteClick = async (postId) => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you sure you want to delete this post?`);
        
        if (result) {
            setPosts(state => state.filter(x => x._id !== postId))

            await postService.deletePost(postId);

            deletePost(postId);

            navigate('/user-info');
        }
    };

    return (
        <div className="user-posts">

            <div className={styles.profile}>
                <img className={styles.profileImg} src={authProfileImage} />
                <p className={styles.profileName}>{`${authFirstName} ${authLastName}`}</p>
            </div>

            {posts.map(x => 
                <Post key={x._id} {...x} onDeleteClick={onDeleteClick} />
            )}

            {posts.length === 0 && (
                <h3 className={styles.heading}>No posts yet!</h3>
            )}
            
        </div>
    );
}