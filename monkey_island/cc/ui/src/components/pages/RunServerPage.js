import React from 'react';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import AuthService from '../../services/AuthService'

class RunServerPageComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // TODO: something real
    let auth = new AuthService();
    auth.login('monkey', 'infectio1n');
    return (
      <Col xs={12} lg={8}>
        <h1 className="page-title">1. Monkey Island C&C Server</h1>
        <div style={{'fontSize': '1.2em'}}>
          <p style={{'marginTop': '30px'}}>Congrats! You have successfully set up the Monkey Island server. &#x1F44F; &#x1F44F;</p>
          <p>
            The Infection Monkey is an open source security tool for testing a data center's resiliency to perimeter
            breaches and internal server infections.
            The Monkey uses various methods to propagate across a data
            center and reports to this Command and Control (C&C) server.
          </p>
          <p>
            To read more about the Monkey, visit <a href="http://infectionmonkey.com" target="_blank">infectionmonkey.com</a>
          </p>
          <p>
            Go ahead and <Link to="/run-monkey">run the monkey</Link>.
          </p>
        </div>
      </Col>
    );
  }
}

export default RunServerPageComponent;
