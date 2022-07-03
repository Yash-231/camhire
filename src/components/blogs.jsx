import Card from "./Card-2";
import Pagination from "./Pagination";
import React, { useState} from "react";
import { useMediaQuery } from "react-responsive";
import Pagination_mobile from "./Pagination-mobile"
import "./blogs.css"

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

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px && max-device-width: 500px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(max-width: 1224px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-width: 1824px)",
  });
  const [isReadMore, setIsReadMore] = useState(false);
  const readFunctionality = () => {
    setIsReadMore(!isReadMore)
    if(isReadMore){
      if(isLaptop || isDesktopOrLaptop){
        window.scrollTo(0, 2600)
      }
      else{
        window.scrollTo(0, 3600)
      }
    }
  }

  return (
    <>
      {showing && blogIndex === -1 ?
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
                    <div key={`${d.title}-${i}`} onClick={(i) => expandBlog(d.index)} className="col-md-6 col-sm-12" data-aos='fade-up' data-aos-duration='1000'>
                      <Card
                        title={d.title}
                        imageUrl={d.imageUrl}
                        body={d.body}
                        setIsBlogPosition={setBlogIndex}
                        index={i}
                        setIsShowData={setIsShowing}
                      />
                    </div>
                  ))
                  : 'loading'}
              </div>
            </div>
          </div>
          {(isLaptop || isDesktopOrLaptop) &&
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-6"></div>
                <div className="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-6">

                  <Pagination className="pg-style"
                    pageSize={2}
                    items={props.data}
                    onChangePage={onChangePage}
                  />
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-6"></div>

              </div>
            </div>}


          {(isTabletDevice || isMobileDevice) &&
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12 col-md-12">

                  <Pagination_mobile className="pg-style"
                    pageSize={1}
                    items={props.data}
                    onChangePage={onChangePage}
                  />
                </div>

              </div>
            </div>}
        </div>
        : <>

          <div id='blogs' >
            <div className="header1">

              </div>

            <div className='container text-center'>
              {props.data && blogIndex !== -1
                ?
                <>
                  <div className='section-title'>
                  <div class="holder">
                  <a className="back-btn style-back" href="#blogs" onClick={resetStatus}>
                  <i class="fa fa-angle-double-left"></i> back</a>
                  <div style={{"display":"inline-block"}}>
                  
                  <span ><h2 data-aos="fade-up" data-aos-duration="1000">{props.data[blogIndex].title}</h2></span>
                  </div>
                  </div>
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
                          <img src={props.data[blogIndex].imageUrl}style ={{width:"800px", height:"300px"}} className='img-responsive' alt='' />{' '}
                        </div>
                        <div className='about-text-title col-xs-12 col-md-6'>
                          <div className='about-text'>
                            <h2 data-aos="fade-up" data-aos-duration="1500">{props.data[blogIndex].title}</h2 >
                            {
                            props.data?
                            <>{
                            isReadMore?
                            <p data-aos="fade-up" data-aos-duration="1000">{(props.data[blogIndex].complete_body)} </p>
                            :
                            <p data-aos="fade-up" data-aos-duration="1000">{(props.data[blogIndex].complete_body).slice(0,1000)} </p>
                          } <a style={{"color":"white", "textDecorationThickness":"10px","cursor":"pointer"}} onClick={()=>readFunctionality()}>
                          {isReadMore ?  "show less" : (props.data[blogIndex].complete_body).length<1000?"":" ...read more"}
                          </a></>:""}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </> : "loading"}
            </div>
          </div></>}
    </>
  )
}