import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { usePostContext } from '../../contexts/PostContext';
import { useUserData } from '../../hooks/useUserData';
import { postServiceFactory } from '../../services/postService';

import { Post } from '../Home/Post/Post';

import styles from './UserInfo.module.css';

export const UserInfo = () => {

    const [posts, setPosts] = useState([]);
    const postService = postServiceFactory();

    const { deletePost } = usePostContext();
    const navigate = useNavigate();

    const { userId, firstName, lastName, profileImage } = useUserData();

    useEffect(() => {
        postService.getAllByOwnerId(userId)
            .then(result => {
                setPosts(result)
            })
    }, []);

    const onDeleteClick = async () => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you sure you want to delete this post?`);

        console.log(posts[0]._id);
        if (result) {
            await postService.delete(posts._id);

            deletePost(posts._id);

            navigate('/user-info');
        }
    };

    return (
        <div className="user-posts">

            <div className={styles.profile}>
                <img className={styles.profileImg} src={profileImage} />
                <p className={styles.profileName}>{`${firstName} ${lastName}`}</p>
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