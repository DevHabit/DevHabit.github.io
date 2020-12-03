import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import BaffleText from "components/baffle-text";
import AnimationContainer from "components/animation-container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faAngular, faAws } from "@fortawesome/free-brands-svg-icons";
import {
  faPencilRuler,
  faServer,
  faRobot,
  faSmileBeam,
  faPizzaSlice,
  faQuoteRight,
  faCode,
  faMobile,
  faLayerGroup,
  faBezierCurve,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import Counter from "components/counter";
import ThemeContext from "../../context";
import "./styles.scss";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.show = this.show.bind(this);
  }

  static contextType = ThemeContext;

  show() {
    this.setState({ show: true });
  }

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="services"
        style={{ height: this.context.height }}
      >
        <Row
          className="top"
          style={{
            maxHeight:
              this.context.height !== "auto"
                ? this.context.height * 0.8
                : "inherit",
          }}
        >
          <div className="content">
            <Col md={12}>
              <div className="line-text">
                <h4>Services</h4>
              </div>
              <div className="heading">
                <BaffleText
                  text="What I Do"
                  revealDuration={500}
                  revealDelay={500}
                  parentMethod={this.show}
                  callMethodTime={1100}
                />
              </div>
              <div
                className="services_container"
                style={{
                  minHeight:
                    this.context.height !== "auto"
                      ? this.context.height * 0.6
                      : "inherit",
                }}
              >
                <Container>{this.services()}</Container>
              </div>
            </Col>
          </div>
        </Row>
        <Row className="bottom">{this.counters()}</Row>
      </section>
    );
  }

  services() {
    if (this.state.show || this.context.height === "auto") {
      return (
        <Row>
          <Col md={4} className="service">
            <AnimationContainer delay={200} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faReact} />
              </div>
              <h4>Front-end</h4>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
                In et sem libero. Integer pretium, tellus eu pellentesque
                tristique, ex libero maximus elit, mollis tristique urna eros
                non tellus
              </p> */}
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={400} animation="fadeInDown fast">
              <div className="icon">
                <FontAwesomeIcon icon={faMobile} />
              </div>
              <h4>React Native Mobile App</h4>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
                In et sem libero. Integer pretium, tellus eu pellentesque
                tristique, ex libero maximus elit, mollis tristique urna eros
                non tellus
              </p> */}
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={600} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faLayerGroup} />
              </div>
              <h4>Fullstack Development</h4>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
                In et sem libero. Integer pretium, tellus eu pellentesque
                tristique, ex libero maximus elit, mollis tristique urna eros
                non tellus
              </p> */}
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={800} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faAws} className="solid" />
              </div>
              <h4>AWS Management</h4>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
                In et sem libero. Integer pretium, tellus eu pellentesque
                tristique, ex libero maximus elit, mollis tristique urna eros
                non tellus
              </p> */}
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={1000} animation="fadeInUp fast">
              <div className="icon">
                <FontAwesomeIcon icon={faBezierCurve} className="solid" />
              </div>
              <h4>Project Management</h4>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
                In et sem libero. Integer pretium, tellus eu pellentesque
                tristique, ex libero maximus elit, mollis tristique urna eros
                non tellus
              </p> */}
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={1200} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faRobot} className="solid" />
              </div>
              <h4>Artifical Intelligence</h4>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
                In et sem libero. Integer pretium, tellus eu pellentesque
                tristique, ex libero maximus elit, mollis tristique urna eros
                non tellus
              </p> */}
            </AnimationContainer>
          </Col>
        </Row>
      );
    }
  }

  counters() {
    if (this.state.show || this.context.height === "auto") {
      return (
        <Container>
          <Col md={6}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faDatabase}
                value={20}
                text="Projects"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={6}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faSmileBeam}
                value={10}
                text="Years of Experience"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          {/* <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faQuoteRight}
                value={500}
                text="Reviews"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faCode}
                value={50000}
                text="Lines of Code"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col> */}
        </Container>
      );
    }
  }
}

export default Services;
