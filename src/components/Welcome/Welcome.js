import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./Welcome.scss"

function Welcome() {

  return (
    <div class="welcome-main">
      <Header />      
      <div className="welcome-body">
        <Sidebar className="welcome-sidebar"/>
        <div>
          <h1>Welcome</h1>
          <p>Here I will give a brief breakdown of me</p>
          <p>Please use the sidebar to view more information on me, my projects (past and present) and my contact information.</p>        
        </div>
      </div>
    </div>
  )
}

export default Welcome;