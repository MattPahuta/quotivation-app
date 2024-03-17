import React from "react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return <footer className='wrapper'>&copy; {currentYear} Quotivation | Developed by Matt Pahuta</footer>;
};

export default Footer;
