import React from 'react'
import './admin_div.css';

function admin_div() {
  return (
  <>
  <div className="flip-card admin_pic">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src= './Images/team_member.png' alt="Avatar" />
    </div>
    <div className="flip-card-back">
      <h1>Member_name</h1>
      <p>NGO employee</p>
      <p>We love to help people</p>
    </div>
    <div className="icons">
      <a href="">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
    </div>
  </div>
</div>
  </>
  )
}

export default admin_div