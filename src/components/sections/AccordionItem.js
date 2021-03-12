import React from "react";
import Image from '../elements/Image';

const AccordionItem = ({
  showDescription,
  ariaExpanded,
  fontWeightBold,
  item,
  index,
  onClick,
}) => (
  <div className="faq__question" key={item.question}>
    <dt>
      <button
        aria-expanded={ariaExpanded}
        aria-controls={`faq${index + 1}_desc`}
        data-qa="faq__question-button"
        className={`faq__question-button ${fontWeightBold}`}
        onClick={onClick}
      >
        {item.question}
      </button>
    </dt>
    <dd className="ml-0">
      <div 
      id={`faq${index + 1}_desc`}
      data-qa="faq__desc"
      className={`faq__desc ${showDescription}`}>
        <div className="icon-langguages">
          <Image
          src={require('./../../assets/images/pl-ruby.png')}
          alt="Project Appointment"
          width={48}/>
          <span>Javascript</span>
        </div>
        <div className="icon-langguages">
          <Image
          src={require('./../../assets/images/pl-csharp.png')}
          alt="Project Appointment"
          width={48}/>
          <span>Csharp</span>
        </div>
        <div className="icon-langguages">
          <Image
          src={require('./../../assets/images/pl-javascript.png')}
          alt="Project Appointment"
          width={48}/>
          <span>Javascript</span>
        </div>
        <div className="icon-langguages">
          <Image
          src={require('./../../assets/images/pl-java.png')}
          alt="Project Appointment"
          width={48}/>
          <span>Javascript</span>
        </div>
        
      </div>
      
    </dd>
  </div>
);

export default AccordionItem;
