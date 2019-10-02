import React, { createContext, useState, useEffect } from 'react';

import api from './../api/reddit';

export const RedditContext = createContext()

const RedditContextProvider = (props) => {

    const [news, setNews] = useState([]);
    const [hot, setHot] = useState([]);
    const [rising, setRising] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [active, setActive] = useState('news');
    const [page, setPage] = useState('');

    async function loadNew(){
		try {
            setIsLoading(true);
            const result = await api.getNew();
            setNews([result.data.data.children]);
            console.log([result.data.data.children])
            setPage(result.data.data.after);
            setActive('news');
            setIsLoading(false);
        } catch(err){
            setIsLoading(false);
            console.log(err);
        }
    }

    async function loadHot(){
		try {
            setIsLoading(true);
            const result = await api.getHot();
            setHot([result.data.data.children]);
            setPage(result.data.data.after);
            setActive('hot');
            setIsLoading(false);
        } catch(err){
            setIsLoading(false);
            console.log(err);
        }
    }

    async function loadRising(){
		try {
            setIsLoading(true);
            const result = await api.getRising();
            setRising([result.data.data.children]);
            setPage(result.data.data.after);
            setActive('rising');
            setIsLoading(false);
        } catch(err){
            setIsLoading(false);
            console.log(err);
        }
    }

    async function loadmore(active){
		try {
            setIsLoading(true);
            if (active === "news" && page != null) {
                const result = await api.loadMoreNew(page);
                setNews([...news, result.data.data.children]);
                setPage(result.data.data.after);
                setActive('news');
            } else if (active === "hot" && page != null) {
                const result = await api.loadMoreHot(page);
                setHot([...hot, result.data.data.children]);
                setPage(result.data.data.after);
                setActive('hot');
            } else if (active === "rising" && page != null) {
                const result = await api.loadMoreRising(page); 
                setRising([...rising, result.data.data.children]);
                setPage(result.data.data.after);
                setActive('rising');
            }
            setIsLoading(false);
        } catch(err){
            setIsLoading(false);
            console.log(err);
        }
    }

    useEffect(()=>{
		loadHot();
	}, []);

    return (
        <RedditContext.Provider value={{ isLoading, active, news, hot, rising, loadNew, loadHot, loadRising, loadmore, page }}>
            {props.children}
        </RedditContext.Provider>
    );
}

export default RedditContextProvider;