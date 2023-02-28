import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./About.scss"

function About() {

  return (
    <div class="about-main">
      <Header />      
      <div className="about-body">
        <Sidebar className="about-sidebar"/>
        <div>
          <h1>About me</h1>
          <p>I am awesome, and working at being more awesome.</p>   
        </div> 

      </div>
    </div>
  )
}

export default About;