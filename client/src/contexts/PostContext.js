import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import * as postService from '../services/postService';

export const PostContext = createContext();

export const PostProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

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

    const contextValues = {
        posts,
        onCreatePostSubmit,
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