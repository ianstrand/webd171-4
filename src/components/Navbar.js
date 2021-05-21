import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

class Navbarwith extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          h1txt: ""
        };
  }

  handleName = e => {
    this.setState({h1txt: this.props.name + ' (' + this.props.myobjects[e].title + ') in the top navbar.'});
  };

  handleLink = e => {
    this.setState({h1txt: this.props.myobjects[e].title + ' in the top navbar.'});
  };

  render () {
    return (
      <>
      <div className="navbar-content">
        <Navbar bg="light" expand>
          <Navbar.Brand href={this.props.myobjects[0].link} onClick={() => this.handleName(0)}>{this.props.name}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href={this.props.myobjects[0].link} onClick={() => this.handleLink(0)}>{this.props.myobjects[0].title}</Nav.Link>
              <Nav.Link href={this.props.myobjects[1].link} onClick={() => this.handleLink(1)}>{this.props.myobjects[1].title}</Nav.Link>
              <Nav.Link href={this.props.myobjects[2].link} onClick={() => this.handleLink(2)}>{this.props.myobjects[2].title}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        <Container>
          <Row>
            <Col>
              <h1 className="pt-5">I clicked on... {this.state.h1txt}</h1>
            </Col>
          </Row>
        </Container>
      </div>
      </>
    );
  }
}

export default Navbarwith;