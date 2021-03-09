import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
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
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Workflow that just works',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container main-container">
        <div className={innerClasses}>
          
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-16 p-0">
                  Hospital Appointment System
                </h3>
                <div className="p-0 mb-8 mt-0">
                  <ul className="item_list m-0 p-0">
                    <li className="m-0 p-0">Microverse <span className="pr-8 pl-8">&#8226;</span></li>
                    <li className="m-0 p-0">Full Stack Developer <span className="pr-8 pl-8">&#8226;</span></li>
                    <li className="m-0 p-0">2020</li>
                  </ul>
                </div>
                <p className="m-0">
                The application has the ability to register new users, login into the application creating a token session, when we are logged in to the application we can select a service (Surgery, Medicine, and others), each of the options shows different doctors and their attendance availability, finally, we can create an appointment for a specific date and service.
                </p>
                <div className="split-item-languages m-0 p-0">
                  <ul className="m-0 p-0">
                    <li>Ruby and Rails</li>                    
                    <li>React & Redux</li>
                    <li>Postgres</li>
                    <li>API Rest</li>
                  </ul>
                </div>
                <Button tag="a" color="light" wideMobile href="https://cruip.com/" className="mt-32" onClick={openModal}>
                  See Project
                </Button>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/portfolio1.png')}
                  alt="Project Appointment"/>
              </div>
            </div>
            <Modal
              id="video-modal"
              show={videoModalActive}
              handleClose={closeModal}
              children={"<h1>casa</h1>"}
              videoTag="iframe"
            />  

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-16 p-0">
                  Hospital Appointment System
                </h3>
                <div className="p-0 mb-8 mt-0">
                  <ul className="item_list m-0 p-0">
                    <li className="m-0 p-0">Microverse <span className="pr-8 pl-8">&#8226;</span></li>
                    <li className="m-0 p-0">Full Stack Developer <span className="pr-8 pl-8">&#8226;</span></li>
                    <li className="m-0 p-0">2020</li>
                  </ul>
                </div>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 
                </p>
                <div className="split-item-languages m-0 p-0">
                  <ul className="m-0 p-0">
                    <li>Ruby and Rails</li>
                    <li>Ruby</li>
                    <li>React</li>
                  </ul>
                </div>
                <Button tag="a" color="light" wideMobile href="https://cruip.com/" className="mt-32">
                  See Project
                </Button>
                <div>
                  
                </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/portfolio1.png')}
                  alt="Project Appointment"/>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-16 p-0">
                  Hospital Appointment System
                </h3>
                <div className="p-0 mb-8 mt-0">
                  <ul className="item_list m-0 p-0">
                    <li className="m-0 p-0">Microverse <span className="pr-8 pl-8">&#8226;</span></li>
                    <li className="m-0 p-0">Full Stack Developer <span className="pr-8 pl-8">&#8226;</span></li>
                    <li className="m-0 p-0">2020</li>
                  </ul>
                </div>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 
                </p>
                <div className="split-item-languages m-0 p-0">
                  <ul className="m-0 p-0">
                    <li>Ruby and Rails</li>
                    <li>Ruby</li>
                    <li>React</li>
                  </ul>
                </div>
                <Button tag="a" color="light" wideMobile href="https://cruip.com/" className="mt-32">
                  See Project
                </Button>
                <div>
                  
                </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/portfolio1.png')}
                  alt="Project Appointment"/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;