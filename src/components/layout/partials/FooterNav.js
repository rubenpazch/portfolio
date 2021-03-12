import React from 'react';
import classNames from 'classnames';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link  className="test1" to="portfolio0"   duration={500} >Portfolio</Link>
        </li>
        <li>
          <Link  className="test1" to="aboutme0"   duration={500} >About me</Link>
        </li>
        <li>
          <Link  className="test1" to="contactme0"   duration={500} >Contact me</Link>
        </li>
        
      </ul>
    </nav>
  );
}

export default FooterNav;