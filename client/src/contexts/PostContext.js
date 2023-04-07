import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import * as postService from '../services/postService';

export const PostContext = createContext();

export const PostProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        postService.getAll()
            .then(result => {
                setPosts(result)
            })
    }, []);

    const onCreatePostSubmit = async (data) => {
        try {
            const newPost = await postService.create(data);

            setPosts(state => [...state, newPost]);

            navigate('/');
        } 
        catch (error) {
            //setFormErrors(error);
            console.log(error);
        }
    };

    const onPostEditSubmit = async (values) => {
        try {
            const result = await postService.edit(values._id, values);

            setPosts(state => state.map(x => x._id === values._id ? result : x));

            navigate('/user-info');
        } 
        catch (error) {
            //setFormErrors(error);
            console.log(error);
        }
    };

    const deletePost = (postId) => {
        setPosts(state => state.filter(post => post._id !== postId));
    }

    const contextValues = {
        posts,
        formErrors,
        onCreatePostSubmit,
        onPostEditSubmit,
        deletePost,
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