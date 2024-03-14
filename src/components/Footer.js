import React from "react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return <footer className='wrapper'>&copy; {currentYear} Quotivation</footer>;
};

export default Footer;
