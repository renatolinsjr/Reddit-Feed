import axios from 'axios';

const api = axios.create({
	baseURL: "https://www.reddit.com",
});

// listar reddit
export const getNew = () => api.get( '/r/reactjs/new.json?limit=7' );
export const getHot = () => api.get( '/r/reactjs/hot.json?limit=5' );
export const getRising = () => api.get( '/r/reactjs/rising.json?limit=7' );
export const loadMoreNew = (after) => api.get( `/r/reactjs/new.json?limit=7&after=${after}` );
export const loadMoreHot = (after) => api.get( `/r/reactjs/hot.json?limit=5&after=${after}` );
export const loadMoreRising = (after) => api.get( `/r/reactjs/rising.json?limit=7&after=${after}` );

const apis = {
    getNew,
    getHot,
    getRising,
    loadMoreNew,
    loadMoreHot,
    loadMoreRising
}

export default apis;