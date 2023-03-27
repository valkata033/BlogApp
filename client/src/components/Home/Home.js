import { Post } from '../Post/Post';

export const Home = ({
    posts
}) => {
    return (
        <div className="content">

            {posts.map(x => 
                <Post key={x._id} {...x} />
            )}
            
        </div>
    );
};