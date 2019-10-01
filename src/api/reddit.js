import axios from 'axios';

const api = axios.create({
	baseURL: "https://www.reddit.com",
});

// listar reddit
export const getNew = () => api.get( '/r/reactjs/new.json' );
export const getHot = () => api.get( 'https://www.reddit.com/r/reactjs/hot.json' );
export const getRising = () => api.post('https://www.reddit.com/r/reactjs/rising.json' );

const apis = {
    getNew,
    getHot,
    getRising
}

export default apis;