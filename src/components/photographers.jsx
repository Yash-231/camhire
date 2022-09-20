import React, { useState, useEffect} from "react";
import Pagination from "./Pagination";
import Pagination_mobile from "./Pagination-mobile";
import Card from "./Card";
import Collapsible_2 from './collapsible-2.jsx';
import './photographers.css'
import { useMediaQuery } from "react-responsive";
import axios from 'axios';
import AWS from 'aws-sdk';

export const Photographers = (props) => {
  
  const [showing, setIsShowing] = useState(true);
  const [photographerIndex, setPhotographerIndex] = useState(-1);
  const [productDataList, setProductDataList] = useState([]);
  const [image, setImage] = useState([]);
  const [decImage, setdecImage] = useState('');

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

  const resetStatus = () => {
    setIsShowing(true);
    setPhotographerIndex(-1)
  }
  const [isReadMore, setIsReadMore] = useState(false);
  const readFunctionality = () => {
    setIsReadMore(!isReadMore)
  }
  const onChangePage = (pageOfItems) => {
    setProductDataList(pageOfItems)
  }

  // useEffect(() => {
  //   AWS.config.update({
  //     accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  //     secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  //     region: "ap-south-1",
  //   });
  //   const s3 = new AWS.S3();
  //   const API_URL = process.env.REACT_APP_API_URL;

  //   axios.get(`${API_URL}/photographers`)
  // .then((response)=>{
  //   console.log(response.data.photographers);
  //   setImage(response.data.photographers[0].images);
  // });
  //   var params = {
  //     Bucket: process.env.REACT_APP_S3_BUCKET_NAME, 
  //     Key: image[0]
  //    };
  //    s3.getObject(params, function(err, data) {
  //      if (err) console.log(err, err.stack); // an error occurred
  //      else{
  //       // res.send(data.Body);
  //       var c = new Blob([new Uint8Array(data.Body, 512, 128)]);
  //       const url = URL.createObjectURL( c );
  //       setdecImage(url);
  //       console.log(url);           // successful response
  //      }
  //    });
  // }, [image[0]]);
  return (
    <>
      {showing && photographerIndex === -1 ?
        <div id='photographers' className='text-center'>
          <div className='container'>
            <div className='section-title'>
              <h2 data-aos="fade-up" data-aos-duration="1000">Our Photographers</h2>
              <p data-aos="fade-up" data-aos-duration="1000">
              Camhire has a team of diverse talents from across the nation who are perfect for
              capturing memories and etching them in your hearts.
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

                {productDataList//onClick={(i) => expandPhotographer(d.index)}
                  ? productDataList.map((d, i) => (
                    <div key={`${d.title}-${i}`}  className="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-6" data-aos='fade-up' data-aos-duration='1000'>
                      <Card
                        title={d.title}
                        imageUrl={decImage}
                        body={d.body}
                        codeword = {d.codeword}
                        setIsPhotographerPosition={setPhotographerIndex}
                        index={d.index}
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

             </div>
            <div className="text-center">

            <div className='container'>
            
              {props.data && photographerIndex !== -1
                ?
                <>
                  <div className='section-title'>
                  <div class="holder">
                 
                  <a className="back-btn style-back "href="#photographers" onClick={resetStatus}>
                  <i class="fa fa-angle-double-left"></i> back</a>
                  <div style={{"display":"inline-block"}}>
                    <span ><h2 data-aos="fade-up" data-aos-duration="1000">{props.data[photographerIndex].title}</h2></span>
                    </div>
                    </div>
                    <p data-aos="fade-up" data-aos-duration="1000">
                    Camhire has a team of diverse talents from across the nation who are perfect for
              capturing memories and etching them in your hearts.
                    </p>
                  </div>
                  <div key={photographerIndex} className="col-md-4" data-aos='fade-up' data-aos-duration='1000'>
                    <div className='container'>
                      <div className='row'>
                        <div className='about-img-cam col-xs-12 col-md-6' data-aos="fade" data-aos-duration="1500">
                          {' '}
                          <img style = {{height:"400px", width:"400px"}}src={props.data[photographerIndex].imageUrl} className='img-responsive' alt='' />{' '}
                        </div>
                        <div className='about-text-title col-xs-12 col-md-6'>
                          <div className='about-text'>
                            <h2 data-aos="fade-up" data-aos-duration="1500">{props.data[photographerIndex].codeword}</h2 >
                          {
                            props.data?
                              <>{
                             isReadMore?
                            <p data-aos="fade-up" data-aos-duration="1000">{(props.data[photographerIndex].body)} </p>
                            :
                            <p data-aos="fade-up" data-aos-duration="1000">{(props.data[photographerIndex].body).slice(0,1000)} </p>
                          }
                          {(props.data[photographerIndex].body).length>1000?
                          <>
                            {isReadMore ? 
                            <a href="#photographers" style={{"color":"white", "textDecorationThickness":"10px","cursor":"pointer"}} onClick={()=>readFunctionality()}>
                             show less
                            </a>:
                            <a style={{"color":"white", "textDecorationThickness":"10px","cursor":"pointer"}} onClick={()=>readFunctionality()}>
                              ... read more
                            </a>}
                            {isReadMore ?
                            <h3 data-aos="fade-up" data-aos-duration="1000" >Speciality</h3>
                          :""}</>:""}
                          </>:""}
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