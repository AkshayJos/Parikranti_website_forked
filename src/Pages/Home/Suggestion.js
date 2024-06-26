import React from 'react';


function SuggestionContainer() {
  return (
    <div className="suggestion-container">
       <img className="suggestion-content" src='/Images/suggestion.png' alt="" /> 
      <div className="suggestion-content">
        <h1 className="para_S">Share your suggestion</h1>
        <p className="para_S">Your feedback is crucial for us. It guides our improvements, shapes our products, and ensures we meet your needs. It empowers us to innovate and stay relevant. Your input fosters partnership and drives our success.</p>
      </div>
    </div>
  );
}

function SuggestionBox() {
  return (
    <div id="suggestion-box">
      <form>
        <label htmlFor="goals">Choose a Goal:</label>
        <select id="goals" name="goals">
          <option value="goal1">No Poverty</option>
          <option value="goal2">Zero Hunger</option>
          <option value="goal4">Good health and well-being</option>
          <option value="goal5">Quality education</option>
          <option value="goal6">Gender equality</option>
          <option value="goal7">Clean water and sanitation</option>
          <option value="goal8">Affordable and clean energy</option>
          <option value="goal9">Decent work and economic growth</option>
          <option value="goal9">Industry innovation and infrastructure</option>
          <option value="goal10">Reduced inequalities</option>
          <option value="goal11">Sustainable cities and communities</option>
          <option value="goal12">Responsible consumption and production</option>
          <option value="goal13">Climate action</option>
          <option value="goal14">Life below water</option>
          <option value="goal15">Life on land</option>
          <option value="goal16">Peace justice and strong institutions</option>
          <option value="goal17">Partnership for the goals</option>
         
        </select>
        <label htmlFor="projects">Choose a Project:</label>
        <select id="projects" name="projects">
          <option value="project1">Project 1</option>
          <option value="project2">Project 2</option>
          <option value="project3">Project 3</option>
         
        </select>
        <label htmlFor="suggestion">Your Suggestion:</label><br />
        <textarea id="suggestion" name="suggestion" rows="4" required></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

function Suggestion() {
  return (
    <div>
      <SuggestionContainer />
      <SuggestionBox />
    </div>
  );
}

export default Suggestion;
