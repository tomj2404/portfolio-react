import React from 'react'
import '../css/Profile.css'
import profilepic from '../assets/profile.jpg'

const Profile = () => {
  return (
    <div className='profile'>
      <img src={profilepic} alt="Profile image" />
      <h1><span>I'm Thomas James</span>, a Front End Developer.</h1>
      <p1>I have 3.6 years experience</p1>
      <div className="profile-action">
        <div className="profile-connect">Connect With Me</div>
        <div className="profile-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Profile
