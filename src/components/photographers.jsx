import React, { useState, useCallback, useEffect } from "react";
import { Photographers_card } from "./photographers-card"
import { Photographers_card_2 } from "./photographers-card-2"
import Pagination from "./Pagination";
import Pagination_mobile from "./Pagination-mobile";
import Card from "./Card";
import '../scss_files/photographer.scss'
import Collapsible_2 from './collapsible-2.jsx';
import './photographers.css'
import { useMediaQuery } from "react-responsive";





export const Photographers = (props) => {

  const [showing, setIsShowing] = useState(true);
  const [photographerIndex, setPhotographerIndex] = useState(-1);
  const [productDataList, setProductDataList] = useState([]);

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

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px && max-device-width: 1201px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });
  const resetStatus = () => {
    setIsShowing(true);
    setPhotographerIndex(-1)
  }
  const expandPhotographer = (index) => {
    setIsShowing(false);
    setPhotographerIndex(index);
    console.log("called")
  }
  const onChangePage = (pageOfItems) => {
    setProductDataList(pageOfItems)
  };
  return (
    <>
      {showing && photographerIndex === -1 ?
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

                {productDataList
                  ? productDataList.map((d, i) => (
                    <div key={`${d.title}-${i}`} onClick={(i) => expandPhotographer(d.index)} className="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-6" data-aos='fade-up' data-aos-duration='1000'>
                      <Card
                        title={d.title}
                        imageUrl={d.imageUrl}
                        body={d.body}
                        setIsPhotographerPosition={setPhotographerIndex}
                        index={i}
                        setIsShowData={setIsShowing}

                      />
                    </div>
                  ))
                  : 'loading'}</div>
            </div>
          </div>


          {/*     {(isBigScreen) && <Pagination
            pageSize={3}
            items={props.data}
            onChangePage={onChangePage}
          />}

          {(isDesktop) && <Pagination
            pageSize={3}
            items={props.data}
            onChangePage={onChangePage}
          />}

          {(isMobileDevice) && <Pagination
            pageSize={1}
            items={props.data}
            onChangePage={onChangePage}
          />}
          */}
          {(isLaptop || isDesktopOrLaptop) &&
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-12"></div>
                <div className="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-12">

                  <Pagination className="pg-style"
                    pageSize={3}
                    items={props.data}
                    onChangePage={onChangePage}
                  />
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-12"></div>

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


        </div> : <>

          <div id='photographers' className=''>
            <div className="header1">

            <a className="back-btn style-back" href="#photographers" onClick={resetStatus}><p>back</p></a>
            </div>
            <div className="text-center">

            <div className='container'>
              {props.data && photographerIndex !== -1
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
                            <p data-aos="fade-up" data-aos-duration="1000"><Collapsible_2 /></p>
                            <h3 data-aos="fade-up" data-aos-duration="1000" >Speciality</h3>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </> : "loading"}
            </div>
            </div>
          </div></>}
    </>
  )
}