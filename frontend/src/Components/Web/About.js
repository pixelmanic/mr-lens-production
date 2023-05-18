import React, { useEffect } from "react";
import "../../Styles/About.css";

export default function About() {
  useEffect(() => {
    const aboutSection = document.getElementById('about');
    const aboutTitle = document.querySelector('#about h3');
    const cardsDiv = document.querySelector('#about .cardsMain');

    function checkScroll() {
      // Get the position of the bottom of the viewport
      const bottomOfViewport = window.scrollY + window.innerHeight;

      // Check if the bottom of the about section is visible
      if (bottomOfViewport > aboutSection.offsetTop + aboutSection.offsetHeight / 5) {
        // Add the visible class to the about title and cards div
        aboutTitle.classList.add('visibleP');
        cardsDiv.classList.add('visibleM');

        // Remove the event listener to prevent unnecessary checks
        window.removeEventListener('scroll', checkScroll);
      }
    }

    // Add event listener to check for scroll
    window.addEventListener('scroll', checkScroll);

    // Call the checkScroll function initially in case the section is already in view
    checkScroll();

    // Clean up function to remove event listener when the component unmounts
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);
  return (
    <div id="about" className="about">
      <h3 className="para hiddenP">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </h3>
      <div className="cardsMain hiddenM">
        <h1 className="team">MEET THE TEAM</h1>
        <div className="cardsDiv">
          <a
            href="https://www.instagram.com/ah_murtaz/"
            rel="noreferrer"
            target="_blank"
            className="Card"
          >
            <img alt='member' className="Image" src="\Images\ahmadai.jpg"></img>
            <h4 className="cardName">Murtaza</h4>
            <p className="CardSkill">photog /videog /Graphic Designer</p>
          </a>
          <a
            href="https://www.instagram.com/barish_ashrafi/"
            rel="noreferrer"
            target="_blank"
            className="Card"
          >
            <img alt='member' className="Image" src="\Images\mustafa.png"></img>
            <h4 className="cardName">Mustafa Ashrafi</h4>
            <p className="CardSkill">photog /videog /Graphic Designer</p>
          </a>
          <a
            href="https://www.instagram.com/aryan__haider/"
            rel="noreferrer"
            target="_blank"
            className="Card"
          >
            <img alt='member' className="Image" src="\Images\raza.png"></img>
            <h4 className="cardName">Ali Raza shafaie</h4>
            <p className="CardSkill">Graphic Designer</p>
          </a>
          <a
            href="https://www.instagram.com/karbalai_irfan/"
            rel="noreferrer"
            target="_blank"
            className="Card"
          >
            <img alt='member' className="Image" src="\Images\irfan.png"></img>
            <h4 className="cardName">Irfan</h4>
            <p className="CardSkill">Photo Grapher</p>
          </a>
          <a
            href="https://www.instagram.com/mustafa_nazari7/"
            rel="noreferrer"
            target="_blank"
            className="Card"
          >
            <img alt='member' className="Image" src="\Images\mustafa nazari.png"></img>
            <h4 className="cardName">Mustafa Nazari</h4>
            <p className="CardSkill">Web Developer /Graphic Designer</p>
          </a>
        </div>
      </div>
    </div>
  );
}
