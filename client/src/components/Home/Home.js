import { useEffect, useState } from 'react';
import * as postService from '../../services/postService';
import { Post } from '../Post/Post';
import { usePostContext } from '../../contexts/PostContext';

import styles from './Home.module.css';

export const Home = () => {
    const [allPosts, setAllPosts] = useState([]);
    // const { posts } = usePostContext();
    
    useEffect(() => {
        postService.getAll()
            .then(result => {
                setAllPosts(result)
        });
    }, []);

    return (
        <div className="posts">

            {allPosts.map(x => 
                <Post key={x._id} {...x} />
            )}

            {allPosts.length === 0 && (
                <h3 className={styles.heading}>No posts yet!</h3>
            )}
            
        </div>
    );
};