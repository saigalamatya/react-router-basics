import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends Component {

  render() {
    return (
      <div>
        <strong>404! Not found - <Link to="/">Go Home</Link></strong>
      </div>
    );
  }  
}

export default PageNotFound;