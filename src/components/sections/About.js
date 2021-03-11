import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Image from '../elements/Image';
import Button from '../elements/Button';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const About = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="fluid about-footer">
        <div
          className={innerClasses}
        >
          <div className="container myself-container">
            <div className="content-myself">
              <h3>About myself</h3>
              <p><strong>I am a full stack developer.</strong> I just graduated from Microverse, a full-time remote web development program, after seven months where I created amazing projects using best programming practices. In addition to creating more than 40+ projects, I also developed skills such as cross-cultural communication, creativity, conflict resolution, time management, and pair programming with international students. Before joining Microverse, I worked in a financial banking company in Peru as a full stack developer, designing and developing software automation for accounting reports which processed millions of records. I also developed some other freelance projects for local companies designing and building some web applications.</p>
              <a href="https://www.linkedin.com/in/rubenpch/">LET'S CONNECT</a>
              <ul className="d-flex flex-row p-0 m-0">
                <li className="pr-16 pt-16">
                  <a href="https://twitter.com/ChuspePaz" className="p-0 m-0">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-07.svg')}
                      alt="Features tile icon 01"
                      />
                  </a>
                </li>
                <li className="pr-16 pt-16">
                  <a href="https://www.linkedin.com/in/rubenpch/" className="p-0 m-0">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-08.svg')}
                      alt="Features tile icon 01"
                      />
                  </a>
                </li>
                <li className="pr-16 pt-16">
                  <a href="https://angel.co/u/ruben-paz-chuspe" className="p-0 m-0">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-15.svg')}
                      alt="Features tile icon 01"                    
                      />
                  </a>
                </li>
                <li className="pr-16 pt-16">
                  <a href="https://medium.com/@rubenpazchuspe.rpc" className="p-0 m-0">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-17.svg')}
                      alt="Features tile icon 01"
                      />
                  </a>
                </li>
                <li className="pr-16 pt-16">
                  <a href="https://stackoverflow.com/users/8272786/ruben-paz-chuspe?tab=profile" className="p-0 m-0">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-19.svg')}
                      alt="Features tile icon 01"
                      />
                  </a>
                </li>
                <li className="pt-16">
                  <a href="https://github.com/rubenpazch" className="p-0 m-0">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-09.svg')}
                      alt="Features tile icon 01"
                      />
                  </a>
                </li>
              </ul>
              <Button tag="a" color="light" wideMobile href="#" className="mt-32" >
                  Get my resume
              </Button>
            </div>
            <div className="tech-languages">
              <h5>langguages</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

About.propTypes = propTypes;
About.defaultProps = defaultProps;

export default About;