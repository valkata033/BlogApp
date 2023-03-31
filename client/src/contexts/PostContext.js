import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { postServiceFactory } from '../services/postService';

export const PostContext = createContext();

export const PostProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const postService = postServiceFactory();

    useEffect(() => {
        postService.getAll()
            .then(result => {
                setPosts(result)
            })
    }, []);

    const onCreatePostSubmit = async (data) => {
        const newPost = await postService.create(data);

        setPosts(state => [...state, newPost]);

        navigate('/');
    };

    const onPostEditSubmit = async (values) => {
        const result = await postService.edit(values._id, values);

        setPosts(state => state.map(x => x._id === values._id ? result : x));

        navigate('/user-info');
    };

    const contextValues = {
        posts,
        onCreatePostSubmit,
        onPostEditSubmit,
    };

    return (
        <>
            <PostContext.Provider value={contextValues}>
                {children}
            </PostContext.Provider>
        </>
    );
};

export const usePostContext = () => {
    const context = useContext(PostContext);

    return context;
};