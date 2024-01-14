import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    };
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        };
    }

    async updateNews() {
        this.props.setProgress(10);
        this.setState({ loading: true });
        let newAPI = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(newAPI);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(60);
        this.setState({
            articles: parsedData.articles, loading: false,
            totalResults: parsedData.totalResults
        });
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews();
    }

    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1
        });
        this.setState({ loading: true });
        let newAPI = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(newAPI);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            loading: false,
            totalResults: parsedData.totalResults
        });
    };

    render() {
        return (
            <>
                {this.state.loading && <Spinner />}
                {/* Previous Next button logic */}
                {/* <div className="row my-3">
                    {!this.state.loading && this.state.articles.map((item) => {
                        return <div className="col-md-3" key={item.url}>
                            <NewsItem title={item.title} description={item.description} imageUrl={item.urlToImage} newUrl={item.url} author={item.author} publishedAt={item.publishedAt}
                                source={item.source.name} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-sm btn-dark" onClick={this.handlePrevClick}>Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-sm btn-dark" onClick={this.handleNextClick}>Next</button>
                </div> */}
                {/* Previous Next button logic */}
                <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length !== this.state.totalResults} loader={<Spinner />}>
                    <div className="row my-3">
                        {this.state.articles.map((item) => {
                            return <div className="col-md-4" key={item.url}>
                                <NewsItem title={item.title} description={item.description} imageUrl={item.urlToImage} newUrl={item.url} author={item.author} publishedAt={item.publishedAt}
                                    source={item.source.name} />
                            </div>
                        })}
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News