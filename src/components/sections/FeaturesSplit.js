import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
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
  const [videoModalActive6, setVideomodalactive6] = useState(false);
  const [videoModalActive7, setVideomodalactive7] = useState(false);
  const [videoModalActive8, setVideomodalactive8] = useState(false);
  const [videoModalActive9, setVideomodalactive9] = useState(false);

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

  const openModal6 = (e) => {
    e.preventDefault();
    setVideomodalactive6(true);   
  }

  const closeModal6 = (e) => {
    e.preventDefault();
    setVideomodalactive6(false);
  }

  const openModal7 = (e) => {
    e.preventDefault();
    setVideomodalactive7(true);   
  }

  const closeModal7 = (e) => {
    e.preventDefault();
    setVideomodalactive7(false);
  }

  const openModal8 = (e) => {
    e.preventDefault();
    setVideomodalactive8(true);   
  }

  const closeModal8 = (e) => {
    e.preventDefault();
    setVideomodalactive8(false);
  }

  const openModal9 = (e) => {
    e.preventDefault();
    setVideomodalactive9(true);   
  }

  const closeModal9 = (e) => {
    e.preventDefault();
    setVideomodalactive9(false);
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
      name="portfolio0"
    >
      <div className="container main-container" name="portfolio1" >
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
                titleContent="Hospital Appointment"
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
                Shooter game is a project built using JavaScript and the game engine Phaser. In order to learn how to build games with Phaser 3 and Webpack 4.
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
                titleContent="Shooter Game"
                companyContent="Microverse"
                roleContent="Full Stack Developer"
                yearContent="2020"
                projectContent="Shooter game is a project built using JavaScript and the game engine Phaser. In order to learn how to build games with Phaser 3 and Webpack 4 the last version I did follow some tutorials and customize a previous example for building this amazing web application, the goal of this game is to kill different enemies shooting them and after finishing the two stages get a final score compared with other players score. Every stage increases the speed of how enemies appear."
                featureImage="portfolio5.png"
                techList={[{id: 1 ,name: "Javascript 6"}, {id: 2 ,name:"Webpack4"}, {id: 3 ,name:"Phaser 3"}]}
                linkGithub={"https://github.com/rubenpazch/shooter-game"}
                linkLivePreview={"https://phasershootergamejs.herokuapp.com/"}
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
                  src={require('./../../assets/images/portfolio6.png')}
                  alt="Project Appointment"/>
              </div>

              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-16 p-0">
                SASS Linter with Ruby
                </h3>
                <div className="p-0 mb-8 mt-0">
                  <ul className="item_list m-0 p-0">
                    <li className="m-0 p-0">Microverse <span className="pr-8 pl-8">&#8226;</span></li>
                    <li className="m-0 p-0">Full Stack Developer <span className="pr-8 pl-8">&#8226;</span></li>
                    <li className="m-0 p-0">2020</li>
                  </ul>
                </div>
                <p className="m-0">
                SASS linter with Ruby is a command-line application built entirely with Ruby, like a developer sometimes we have some good programming practices to apply in our code, writing clean code is always good, it helps other programmers to maintain the application.
                </p>
                <div className="split-item-languages m-0 p-0">
                  <ul className="m-0 p-0">
                    <li>Ruby</li>
                    <li>SASS</li>
                    <li>OOP</li>
                    <li>Ruby Modules</li>
                  </ul>
                </div>
                <Button tag="a" color="light" wideMobile href="#" className="mt-32" onClick={openModal6}>
                  See Project
                </Button>
              </div>
              
              <Modal
                id="video-modal"
                show={videoModalActive6}
                handleClose={closeModal6}
                children={"<h1>casa</h1>"}
                videoTag="iframe"
                titleContent="SASS Linter with Ruby"
                companyContent="Microverse"
                roleContent="Full Stack Developer"
                yearContent="2020"
                projectContent="SASS linter with Ruby is a command-line application built entirely with Ruby, like a developer sometimes we have some good programming practices to apply in our code, writing clean code is always good, it helps other programmers to maintain the application, this app checks if you had written your code using good practices and left you know which line and column need to be changed, for example (Comment white space inside after, Comment white space inside before, Unexpected missing end of source newline, Expected empty line before the comment, Expected indentation of zero spaces, Expected indentation of 2 spaces), are features from this project.."
                featureImage="portfolio6.png"
                techList={[{id: 1 ,name: "Ruby"}, {id: 2 ,name:"SASS"}, {id: 3 ,name:"OOP"}, {id: 4 ,name:"Ruby Modules"}]}
                linkGithub={"https://github.com/rubenpazch/capstone-project-linter-parses-files"}
                linkLivePreview={"https://repl.it/@RubenPaz/capstone-project-linter-parses-files"}
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
                  src={require('./../../assets/images/portfolio7.png')}
                  alt="Project Appointment"/>
              </div>

              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-16 p-0">
                Conference Page
                </h3>
                <div className="p-0 mb-8 mt-0">
                  <ul className="item_list m-0 p-0">
                    <li className="m-0 p-0">Microverse <span className="pr-8 pl-8">&#8226;</span></li>
                    <li className="m-0 p-0">Full Stack Developer <span className="pr-8 pl-8">&#8226;</span></li>
                    <li className="m-0 p-0">2020</li>
                  </ul>
                </div>
                <p className="m-0">
                Conference Page is a static site developed using HTML, CSS, Javascript, SASS, Font Awesome, it was used FlexBox to build the layout from the entire website. 
                </p>
                <div className="split-item-languages m-0 p-0">
                  <ul className="m-0 p-0">
                    <li>HTML</li>
                    <li>SASS</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>font-awesome</li>
                  </ul>
                </div>
                <Button tag="a" color="light" wideMobile href="#" className="mt-32" onClick={openModal7}>
                  See Project
                </Button>
              </div>
              
              <Modal
                id="video-modal"
                show={videoModalActive7}
                handleClose={closeModal7}
                children={"<h1>casa</h1>"}
                videoTag="iframe"
                titleContent="Conference Page"
                companyContent="Microverse"
                roleContent="Full Stack Developer"
                yearContent="2020"
                projectContent="Conference Page is a static site developed using HTML, CSS, Javascript, SASS, Font Awesome, it was used FlexBox to build the layout from the entire website. To build this site it was given an initial design and some basic specifications from the client, the content of this project were personalized for a Workshop E-commerce if a company wants to promote an event for a conference, congress or any activity related with education, they can use this site, there is a section to show information some general information, show all program information, featured speakers, partners, tickers."
                featureImage="portfolio7.png"
                techList={[{id: 1 ,name: "HTML"}, {id: 2 ,name:"SASS"}, {id: 3 ,name:"CSS"}, {id: 4 ,name:"Javascript"}, {id: 5 ,name:"font-awesome"}]}
                linkGithub={"https://github.com/rubenpazch/capstone-conference-page"}
                linkLivePreview={"https://compassionate-nightingale-93193a.netlify.app/"}
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
                  src={require('./../../assets/images/portfolio8.png')}
                  alt="Project Appointment"/>
              </div>

              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-16 p-0">
                Bookstore React Redux App
                </h3>
                <div className="p-0 mb-8 mt-0">
                  <ul className="item_list m-0 p-0">
                    <li className="m-0 p-0">Microverse <span className="pr-8 pl-8">&#8226;</span></li>
                    <li className="m-0 p-0">Full Stack Developer <span className="pr-8 pl-8">&#8226;</span></li>
                    <li className="m-0 p-0">2020</li>
                  </ul>
                </div>
                <p className="m-0">
                Bookstore Redux App is a web application built with react and redux, this web application has a booklist component to show all books, book form to create new books, apply some filter to list of books, filter books by categories.
                </p>
                <div className="split-item-languages m-0 p-0">
                  <ul className="m-0 p-0">
                    <li>Javascript 6</li>
                    <li>NPM</li>                    
                    <li>Redux</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
                <Button tag="a" color="light" wideMobile href="#" className="mt-32" onClick={openModal8}>
                  See Project
                </Button>
              </div>
              
              <Modal
                id="video-modal"
                show={videoModalActive8}
                handleClose={closeModal8}
                children={"<h1>casa</h1>"}
                videoTag="iframe"
                titleContent="Bookstore React Redux App"
                companyContent="Microverse"
                roleContent="Full Stack Developer"
                yearContent="2020"
                projectContent="Bookstore Redux App is a web application built with react and redux, this web application has a booklist component to show all books, book form to create new books, apply some filter to list of books, filter books by categories."
                featureImage="portfolio8.png"
                techList={[{id: 1 ,name: "Javascript 6"}, {id: 2 ,name:"NPM"}, {id: 3 ,name:"Redux"}, {id: 4 ,name:"React"}, {id: 5 ,name:"Bootstrap"}]}
                linkGithub={"https://github.com/rubenpazch/bookstore-redux"}
                linkLivePreview={"https://bookstore-reactredux.herokuapp.com/"}
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
                  src={require('./../../assets/images/portfolio9.png')}
                  alt="Project Appointment"/>
              </div>

              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-16 p-0">
                NewsWeek Clone
                </h3>
                <div className="p-0 mb-8 mt-0">
                  <ul className="item_list m-0 p-0">
                    <li className="m-0 p-0">Microverse <span className="pr-8 pl-8">&#8226;</span></li>
                    <li className="m-0 p-0">Full Stack Developer <span className="pr-8 pl-8">&#8226;</span></li>
                    <li className="m-0 p-0">2020</li>
                  </ul>
                </div>
                <p className="m-0">
                Newsweek.com is a news website for this project I did clone the full website using HTML, CSS, and Bootstrap, the website has many sections like feature stories, opinion, more histories, culture and travel, top stories, ads section, latest news, in the magazine, tech & science, footer.
                </p>
                <div className="split-item-languages m-0 p-0">
                  <ul className="m-0 p-0">
                    <li>HTML</li>
                    <li>SASS</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>font-awesome</li>
                  </ul>
                </div>
                <Button tag="a" color="light" wideMobile href="#" className="mt-32" onClick={openModal9}>
                  See Project
                </Button>
              </div>
              
              <Modal
                id="video-modal"
                show={videoModalActive9}
                handleClose={closeModal9}
                children={"<h1>casa</h1>"}
                videoTag="iframe"
                titleContent="NewsWeek Clone"
                companyContent="Microverse"
                roleContent="Full Stack Developer"
                yearContent="2020"
                projectContent="Newsweek.com is a news website for this project I did clone the full website using HTML, CSS, and Bootstrap, the website has many sections like feature stories, opinion, more histories, culture and travel, top stories, ads section, latest news, in the magazine, tech & science, footer, all this section have a specific behavior depending on the device. This is a responsive site ready to use in Mobile, Laptop, or Tablet. Finally, I have to mention that to build this project it was used the best programming practices relative to front end development."
                featureImage="portfolio9.png"
                techList={[{id: 1 ,name: "HTML"}, {id: 2 ,name:"SASS"}, {id: 3 ,name:"CSS"}, {id: 4 ,name:"Javascript"}, {id: 5 ,name:"font-awesome"}]}
                linkGithub={"https://github.com/rubenpazch/Newsweek-com-Bootstrap-"}
                linkLivePreview={"https://happy-stonebraker-bc9837.netlify.app/"}
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