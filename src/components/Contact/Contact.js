import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

import "./Contact.scss"

function Contact() {

  return (
    <div className="contact-main">
      <Header />      
      <div className="contact-body">
        <Sidebar className="contact-sidebar"/>
        <div className="contact-info">
          <h1 id="page-title">Contact</h1>
          <p>Here I will show all my contact information</p> 
          <ul>
            <li><a href="mailto:g.j.letkeman@gmail.com">Send Gord an email</a></li>
            <li><Link to="https://www.linkedin.com/in/gord-letkeman/">Visit Gord on LinkedIn</Link></li>
            <li><Link to="https://github.com/rndedg">Check out Gord's GitHub</Link></li>
          </ul>       
        </div>
      </div>
    </div>
  )
}

export default Contact;