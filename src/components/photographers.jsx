import React, { useState, useCallback, useEffect } from "react";
import { Photographers_card } from "./photographers-card"
import { Photographers_card_2 } from "./photographers-card-2"
import Card from "./Card";
import '../scss_files/photographer.scss'
import Collapsible from './collapsible.jsx';
export const Photographers = (props) => {
  const [showing, setIsShowing] = useState(true);
  const [photographerIndex, setPhotographerIndex] = useState(-1);
 const resetStatus = () => {
   setIsShowing(true);
   setPhotographerIndex(-1)
 }
 const expandPhotographer = (index) => {
  setIsShowing(false);
  setPhotographerIndex(index);
  console.log("called")
 }
  return (
    <>
    {showing && photographerIndex ===-1?
    <div id='photographers' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2 data-aos="fade-up" data-aos-duration="1000">Our Photographers</h2>
          <p data-aos="fade-up" data-aos-duration="1000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className='row'>
        <div className="portfolio-item cursor">
          {/* <Photographers_card_2 /> */}
          {/* <div className="col-md-4"><Photographers_card /></div>
              <div className="col-md-4"><Photographers_card /></div>
              <div className="col-md-4"><Photographers_card /></div>
              <div className="col-md-4"><Photographers_card /></div>
              <div className="col-md-4"><Photographers_card /></div>
              <div className="col-md-4"><Photographers_card /></div> */}
         
          {props.data
            ? props.data.map((d, i) => (
          <div key={`${d.title}-${i}`} onClick = {(i) => expandPhotographer(d.index)} className="col-md-4" data-aos='fade-up' data-aos-duration='1000'>
            <Card
              title={d.title}
              imageUrl={d.imageUrl}
              body={d.body}
              setIsPhotographerPosition ={setPhotographerIndex} 
              index = {i}
              setIsShowData = {setIsShowing}
              
              />
          </div>
))
: 'loading'}</div>
        </div>
      </div>
      <div class="content_detail__pagination cdp" actpage="1">
			<a href="#!-1" class="cdp_i">prev</a>
      {props.data
            ? props.data.map((d, i) => (
			<a href={"#!"+i} class="cdp_i">{i}</a>
      ))
: 'loading'}
			<a href="#!+1" class="cdp_i">next</a>
		</div>
    </div>:<>

       <div id='photographers' className='text-center'>
       <a href="#photographers" onClick={resetStatus}>back</a>
       <div className='container'>
       {props.data && photographerIndex !==-1
            ?
            <>
         <div className='section-title'>
           <h2 data-aos="fade-up" data-aos-duration="1000">{props.data[photographerIndex].title}</h2>
           <p data-aos="fade-up" data-aos-duration="1000">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
             dapibus leonec.
           </p>
         </div>
          <div key={photographerIndex} className="col-md-4" data-aos='fade-up' data-aos-duration='1000'>
          <div className='container'>
        <div className='row'>
          <div className='about-img-cam col-xs-12 col-md-6' data-aos="fade" data-aos-duration="1500">
            {' '}
            <img src={props.data[photographerIndex].imageUrl} className='img-responsive' alt='' />{' '}
          </div>
          <div className='about-text-title col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2 data-aos="fade-up" data-aos-duration="1500">{props.data[photographerIndex].codeword}</h2 >
              <p data-aos="fade-up" data-aos-duration="1000">{props.data[photographerIndex].mainbody} </p>
              <h3 data-aos="fade-up" data-aos-duration="1000" >Speciality</h3>

            </div>
          </div>
        </div>
      </div>
          </div>
          </>:"loading"}
         </div>
         </div></>}
    </>
  )
}