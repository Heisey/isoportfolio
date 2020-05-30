import React from 'react';

import './Contact.scss';

export default function Contact(props) {

  const handleMouseEnter = () => {
    // $('.form').css({"-webkit-animation": "rotateTop 1s linear", "-webkit-animation-fill-mode":"forwards"});
   }

   const handleMouseLeave = () => {
    // $('.form').css({"-webkit-animation": "rotate 1s linear", "-webkit-animation-fill-mode":"forwards"});
   }

  // $('.form').on('mouseenter', function(){
  //   $('.form').css({"-webkit-animation": "rotateTop 1s linear", "-webkit-animation-fill-mode":"forwards"});
  //  });
  //  $('.form').on('mouseleave', function(){
  //    $('.form').css({"-webkit-animation": "rotate 1s linear", "-webkit-animation-fill-mode":"forwards"});
  //  });

  return (
    <div className="contact">
      <div 
        className="form"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="form-face front">
          <h1>Contact Us!</h1>
        </div>
        <div className="form-face top">
        </div>
        <div className="form-face back"></div>
        <div className="form-face bottom">
          <input type="text" id="email" value="Your email address..."/>
          <button type="submit"><i className="fa fa-chevron-right"></i></button>
        </div>
        <div className="form-side right"></div>
        <div className="form-side left"></div>
      </div>
    </div>
  )
}