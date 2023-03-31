import { useEffect, useState } from 'react';
import { postServiceFactory } from '../../services/postService';

import { Post } from '../Home/Post/Post';

import styles from './UserInfo.module.css';

export const UserInfo = () => {

    const [posts, setPosts] = useState([]);
    const postService = postServiceFactory();

    const serializedAuth = localStorage.getItem('auth');
    let userId = '';

    if (serializedAuth) {
        const auth = JSON.parse(serializedAuth);
        userId = auth._id;
    }

    useEffect(() => {
        postService.getAllByOwnerId(userId)
            .then(result => {
                setPosts(result)
            })
    }, []);

    return (
        <div className="posts">

            {posts.map(x => 
                <Post key={x._id} {...x} />
            )}

            {posts.length === 0 && (
                <h3 className={styles.heading}>No posts yet!</h3>
            )}
            
        </div>
    );
}