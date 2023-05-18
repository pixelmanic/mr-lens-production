import React from "react";
import "../../Styles/Footer.css";

export default function Footer() {
  return (
    <div className="Fmajor">
      <div className="Fmain">
        <div className="oneF">
          <a href="http://localhost:3000/">
            <img className="brandF" src=".\Images\Artboard 1.png"></img>
          </a>
          <h3 className="brandC">
            <i class="bi bi-c-circle"></i> 2023 Mr Lens Production
          </h3>
        </div>
        <div className="line"></div>
        <div className="twoF">
          <h2 className="twoh2">Connect with us on social Media</h2>
          <div className="linksDiv">
            <a href="https://www.instagram.com/mrlensproduction/" rel="noreferrer" target="_blank" className="insta iconsF">
              <i class="bi bi-instagram iconsF"></i>
            </a>
            <a href="" rel="noreferrer" target="_blank" className="facebook iconsF">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="" rel="noreferrer" target="_blank" className="twitter iconsF">
              <i class="bi bi-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="Fmain2">
        <a href="https://www.fiverr.com/share/a9l2YA" target="_blank" rel="noreferrer" className="developer">By Mustafa Nazari(codezilla7)</a>
      </div>
    </div>
  );
}
