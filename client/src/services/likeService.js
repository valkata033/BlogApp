import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/likes';
const request = requestFactory();

export const getAll = async (postId) => {
    const searchQuery = encodeURIComponent(`postId="${postId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
    
    return result;
};

export const create = async (postId) => {
    const result = await request.post(baseUrl, {postId});

    return result;
};