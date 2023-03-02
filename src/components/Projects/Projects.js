import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./Projects.scss"

function Projects() {

  return (
    <div className="projects-main">
      <Header />      
      <div className="projects-body">
        <Sidebar />

        <div>
          <h1 id="page-title">Current and Past Projects</h1>
            <div className="projects-info">
              <div id="proj-1">
              <h3>
                <Link to="https://github.com/BrianKendalBucek/budgie">Budgie</Link>
              </h3>
              <img id="budgie-logo" src="https://github.com/BrianKendalBucek/budgie/blob/main/assets/budgie-icon.png?raw=true" alt="budgie logo"></img>
              <p>The final project Gord created for Lighthouse Labs. It is a multiple-currency budgeting app for those traveling or living abroad. He mainly focused on the frontend work, which allowed him to try using Material UI and React Router for the first time. The group is continuing work on the app and hopes to one day deploy it for anyone to use.</p>
              </div>
              <div id="proj-2">

              <p>The mid-term project for Lighthouse Labs. It is a food ordering app, so the user can order food and pick it up when it is ready. Gord spent most of his time on this project working with SASS and trying out fun animations using CSS. The group integrated Twilio to send the restaurant an SMS notification of a new order and notify the user that the order was received.</p>
              <h3>
                <Link to="https://github.com/Sszyh/Okee-Dok-Eats">Okee-Dok-Eats</Link>
              </h3>              
              </div>
              <div id="proj-3">
              <h3>
                <Link>This Portfolio Page</Link>                
              </h3>
              <p>This page will be an ever-evolving display of Gord's work. He plans to add projects as they are built and make adjustments to this site as he learns new techniques.</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;