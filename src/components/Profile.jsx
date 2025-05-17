import React from 'react'
import '../css/Profile.css'
import profilepic from '../assets/profile.jpg'
import Button from '@mui/material/Button';

const Profile = () => {
      const onButtonClick = () => {
        fetch("SDEResume.pdf").then((response) => {
            response.blob().then((blob) => {
                const fileURL =
                    window.URL.createObjectURL(blob);
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "SDEResume.pdf";
                alink.click();
            });
        });
    };
  return (
    <div className='profile'>
      <img src={profilepic} alt="Profile image" />
      <h1>I'm <span>Thomas James</span><br/>a Front End Developer</h1>
      <p>I have over 4 years experience</p>
      <div className="profile-action">
        <Button onClick={onButtonClick} variant="contained">My Resume</Button>
      </div>
    </div>
  )
}

export default Profile
