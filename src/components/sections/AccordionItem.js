import React from "react";
import Image from '../elements/Image';

const AccordionItem = ({
  showDescription,
  ariaExpanded,
  fontWeightBold,
  item,
  index,
  onClick,
  items,
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
        {
          items 
          ? <>
              {
                items.map(x => (
                  <div className="icon-langguages" key={x.id}>
                    <Image
                    src={require(`./../../assets/images/${x.image}`)}
                    alt="Project Appointment"
                    width={48}/>
                    <span>{x.name}</span>
                  </div>
                ))
              }
            </>
          : <h1>no data</h1>
        }
      </div>
      
    </dd>
  </div>
);

export default AccordionItem;
