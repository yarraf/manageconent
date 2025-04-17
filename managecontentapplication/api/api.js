import axios from 'axios';


const API_GET_POST = 'https://smakidnia.pl/wp-json/wp/v2/posts';
export const getPosts = async () => {
    try {
        const response = await axios.get(API_GET_POST);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}