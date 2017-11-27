import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

class Contributor extends Component {
  render() {
    const { contributor } = this.props;

    return (
      <Card>
        <CardImg top width="100%" src={contributor.avatar_url} alt="Card image cap" />
        <CardBody>
          <CardTitle>{contributor.login}</CardTitle>
          <CardSubtitle>{contributor.html_url}</CardSubtitle>
          <CardText>repos: {contributor.repos_url}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default Contributor;
