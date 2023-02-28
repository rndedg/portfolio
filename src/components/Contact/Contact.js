import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./Contact.scss"

function Contact() {

  return (
    <div class="contact-main">
      <Header />      
      <div className="contact-body">
        <Sidebar className="contact-sidebar"/>
        <div>
          <h1>Welcome</h1>
          <p>Here I will show all my contact information</p> 
          <ul>
            <li>Email</li>
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>Creddle</li>
          </ul>       
        </div>
      </div>
    </div>
  )
}

export default Contact;