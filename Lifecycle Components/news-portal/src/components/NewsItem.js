import React from 'react';

class NewsItem extends React.Component {
  render() {
    const { title, description, url, urlToImage } = this.props.article;

    return (
      <div className="card mb-3">
        <img className="card-img-top" src={urlToImage} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      </div>
    );
  }
}

export default NewsItem;