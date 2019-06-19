import axios from 'axios';

export const ACTIVE_POST = 'ACTIVE_POST';
export const FETCH_POST = 'FETCH_POST';
export const GET_POST = 'GET_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=JAMESBOND007'

export function activePost(post)
{
    return{
        type: ACTIVE_POST,
        payload: post
    }
}

export function fetchPosts()
{

    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return{
        type: FETCH_POST,
        payload: request   
    }
}

export function createPost(values, callback)
{

    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

    return{
        type: CREATE_POST,
        payload: request
    }
}

export function getPost(id)
{
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return{
        type: GET_POST,
        payload: request
    }
}

export function deletePostAction(id, callback)
{
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());


    return{
        type: DELETE_POST,
        payload: request
    }
}