import React, { Component } from 'react'
import './Links.css'

class Links extends Component {
    render() {
        return(
            <div className="links">
          <a className="links" href="#">
            <i className="fa fa-comments-o"></i>
            <span className="links-text">Comments</span>
          </a>
          <a className="links" href="#">
            <i className="fa fa-share"></i>
            <span className="links-text">Share Post</span>
          </a>
        </div>
        )
    }
}

export default Links