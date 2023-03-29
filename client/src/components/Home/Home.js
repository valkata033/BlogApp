import { Post } from './Post/Post';
import styles from './Home.module.css';

export const Home = ({
    posts
}) => {
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
};