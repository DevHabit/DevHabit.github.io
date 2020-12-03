import React from "react";
import Particles from "react-particles-js";
import Progress from "components/progress";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faYoutube,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
import ThemeContext from "../../context";
import "./styles.scss";

class Hero extends React.Component {
  static contextType = ThemeContext;

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="about"
        style={{ height: this.context.height }}
      >
        {this.particles()}
        <Row>
          <Col md={6} className="content">
            <div className="content-text">
              <div className="line-text">
                <h4>About Me</h4>
              </div>
              <h3>Senior Fullstack Developer</h3>
              <div className="separator" />
              <p>
                Zhi Heng is a talented Mobile developer with 5+ years experience
                and a WEB EXPERT with 10+ years. He is an excellent problem
                solver and have the experience required to create solutions for
                projects and ideas that are technically challenging.
              </p>
              <div className="social social_icons">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="social_icon"
                  onClick={() => window.open("https://github.com/DevHabit")}
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="social_icon"
                  onClick={() => window.open("https://twitter.com/sun_zhiheng")}
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="social_icon"
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/zhiheng-devhabit")
                  }
                />
              </div>
            </div>
          </Col>
          <Col md={6} className="skills">
            <div className="line-text">
              <h4>My Skills</h4>
            </div>
            <div className="skills-container">
              <Progress name="React.js" value={100} delay={1100} />
              <Progress name="React Native" value={100} delay={1200} />
              <Progress name="Vue.js" value={90} delay={1300} />
              <Progress name="Docker" value={75} delay={1400} />
              <Progress name="Node.js" value={80} delay={1500} />
              <Progress name="Python" value={90} delay={1600} />
              <Progress name="SQL" value={100} delay={1700} />
              <Progress name="MongoDB" value={80} delay={1800} />
              <Progress name="Amazon Web Service" value={85} delay={1900} />
              <Progress name="Git" value={99} delay={2000} />
            </div>
          </Col>
        </Row>
      </section>
    );
  }

  particles() {
    return (
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: false,
                value_area: 5000,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.5,
            },
            size: {
              value: 1,
            },
          },
          retina_detect: true,
        }}
      />
    );
  }
}

export default Hero;
