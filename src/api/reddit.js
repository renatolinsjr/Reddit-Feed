import axios from 'axios';

const api = axios.create({
	baseURL: "https://www.reddit.com",
});

// listar reddit
export const getNew = () => api.get( '/r/reactjs/new.json?limit=10' );
export const getHot = () => api.get( '/r/reactjs/hot.json?limit=10' );
export const getRising = () => api.get( '/r/reactjs/rising.json?limit=10' );
export const loadMoreNew = (after) => api.get( `/r/reactjs/new.json?limit=10&after=${after}` );
export const loadMoreHot = (after) => api.get( `/r/reactjs/hot.json?limit=10&after=${after}` );
export const loadMoreRising = (after) => api.get( `/r/reactjs/rising.json?limit=10&after=${after}` );

const apis = {
    getNew,
    getHot,
    getRising,
    loadMoreNew,
    loadMoreHot,
    loadMoreRising
}

export default apis;