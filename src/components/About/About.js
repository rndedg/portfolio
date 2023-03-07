import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./About.scss"

function About() {

  return (
    <div className="about-main">
      <Header />
      <div className="about-body">
        <Sidebar className="about-sidebar"/>

        <div className="about-info">
          <h1 id="page-title">About Gord</h1>
          <div className="about-writeup">
            <p>Gord grew up in a small town called Powell River on the West Coast of B.C. After the local paper mill he was working at was shut down, he took the opportunity to attend a Web Development Bootcamp through Lighthouse Labs.
            </p>
            <p>He has always enjoyed working on and with computers and wanted to learn more about how things worked in the background. He hopes this new career direction will provide solid, long-term stability for him and his family.
            </p>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default About;