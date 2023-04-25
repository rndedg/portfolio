import { SvgIcon } from "@mui/material";
import { Link } from "react-router-dom";

import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Contact.scss"

function Contact() {

  return (
    <div className="contact-main" id="Contact">
      <div className="contact-body">
        <div className="contact-info">
          <h1 id="page-title">Contact</h1>
          <p>If you would like to get in touch with Gord, here are a few ways to do so:</p> 
          <ul>
            <li><SvgIcon component={EmailIcon}></SvgIcon><a href="mailto:g.j.letkeman@gmail.com">Send him an email</a></li>
            <li><SvgIcon component={LinkedInIcon}></SvgIcon><Link to="https://www.linkedin.com/in/gord-letkeman/">Visit him on LinkedIn</Link></li>
            <li><SvgIcon component={GitHubIcon}></SvgIcon><Link to="https://github.com/rndedg">Check out his GitHub</Link></li>
          </ul>       
        </div>
      </div>
    </div>
  )
}

export default Contact;