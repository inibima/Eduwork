import React from 'react';
import NewsItem from './NewsItem';

class NewsList extends React.Component {
  render() {
    return (
      <div className="row">
        {this.props.articles.map((article, index) => (
          <div key={index} className="col-md-4">
            <NewsItem article={article} />
          </div>
        ))}
      </div>
    );
  }
}

export default NewsList;