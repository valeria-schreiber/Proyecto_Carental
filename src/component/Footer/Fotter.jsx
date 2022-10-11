import React from "react";
import "../../styles/footer.css";
import copy from "../../assets/img/icons/copy.png";
import fb from "../../assets/img/icons/fb.png";
import ins from "../../assets/img/icons/ins.png";
import li from "../../assets/img/icons/link.png";
import tw from "../../assets/img/icons/twitter.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-right">
        <img src={copy} alt="copyright" className="img-footer" />
        <h3 className="titulo-footer">2022 Digital Rent</h3>
      </div>
      <div className="footer-left">
        <img src={fb} alt="Facebook" className="img-footer" />
        <img src={li} alt="linkedin" className="img-footer" />
        <img src={tw} alt="twitter" className="img-footer" />
        <img src={ins} alt="instagram" className="img-footer" />
      </div>
    </div>
  );
};

export default Footer;
