import React from 'react';
import { Jumbotron, Container, Row, Col, Card } from 'react-bootstrap';

class Bodynav extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        jumbotxt: "Isn't this awesome?",
        pg2txt: "Please visit Page 2! We are sure that you will like our content.",
        pg3txt: "Please visit Page 3! We are sure that you will like our content."
      };
  }

  handleJumbo = e => {
    this.setState({ 
      jumbotxt: 'Thanks for visiting our ' + this.props.myobjects[e].title + ' Page!',
      pg2txt: 'Please visit Page 2! We are sure that you will like our content.',
      pg3txt: 'Please visit Page 3! We are sure that you will like our content.'
    });
  };

  handlePg2 = e => {
    this.setState({ 
      jumbotxt: 'Isn\'t this awesome?',
      pg2txt: 'Thanks for visiting ' + this.props.myobjects[e].title + '!',
      pg3txt: 'Please visit Page 3! We are sure that you will like our content.'
    });
  };

  handlePg3 = e => {
    this.setState({
      jumbotxt: 'Isn\'t this awesome?',
      pg2txt: 'Please visit Page 2! We are sure that you will like our content.',
      pg3txt: 'Thanks for visiting ' + this.props.myobjects[e].title + '!'
    });
  };

  render () {
    return (
      <div className="main-container pb-5">
        <Container className="pb-5">
          <Row>
            <Col className="pt-4">
            <p className="pb-5">We did it! We are using state in our navbar.</p>
            <Jumbotron>
              <h2>This is the card for the {this.props.myobjects[0].title} Page!</h2>
              <p>{this.state.jumbotxt}</p>
              <p> <a className="btn btn-primary" href={this.props.myobjects[0].link} onClick={() => this.handleJumbo(0)}>{this.props.myobjects[0].title}</a> </p>
            </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col>
            <Card>
              <Card.Header>{this.props.myobjects[1].title}</Card.Header>
              <Card.Body>
                <Card.Title>Title for {this.props.myobjects[1].title}</Card.Title>
                <Card.Text>{this.state.pg2txt}</Card.Text>
                <a className="btn btn-primary" href={this.props.myobjects[1].link} onClick={() => this.handlePg2(1)}>{this.props.myobjects[1].title}</a> </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
              <Card.Header>{this.props.myobjects[2].title}</Card.Header>
              <Card.Body>
                <Card.Title>Title for {this.props.myobjects[2].title}</Card.Title>
                <Card.Text>{this.state.pg3txt}</Card.Text>
                <a className="btn btn-primary" href={this.props.myobjects[2].link} onClick={() => this.handlePg3(2)}>{this.props.myobjects[2].title}</a> </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Bodynav;