import React from "react";

import AppCard from "./AppCard";

class Posts extends React.Component {
  render() {
    return (
      <ul className="d-flex flex-column">
        <li>
          <AppCard>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </AppCard>
        </li>

        <li>
          <AppCard>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </AppCard>
        </li>

        <li>
          <AppCard>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </AppCard>
        </li>
      </ul>
    );
  }
}

export default Posts;
