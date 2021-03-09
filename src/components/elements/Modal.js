import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../elements/Image';
import Button from '../elements/Button';

const propTypes = {
  children: PropTypes.node,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  closeHidden: PropTypes.bool,
  video: PropTypes.string,
  videoTag: PropTypes.oneOf(['iframe', 'video'])
}

const defaultProps = {
  children: null,
  show: false,
  closeHidden: false,
  video: '',
  videoTag: 'iframe'
}

const Modal = ({
  className,
  children,
  handleClose,
  show,
  closeHidden,
  video,
  videoTag,
  ...props
}) => {

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', stopProgagation);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', stopProgagation);
    };    
  });

  useEffect(() => {
    handleBodyClass();
  }, [props.show]); 
  
  const handleBodyClass = () => {
    if (document.querySelectorAll('.modal.is-active').length) {
      document.body.classList.add('modal-is-active');
    } else {
      document.body.classList.remove('modal-is-active');
    }
  }

  const keyPress = (e) => {
    e.keyCode === 27 && handleClose(e);
  }

  const stopProgagation = (e) => {
    e.stopPropagation();
  }

  const classes = classNames(
    'modal',
    show && 'is-active',
    video && 'modal-video',
    className
  );

  return (
    <>
      {show &&
        <div
          {...props}
          className={classes}
          onClick={handleClose}
        >
          
          <div className="modal-inner p-16" onClick={stopProgagation} >
            <div className="header-modal m-0">
              <h3 className="m-0 p-0">Title</h3>
              <div className="p-0 m-0">
                  <ul className="title-list m-0 p-0">
                    <li className="m-0 p-0">Microverse <span className="pr-8 pl-8">&#8226;</span></li>
                    <li className="m-0 p-0">Full Stack Developer <span className="pr-8 pl-8">&#8226;</span></li>
                    <li className="m-0 p-0">2020</li>
                  </ul>
              </div>
            </div>
             
            <div className="image-content" >
                <Image
                  src={require('./../../assets/images/portfolio1.png')}
                  alt="Project Appointment"
                  width={396}
                  height={404} />
            </div>
            

            {!closeHidden &&
              <button
                className="modal-close"
                aria-label="close"
                onClick={handleClose}
              ></button>
            }

            
            <div className="modal-content m-0 p-0"> 
              <div className="information-content">
                <p className="text-section-modal p-8">
                The application has the ability to register new users, login into the application creating a token session, when we are logged in to the application we can select a service (Surgery, Medicine, and others), each of the options shows different doctors and their attendance availability, finally, we can create an appointment for a specific date and service.
                The application has the ability to register new users, login into the application creating a token session, when we are logged in to the application we can select a service (Surgery, Medicine, and others), each of the options shows different doctors and their attendance availability, finally, we can create an appointment for a specific date and service.
                </p>
                <div className="links-section-modal">
                  <div className="split-item-languages m-0 p-0">
                    <ul className="m-0 p-0">
                      <li>Ruby and Rails</li>                    
                      <li>React & Redux</li>
                      <li>Postgres</li>
                      <li>API Rest</li>
                    </ul>
                  </div>

                  <Button tag="a" color="light" wideMobile href="https://cruip.com/" className="mt-32">
                    See Project
                  </Button>
                  <Button tag="a" color="light" wideMobile href="https://cruip.com/" className="mt-32">
                    See Project
                  </Button>
                </div>
              </div>
            </div>            
          </div>
        </div>
      }
    </>
  )
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;