import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/posts';

const request = requestFactory();

export const getAll = async () => {
    const query = encodeURIComponent('_createdOn desc');
    
    const result = await request.get(`${baseUrl}?sortBy=${query}`);
    const posts = Object.values(result);

    return posts;
};

export const getOne = async (postId) => {
    const result = await request.get(`${baseUrl}/${postId}`);

    return result;
};

export const getAllByOwnerId = async (ownerId) => {
    const queryOwner = encodeURIComponent(`_ownerId LIKE "${ownerId}"`);
    const querySort = encodeURIComponent('_createdOn desc');

    const result = await request.get(`${baseUrl}?where=${queryOwner}&sortBy=${querySort}`);
    const posts = Object.values(result);

    return posts;
};

export const create = async (postData) => {
    const result = await request.post(baseUrl, postData);

    return result;
};

export const edit = (postId, data) => request.put(`${baseUrl}/${postId}`, data);

export const deletePost = (postId) => request.delete(`${baseUrl}/${postId}`);

