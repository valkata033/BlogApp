import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/posts';
const request = requestFactory();

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const posts = Object.values(result);
    return posts;
};

export const getAllByOwnerId = async (ownerId) => {
    const query = encodeURIComponent(`_ownerId LIKE "${ownerId}"`);

    const result = await request.get(`${baseUrl}?where=${query}`);
    const posts = Object.values(result);

    return posts;
}

export const create = async (postData) => {
    const result = await request.post(baseUrl, postData);

    return result;
};

