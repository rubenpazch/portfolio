import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Image from '../elements/Image';
import Button from '../elements/Button';
import AccordionItem from './AccordionItem';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const questionsAnswers = [
  {
    id: 1,
    question: "Langguages",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    icons:[
      {id: 1, image:"pl-ruby.png",name:"Ruby"},
      {id: 2, image:"pl-csharp.png",name:"C#"},
      {id: 3, image:"pl-java.png",name:"Java"},
      {id: 4, image:"pl-javascript.png",name:"Javascript"}
    ]
  },
  {
    id: 2,
    question: "Frameworks",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
    icons:[
       {id: 1, image:"pl-rails.png",name:"ROR"},
       {id: 2, image:"pl-react.png",name:"React"},
       {id: 3, image:"pl-redux.png",name:"Redux"},
       {id: 4, image:"pl-netframe.png",name:"MVC 5"},
       {id: 5, image:"pl-netframe.png",name:"EF"},       
     ]
  },
  {
    id: 3,
    question: "Skills",
    answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
    icons:[
      {id: 1, image:"pl-soft-skills.png",name:"English"},
      {id: 2, image:"pl-soft-skills.png",name:"Reading"},
      {id: 3, image:"pl-soft-skills.png",name:"Writing"},
      {id: 4, image:"pl-soft-skills.png",name:"Speaking"},
    ]
  }
];

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

  const [activeIndex, setActiveIndex] = useState(0);

  const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description" : "";
    const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <AccordionItem
        showDescription={showDescription}
        fontWeightBold={fontWeightBold}
        ariaExpanded={ariaExpanded}
        item={item}
        key={item.id}
        index={index}
        items={item.icons}
        onClick={() => {
          setActiveIndex(index);
        }}
      />
    );
  });

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
      name="aboutme0"
    >
      <div className="fluid about-footer" name="aboutme1">
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
              <Button tag="a" color="light" wideMobile href="../src/assets/cv-rubenpazchuspe-web.pdf" className="mt-32" >
                  Get my resume
              </Button>
            </div>
            <div className="tech-languages m-0 p-0">
              <div className="faq">
                
                <dl className="faq__list">{renderedQuestionsAnswers}</dl>
              </div>
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