import React from 'react';
import employeeImg from '../assets/edited-profile-pic.png';
import mockEmployeeImg from '../assets/mock-image-testimonial-section.jpg';
import pestControlSvgImg from '../assets/10780550_19198459.svg';

import pestControlWorkerImg from '../assets/5972364_21696.jpg';

import pestControlTeamImg from '../assets/5972364_21696.jpg';

export default function MeetYourTeam() {
  return (
    <div className="meet-team-content-wrapper">



      <div className='team-title-subtitle-wrapper'>

      <div className="team-title-subtitle-container">
        <h1>
          Meet Our Expert <span className='pest-control-team-text-styles'>Pest Control Team</span>
        </h1>

        <p>
          Our dedicated team of skilled professionals brings years of expertise in effective pest control solutions.
          Meet our experienced team members below.
        </p>
      </div>


      {/* <img src={pestControlWorkerImg} className='pest-control-worker-img'></img> */}

      <img src={pestControlTeamImg} className='pest-control-team-img'></img>



      </div>




    <div className='team-profile-container'> 

        <div className='team-member-profile-container'> 
            
            <h3>John Smith</h3>
            <img src={mockEmployeeImg}></img>
            <p>Termite Technician</p>

            <p>"My Goal is to go above and beyond to help you!"</p>

        </div>

        <div className='team-member-profile-container'> 
            
            <h3>David Williams</h3>
            <img src={mockEmployeeImg}></img>
            <p>Wildlife Technician</p>

            <p>"My Goal is to do an excellent job everyday and to get the job done!"</p>

        </div>

        <div className='team-member-profile-container'> 
            
            <h3>Andy Frisella</h3>
            <img src={mockEmployeeImg}></img>
            <p>Termite Inspector</p>

            <p>"My Goal is to provide the very best customer service!"</p>

        </div>

        <div className='team-member-profile-container'> 
            
            <h3>Ed Mylett</h3>
            <img src={mockEmployeeImg}></img>
            <p>Rodent Expert</p>

            <p>"My Goal is to ensure your home and family are safe!"</p>

        </div>

    </div>



    </div>
  );
}
