import about_image from '../images/landing_page.jpg'
import Collapsible from './collapsible.jsx';


export const About = (props) => {

  return (
    


    <div id='about' >
      <div className='container'>
        <div className='row'>
          <div className='about-img-cam col-xs-12 col-md-6' data-aos="fade" data-aos-duration="1500">
            {' '}
            <img src={about_image} className='img-responsive' alt='' />{' '}
          </div>
          <div className='about-text-title col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2 data-aos="fade-up" data-aos-duration="1500">About Us</h2 >
              <p data-aos="fade-up" data-aos-duration="1000">{props.data ? props.data.paragraph : 'loading...'} </p>
              <p data-aos="fade-up" data-aos-duration="1000"><Collapsible /></p>
              <h3 data-aos="fade-up" data-aos-duration="1000" >Why Choose Us?</h3>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul data-aos="fade-up" data-aos-duration="1000">
                    {props.data
                      ? props.data.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                      : 'loading'}
                  </ul>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                        <li key={`${d}-${i}`}> {d}</li>
                      ))
                      : 'loading'}
                  </ul>
                </div>
              </div>
            </div>
            {/* <button class="collapsible">Open Collapsible</button>
            <div class="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>


  )
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}