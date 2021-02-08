import Head from 'next/head'
import styles from '../styles/Home.module.css'


//VIDEO BACKGROUND
//import bgvideo from './../video/forest.mp4';
//IMPORT fontawesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

// library.add( fas, faPhoneAlt )


export default function Home() {
  constructor() {
    super();
    this.state={
      name: '',
      email: '',
      message:''
    }
  }
  
  return (
    <>
      {/* <video playsinline autoplay muted loop id="backgroundVideo">
        <source src={bgvideo} type="video/mp4" />
      </video> */}
      <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
      </Head>

      <h1>Contact Us</h1>
      <p className="sub-title">lorem ipsum</p>

      <div id="contact-container">
        <div className="contact-info">
          <h4>Contact Information</h4>
          <p>Fill Up the Form and then click send</p>
          <div className="icon-text">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <span>000-000-0000</span>
          </div>
          <div className="icon-text">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            <span>smart@one.com</span>
          </div>
          <div className="icon-text">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <span>436 Jetson Space, Space Cadet</span>
          </div>
          <div className="social-media">
              <a href="#" className="icon-circle">
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
              </a>
              <a href="#" className="icon-circle">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#" className="icon-circle">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="#" className="icon-circle">
                <i className="fa fa-youtube" aria-hidden="true"></i>
              </a>
          </div>
        </div>
        <form>

          <div className="col">
                    {/* Name */}
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="John"/>
            </div>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="Doe"/>
            </div>
          </div>

          <div className="col">
                    {/*Phone & Email */}
            <div className="form-group">
              <label>E-Mail</label>
              <input type="email" placeholder="jDoe@Doe.com"/>
            </div>
            <div className="form-group">
              <label>Phone #</label>
              <input type="tel" placeholder="999-999-9999"/>
            </div>
          </div>

          <div className="col">
                    {/* What kind of website do you need? */}
            <div className="form-group solo">
              <label>What Type Of Website Do You Need?</label>
              <div id="radio-buttons">
                <div className="radio-button">
                  <input type="radio" id="radiopersonal" name="type" value="Personal" /><label htmlFor="radiopersonal">Personal</label>
                </div>
                <div className="radio-button">
                  <input type="radio" id="radioecommerce" name="type" value="E-Commerce"  /><label htmlFor="radioecommerce">E-commerce</label>
                </div>
                <div className="radio-button">
                  <input type="radio" id="radiolandingpage" name="type" value="Landing Page"  /><label htmlFor="radiolandingpage">Landing Page</label>
                </div>
                <div className="radio-button">
                  <input type="radio" id="radioother" name="type" value="Other"  /><label htmlFor="radioother">Other</label>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
                    {/* Message */}
            <div className="form-group solo">
              <label htmlFor="message">Message</label>
              <textarea placeholder="What would you like to talk about?"></textarea>
            </div>
          </div>

           <div className="col">
                    {/* Button */}
            <div className="form-group solo right">
              <button className="primary">Send Message</button>
            </div>
          </div>     

        </form>

      </div>


    </>
  )
}

onNameChange(event){
  this.setState({name: event.target.value})
}

onEmailChange(event){
  this.setState({email: event.target.value})
}

onMessageChange(event){
  this.setState({message: event.target.value})
}
handleSubmit(event){
  event.preventDefault();
  console.log(this.state);
}