import Card from "./Card-2";
import Pagination from "./Pagination";
import React, { useState, useCallback, useEffect } from "react";
export const Blogs = (props) => {
  const [showing, setIsShowing] = useState(true);
  const [blogIndex, setBlogIndex] = useState(-1);
  const [blogDataList, setBlogDataList] = useState([]);
  const resetStatus = () => {
    setIsShowing(true);
    setBlogIndex(-1)
  }
  const expandBlog = (index) => {
    setIsShowing(false);
    setBlogIndex(index);
    console.log("called")
   }
   const onChangePage = (pageOfItems) => {
    setBlogDataList(pageOfItems)
  };
  return (
  <>
  {showing && blogIndex ===-1?
    <div id='blogs' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2 data-aos="fade-up" data-aos-duration="1000">Blogs</h2>
          <p data-aos="fade-up" data-aos-duration="1000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className='row'>
        <div className="portfolio-item cursor"> 
          {blogDataList
            ? blogDataList.map((d, i) => (
          <div key={`${d.title}-${i}`} onClick = {(i) => expandBlog(d.index)} className="col-md-6" data-aos='fade-up' data-aos-duration='1000'>
            <Card
              title={d.title}
              imageUrl={d.imageUrl}
              body={d.body}
              setIsBlogPosition ={setBlogIndex} 
              index = {i}
              setIsShowData = {setIsShowing}
            />
          </div>
))
: 'loading'}
        </div>
      </div>
      </div>
      <Pagination
          pageSize={2}
          items={props.data}
          onChangePage={onChangePage}
        />
    </div>
    :<>

<div id='blogs' className='text-center'>
 
    <a href="#photographers" onClick={resetStatus}>back</a>
    <div className='container'>
    {props.data && blogIndex !==-1
         ?
         <>
      <div className='section-title'>
        <h2 data-aos="fade-up" data-aos-duration="1000">{props.data[blogIndex].title}</h2>
        <p data-aos="fade-up" data-aos-duration="1000">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
          dapibus leonec.
        </p>
      </div>
       <div key={blogIndex} className="col-md-4" data-aos='fade-up' data-aos-duration='1000'>
       <div className='container'>
     <div className='row'>
       <div className='about-img-cam col-xs-12 col-md-6' data-aos="fade" data-aos-duration="1500">
         {' '}
         <img src={props.data[blogIndex].imageUrl} className='img-responsive' alt='' />{' '}
       </div>
       <div className='about-text-title col-xs-12 col-md-6'>
         <div className='about-text'>
           <h2 data-aos="fade-up" data-aos-duration="1500">{props.data[blogIndex].title}</h2 >
           <p data-aos="fade-up" data-aos-duration="1000">{props.data[blogIndex].complete_body} </p>
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