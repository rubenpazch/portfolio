import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h2 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              I'm Ruben and I love coding
            </h2>
            <div className="container-sm">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
                Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
              </p>
            </div>
            <a href="www.google.com">LET'S CONNECT</a>
            <ul className="d-flex flex-row p-0 m-0">
              <li className="pr-16 pt-16">
                <a href="www.google.com" className="p-0 m-0">
                  <Image
                    src={require('./../../assets/images/feature-tile-icon-07.svg')}
                    alt="Features tile icon 01"
                    />
                </a>
              </li>
              <li className="pr-16 pt-16">
                <a href="www.google.com" className="p-0 m-0">
                  <Image
                    src={require('./../../assets/images/feature-tile-icon-08.svg')}
                    alt="Features tile icon 01"
                    />
                </a>
              </li>
              <li className="pr-16 pt-16">
                <a href="www.google.com" className="p-0 m-0">
                  <Image
                    src={require('./../../assets/images/feature-tile-icon-15.svg')}
                    alt="Features tile icon 01"                    
                    />
                </a>
              </li>
              <li className="pr-16 pt-16">
                <a href="www.google.com" className="p-0 m-0">
                  <Image
                    src={require('./../../assets/images/feature-tile-icon-17.svg')}
                    alt="Features tile icon 01"
                    />
                </a>
              </li>
              <li className="pr-16 pt-16">
                <a href="www.google.com" className="p-0 m-0">
                  <Image
                    src={require('./../../assets/images/feature-tile-icon-19.svg')}
                    alt="Features tile icon 01"
                    />
                </a>
              </li>
              <li className="pt-16">
                <a href="www.google.com" className="p-0 m-0">
                  <Image
                    src={require('./../../assets/images/feature-tile-icon-09.svg')}
                    alt="Features tile icon 01"
                    />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;