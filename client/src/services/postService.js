import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/posts';

export const postServiceFactory = (token) => {
    const request = requestFactory(token); 

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const posts = Object.values(result);
        
        return posts;
    };

    const create = async (postData) => {
        const result = await request.post(baseUrl, postData);
        
        return result;
    };


    return {
        create,
        getAll,
    };
}
