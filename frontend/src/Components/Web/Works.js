import React, { useEffect, useState } from "react";
import { Image } from "antd";
import "../../Styles/Works.css";
import axios from "axios";

export default function Works() {
  const [data,setdata] = useState('');
  const [pending,setpending] = useState(true);
  const [error , seterror] = useState('')

  useEffect(() => { 
    const worksSection = document.getElementById('works');
    const worksTitle = document.querySelector('#works h1');
    const cardsDiv = document.querySelector('#works .main2');

    function checkScroll() {
      // Get the position of the bottom of the viewport
      const bottomOfViewport = window.scrollY + window.innerHeight;

      // Check if the bottom of the about section is visible
      if (bottomOfViewport > worksSection.offsetTop + worksSection.offsetHeight / 7) {
        // Add the visible class to the about title and cards div
        worksTitle.classList.add('visibleP');
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

  useEffect(()=> {
        axios.get('http://localhost:8000/works')
          .then(res=> {
            setdata(res.data)
            setpending(false)
          })
          .catch(err => {
            seterror(err.message)
            setpending(false)
          })
  },[])
  return (
    <div id="works" className="works">
      <h1 className="worksTxt hiddenP">Works</h1>
      <div className="main2 hiddenM">
        {pending && <h1>Loading...</h1>}
        {data &&
          data.map((work) => {
            return (
              <div className="imgDiv">
                <Image className="workImg" src={work.imgSrc} />
              </div>
            );
          })}
          {error && <h1>{error}</h1>}
      </div>
    </div>
  );
}
