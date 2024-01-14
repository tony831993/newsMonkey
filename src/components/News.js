import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async () => {
        props.setProgress(10);
        setLoading(true);
        let newAPI = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(newAPI);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(60);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, [])

    // const handlePrevClick = async () => {
    //     setPage(page - 1);
    //     updateNews();
    // }

    // const handleNextClick = async () => {
    //     setPage(page + 1 );
    //     updateNews();
    // }

    const fetchMoreData = async () => {
        setLoading(true);
        let newAPI = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(newAPI);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    };

    return (
        <>
            {loading && <Spinner />}
            <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Spinner />}>
                <div className='container'>
                    <div className="row my-3">
                        {articles.map((item) => {
                            return <div className="col-md-4" key={item.url}>
                                <NewsItem title={item.title} description={item.description} imageUrl={item.urlToImage} newUrl={item.url} author={item.author} publishedAt={item.publishedAt}
                                    source={item.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
};
News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}

export default News