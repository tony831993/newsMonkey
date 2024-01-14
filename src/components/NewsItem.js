import React, { Component } from 'react'

export class News extends Component {

    render() {
        let { title, description, imageUrl, newUrl, author, publishedAt, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card news-card">
                    <div className='d-flex'>
                        <span className="category-badge position-absolute badge rounded-pill bg-dark" style={{right: '0', top: '-2%'}}>{source}</span>
                    </div>
                    <img src={(imageUrl) ? imageUrl : 'https://www.jclex.com/images/newsbg.jpg'} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><strong>By</strong> {author ? author : 'Unknown'} | <strong>on</strong> {new Date(publishedAt).toLocaleDateString("de-DE")}</p>
                        <a href={newUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default News