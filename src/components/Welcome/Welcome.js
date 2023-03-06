import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./Welcome.scss"
import 'animate.css';

function Welcome() {

  return (
    <div>
      <Header />      
      <div className="welcome-main">
        <Sidebar className="welcome-sidebar"/>
        <div className="welcome-body">
          <div className="welcome-left">
          <h1>Gordon J.A. Letkeman</h1>

            <p>Welcome to my portfolio page! This will be an ever-evolving page to see what I have worked on and also a great way to connect with me. Feel free to take a closer look at my Past Projects or read up a bit about who I am and what makes me tick. I appreciate you stopping by, and hope you have a great day.</p>

            <p>Please use the top navigation to view more information on me, my projects (past and present) and my contact information.</p>
          </div>
          <img
          className="animate__animated animate__lightSpeedInRight"
            id="gord-fire"
            src="https://github.com/rndedg/portfolio/blob/master/assets/gord-fire.jpg?raw=true"
            alt="Gord leaning on a shovel"/>          
        </div>
      </div>
    </div>
  )
}

export default Welcome;