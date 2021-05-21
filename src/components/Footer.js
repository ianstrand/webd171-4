import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ftxt: "",
		  	ftxt2: ""
	  	};
	}

	handleLink = e => {
      this.setState({
      	ftxt: 'I clicked on ' + this.props.myobjects[e].title + ' in the footer navbar.',
      	ftxt2: '(' + this.props.myobjects[e].title + ')'
      });
    };

	    render () {
	    	return (
				<footer className="text-muted text-center">
				  <Container>
		              <Row className="justify-content-center pt-4 mb-2">
		                <Col md={3} className="mb-3">
		                <h6 className="text-uppercase font-weight-bold"> <a href={this.props.myobjects[0].link} onClick={() => this.handleLink(0)}>{this.props.myobjects[0].title}</a> </h6>
		                </Col>
		                <Col md={3} className="mb-3">
		                <h6 className="text-uppercase font-weight-bold"> <a href={this.props.myobjects[1].link} onClick={() => this.handleLink(1)}>{this.props.myobjects[1].title}</a> </h6>
		                </Col>
		                <Col md={3} className="mb-3">
		                <h6 className="text-uppercase font-weight-bold"> <a href={this.props.myobjects[2].link} onClick={() => this.handleLink(2)}>{this.props.myobjects[2].title}</a> </h6>
		                </Col>
		              </Row>
		              <Row className="justify-content-center mb-4">
		                <Col md={8} className="mt-3">
		                <p>{this.state.ftxt}</p>
		                <p>It is a lot of fun to work with react-bootstrap! This example is created for WEBD171, for the Fall 2020 class session. We are creating React apps in this course.</p>
		                </Col>
		              </Row>
		              <hr />
		            </Container>
				  <div className="footer-copyright pt-4 pb-5"><a href={this.props.myobjects[0].link} onClick={() => this.handleLink(0)}>&copy; 2020 {this.props.name} for WEBD171</a> {this.state.ftxt2}</div>
				</footer>
			);
		}
	}

export default Footer;