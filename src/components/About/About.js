import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./About.scss";
import "animate.css";

function About() {
  return (
    <div className="about-main">
      <Header />
      <div className="about-body">
        <Sidebar className="about-sidebar" />
        <div>
          <h1 id="about-title">About Gord</h1>
          <div className="about-info">
            <div className="about-writeup">
              <p>
                Gord grew up in a small town called Powell River on the West
                Coast of B.C. After the local paper mill he was working at was
                shut down, he took the opportunity to attend a Web Development
                Bootcamp through Lighthouse Labs.
              </p>
              <p>
                He has always enjoyed working on and with computers and wanted
                to learn more about how things worked in the background. He
                hopes this new career direction will provide solid, long-term
                stability for him and his family.
              </p>
            </div>
            <img
              className="animate__animated animate__fadeIn"
              src="https://github.com/rndedg/portfolio/blob/master/assets/gord-bass.jpg?raw=true"
              alt="Gord in the zone playing bass"
              id="gord-bass"
              title="Gord in the zone playing bass"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
