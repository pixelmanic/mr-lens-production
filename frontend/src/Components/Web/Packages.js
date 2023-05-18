import React, { useEffect } from 'react'
import '../../Styles/Packages.css'

export default function Packages() {
    useEffect(() => { 
        const packageSection = document.getElementById('packages');
        const packageTitle = document.querySelector('#packages h1');
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        const img3 = document.getElementById('img3');
        const img4 = document.getElementById('img4');
    
        function checkScroll() {
          // Get the position of the bottom of the viewport
          const bottomOfViewport = window.scrollY + window.innerHeight;
    
          // Check if the bottom of the about section is visible
          if (bottomOfViewport > packageSection.offsetTop + packageSection.offsetHeight / 7) {
            // Add the visible class to the about title and cards div
            packageTitle.classList.add('visibleP');
            img1.classList.add('visibleM');
            img2.classList.add('visibleM2');
            img3.classList.add('visibleM3');
            img4.classList.add('visibleM4');
    
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
    <div id='packages' className='main'>
        <h1 className='packTxt hiddenP' >Packages</h1>
        <h3 className='Packpara' >Enjoy our services with our highEnd deals </h3>
        <div className='packagesDiv'>
            <a key="contact" href="#contact" id='img1' className='hiddenM'>
                <img className='package' alt='package' src='\Images\simom-caban-kFmFQeJRgJM-unsplash.jpg'></img>
            </a>
            <a key="contact" href="#contact" id='img2' className='hiddenM2'>
                <img className='package' alt='package' src='\Images\simom-caban-kFmFQeJRgJM-unsplash.jpg'></img>
            </a>
            <a key="contact" href="#contact" id='img3' className='hiddenM3'>
                <img className='package' alt='package' src='\Images\simom-caban-kFmFQeJRgJM-unsplash.jpg'></img>
            </a>
            <a key="contact" href="#contact" id='img4' className='hiddenM4'>
                <img className='package' alt='package' src='\Images\simom-caban-kFmFQeJRgJM-unsplash.jpg'></img>
            </a>
        </div>
    </div>
  )
}
