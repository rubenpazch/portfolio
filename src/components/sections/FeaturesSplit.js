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

  const [videoModalActive1, setVideomodalactive1] = useState(false);
  const [videoModalActive2, setVideomodalactive2] = useState(false);
  const [videoModalActive3, setVideomodalactive3] = useState(false);
  const [videoModalActive4, setVideomodalactive4] = useState(false);
  const [videoModalActive5, setVideomodalactive5] = useState(false);

  const openModal1 = (e) => {
    e.preventDefault();
    setVideomodalactive1(true);   
  }

  const closeModal1 = (e) => {
    e.preventDefault();
    setVideomodalactive1(false);
  }

  const openModal2 = (e) => {
    e.preventDefault();
    setVideomodalactive2(true);   
  }

  const closeModal2 = (e) => {
    e.preventDefault();
    setVideomodalactive2(false);
  }

  const openModal3 = (e) => {
    e.preventDefault();
    setVideomodalactive3(true);   
  }

  const closeModal3 = (e) => {
    e.preventDefault();
    setVideomodalactive3(false);
  }

  const openModal4 = (e) => {
    e.preventDefault();
    setVideomodalactive4(true);   
  }

  const closeModal4 = (e) => {
    e.preventDefault();
    setVideomodalactive4(false);
  }

  const openModal5 = (e) => {
    e.preventDefault();
    setVideomodalactive5(true);   
  }

  const closeModal5 = (e) => {
    e.preventDefault();
    setVideomodalactive5(false);
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
                <Button tag="a" color="light" wideMobile href="#" className="mt-32" onClick={openModal1}>
                  See Project
                </Button>
              </div>
              
              <Modal
                id="video-modal"
                show={videoModalActive1}
                handleClose={closeModal1}
                children={"<h1>casa</h1>"}
                videoTag="iframe"
                titleContent="Hospital Appointment System"
                companyContent="Microverse"
                roleContent="Full Stack Developer"
                yearContent="2020"
                projectContent="Hospital Appointment System is a web application tablet version, this application was build using ROR and React & Redux the latest version, includes the ability to register new users, login into the application creating a token session, when we are logged in the application we can select a service (Surgery, Medicine and others), each of the options show different doctors and their attendance availability, finally we can create an appointment for a specific date and service."
                featureImage="portfolio1.png"
                techList={[{id: 1 ,name: "Ruby and Rails"}, {id: 2 ,name:"React & Redux"}, {id: 3 ,name:"Postgres"}, {id: 4 ,name:"API Rest"}]}
                linkGithub={"https://github.com/rubenpazch/appointment-view"}
                linkLivePreview={"https://agile-lowlands-59460.herokuapp.com/Dashboard"}
              />  
            </div>

            <div className="split-item">
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/portfolio3.png')}
                  alt="Project Appointment"/>
              </div>

              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-16 p-0">
                  e-Tours Web Application
                </h3>
                <div className="p-0 mb-8 mt-0">
                  <ul className="item_list m-0 p-0">
                    <li className="m-0 p-0">Microverse <span className="pr-8 pl-8">&#8226;</span></li>
                    <li className="m-0 p-0">Full Stack Developer <span className="pr-8 pl-8">&#8226;</span></li>
                    <li className="m-0 p-0">2020</li>
                  </ul>
                </div>
                <p className="m-0">
                  e-Tours Web Application is a web application desktop version to receive a list of tours from an API
                </p>
                <div className="split-item-languages m-0 p-0">
                  <ul className="m-0 p-0">
                    <li>React</li>
                    <li>Redux</li>
                    <li>CSS Modules</li>
                    <li>React Hooks</li>
                    <li>React Testing Library</li>
                  </ul>
                </div>
                <Button tag="a" color="light" wideMobile href="#" className="mt-32" onClick={openModal3}>
                  See Project
                </Button>
                <div>
                  
                </div>
              </div>
     
              <Modal
                id="video-modal"
                show={videoModalActive3}
                handleClose={closeModal3}
                children={"<h1>casa</h1>"}
                videoTag="iframe"
                titleContent="e-Tours Web Application"
                companyContent="Microverse"
                roleContent="Full Stack Developer"
                yearContent="2020"
                projectContent="e-Tours Web Application is a web application desktop version to receive a list of tours from an API, this information is dynamic, we are able to filter our list by price, title or also we can use the search option to find tours for a specific city (New York, Mexico Cito, Lima, Boston), check tours details by clicking each tour. This application was build using React & Redux."
                featureImage="portfolio3.png"
                techList={[{id: 1 ,name: "React"}, {id: 2 ,name:"Redux"}, {id: 3 ,name:"CSS Modules"}, {id: 4 ,name:"React Hooks"}, {id: 5 ,name:"React Testing Library"}]}
                linkGithub={"https://github.com/rubenpazch/catalogue-of-dog-clothes"}
                linkLivePreview={"https://sad-sinoussi-c7723c.netlify.app/"}
              />  
            </div>
            
            <div className="split-item">
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/portfolio2.png')}
                  alt="Project Appointment"/>
              </div>

              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-16 p-0">
                  Weather App
                </h3>
                <div className="p-0 mb-8 mt-0">
                  <ul className="item_list m-0 p-0">
                    <li className="m-0 p-0">Microverse <span className="pr-8 pl-8">&#8226;</span></li>
                    <li className="m-0 p-0">Full Stack Developer <span className="pr-8 pl-8">&#8226;</span></li>
                    <li className="m-0 p-0">2020</li>
                  </ul>
                </div>
                <p className="m-0">
                This project is about building a web application to show a weather forecast using weather API from external services.
                </p>
                <div className="split-item-languages m-0 p-0">
                  <ul className="m-0 p-0">
                    <li>Javascript 6</li>
                    <li>Webpack 3</li>
                    <li>Rest API</li>
                  </ul>
                </div>
                <Button tag="a" color="light" wideMobile href="#" className="mt-32" onClick={openModal2}>
                  See Project
                </Button>
                <div>
                  
                </div>
              </div>
        
              <Modal
                id="video-modal"
                show={videoModalActive2}
                handleClose={closeModal2}
                children={"<h1>casa</h1>"}
                videoTag="iframe"
                titleContent="Weather App"
                companyContent="Microverse"
                roleContent="Full Stack Developer"
                yearContent="2020"
                projectContent="This project is about building a web application to show a weather forecast using weather API from external services like https://openweathermap.org/ and https://giphy.com/, you should be able to search for a specific location and toggle displaying the data in Fahrenheit or Celsius, to use the app place a name of the city and click on search, every time you click on search the info will go to the left, you can have three different results."
                featureImage="portfolio2.png"
                techList={[{id: 1 ,name: "Javascript 6"}, {id: 2 ,name:"Webpack 3"}, {id: 3 ,name:"Rest API"}]}
                linkGithub={"https://github.com/rubenpazch/js-weather-app"}
                linkLivePreview={"http://weather-app.cuscosolutions.com/"}
              />  
            </div>

            <div className="split-item">
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/portfolio4.png')}
                  alt="Project Appointment"/>
              </div>
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-16 p-0">
                  Group our Wishlist
                </h3>
                <div className="p-0 mb-8 mt-0">
                  <ul className="item_list m-0 p-0">
                    <li className="m-0 p-0">Microverse <span className="pr-8 pl-8">&#8226;</span></li>
                    <li className="m-0 p-0">Full Stack Developer <span className="pr-8 pl-8">&#8226;</span></li>
                    <li className="m-0 p-0">2020</li>
                  </ul>
                </div>
                <p className="m-0">
                Group our Wishlist is a web application with responsive behavior for mobile usage built with Ruby on Rails this application is based on an app for grouping payments by a goal.
                </p>
                <div className="split-item-languages m-0 p-0">
                  <ul className="m-0 p-0">
                    <li>Ruby and Rails</li>
                    <li>Bootstrap</li>
                    <li>Postgresql</li>
                    <li>Heroku</li>
                  </ul>
                </div>
                <Button tag="a" color="light" wideMobile href="#" className="mt-32" onClick={openModal4}>
                  See Project
                </Button>
                <div>
                  
                </div>
              </div>
              
              <Modal
                id="video-modal"
                show={videoModalActive4}
                handleClose={closeModal4}
                children={"<h1>casa</h1>"}
                videoTag="iframe"
                titleContent="Group our Wishlist"
                companyContent="Microverse"
                roleContent="Full Stack Developer"
                yearContent="2020"
                projectContent="Group our Wishlist is a web application with responsive behavior for mobile usage built with Ruby on Rails this application is based on an app for grouping payments by a goal with your family/friends. Exploring this project you can find these options (login, sign-in, all my wishlist, all my external wishlist, all groups and log out, check out a wish list as an additional feature)."
                featureImage="portfolio4.png"
                techList={[{id: 1 ,name: "Ruby and Rails"}, {id: 2 ,name:"Bootstrap"}, {id: 3 ,name:"Postgresql"}, {id: 4 ,name:"Heroku"}]}
                linkGithub={"https://github.com/rubenpazch/Group-our-transactions"}
                linkLivePreview={"https://morning-taiga-75196.herokuapp.com/"}
              />  
            </div>
            
            <div className="split-item">

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/portfolio5.png')}
                  alt="Project Appointment"/>
              </div>

              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-16 p-0">
                  Shooter Game
                </h3>
                <div className="p-0 mb-8 mt-0">
                  <ul className="item_list m-0 p-0">
                    <li className="m-0 p-0">Microverse <span className="pr-8 pl-8">&#8226;</span></li>
                    <li className="m-0 p-0">Full Stack Developer <span className="pr-8 pl-8">&#8226;</span></li>
                    <li className="m-0 p-0">2020</li>
                  </ul>
                </div>
                <p className="m-0">
                Shooter game is a project built using JavaScript and the game engine Phaser. In order to learn how to build games with Phaser 3 and Webpack 4
                </p>
                <div className="split-item-languages m-0 p-0">
                  <ul className="m-0 p-0">
                    <li>Javascript 6</li>
                    <li>Webpack 4</li>
                    <li>Phaser 3</li>                    
                  </ul>
                </div>
                <Button tag="a" color="light" wideMobile href="#" className="mt-32" onClick={openModal5}>
                  See Project
                </Button>
                <div>
                  
                </div>
              </div>
              
              <Modal
                id="video-modal"
                show={videoModalActive5}
                handleClose={closeModal5}
                children={"<h1>casa</h1>"}
                videoTag="iframe"
                titleContent="Group our Wishlist"
                companyContent="Microverse"
                roleContent="Full Stack Developer"
                yearContent="2020"
                projectContent="Shooter game is a project built using JavaScript and the game engine Phaser. In order to learn how to build games with Phaser 3 and Webpack 4 the last version I did follow some tutorials and customize a previous example for building this amazing web application, the goal of this game is to kill different enemies shooting them and after finishing the two stages get a final score compared with other players score. Every stage increases the speed of how enemies appear."
                featureImage="portfolio5.png"
                techList={[{id: 1 ,name: "Javascript 6"}, {id: 2 ,name:"Webpack4"}, {id: 3 ,name:"Phaser 3"}]}
                linkGithub={"https://github.com/rubenpazch/shooter-game"}
                linkLivePreview={"https://morning-taiga-75196.herokuapp.com/"}
              />  
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