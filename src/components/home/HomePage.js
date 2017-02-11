/**
 * Created by nazim on 09/02/17.
 */
import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>CreditExchange App Administration</h1>
        <p></p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}
export default HomePage;
