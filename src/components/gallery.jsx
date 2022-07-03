import React, { useState, useCallback } from "react";
import ReactPlayer from 'react-player'
export const Gallery = props => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const resetStatus = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  }
  const data = [
    { image:"/img/portfolio/01-small.jpg", video: "https://www.youtube.com/watch?v=ysz5S6PUM-U", title: "Lorem Ipsum1", data: "Sed enim turpis, tempor sit amet libero quis, molestie sagittis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " },
    { image:"/img/portfolio/02-small.jpg", video: "https://www.youtube.com/watch?v=ysz5S6PUM-U", title: "Lorem Ipsum1", data: "Sed enim turpis, tempor sit amet libero quis, molestie sagittis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " },
    { image:"/img/portfolio/03-small.jpg", video: "https://www.youtube.com/watch?v=ysz5S6PUM-U", title: "Lorem Ipsum1", data: "Sed enim turpis, tempor sit amet libero quis, molestie sagittis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " },
    { image:"/img/portfolio/04-small.jpg", video: "https://www.youtube.com/watch?v=ysz5S6PUM-U", title: "Lorem Ipsum1", data: "Sed enim turpis, tempor sit amet libero quis, molestie sagittis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " },
    { image:"/img/portfolio/05-small.jpg", video: "https://www.youtube.com/watch?v=ysz5S6PUM-U", title: "Lorem Ipsum1", data: "Sed enim turpis, tempor sit amet libero quis, molestie sagittis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " },
    { image:"/img/portfolio/06-small.jpg", video: "https://www.youtube.com/watch?v=ysz5S6PUM-U", title: "Lorem Ipsum1", data: "Sed enim turpis, tempor sit amet libero quis, molestie sagittis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " },
    { image:"/img/portfolio/07-small.jpg", video: "https://www.youtube.com/watch?v=ysz5S6PUM-U", title: "Lorem Ipsum1", data: "Sed enim turpis, tempor sit amet libero quis, molestie sagittis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " },
    { image:"/img/portfolio/08-small.jpg", video: "https://www.youtube.com/watch?v=ysz5S6PUM-U", title: "Lorem Ipsum1", data: "Sed enim turpis, tempor sit amet libero quis, molestie sagittis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " },
    { image:"/img/portfolio/09-small.jpg", video: "https://www.youtube.com/watch?v=ysz5S6PUM-U", title: "Lorem Ipsum1", data: "Sed enim turpis, tempor sit amet libero quis, molestie sagittis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " }
    
  ];

  const openImageViewer = useCallback(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
        </div>
        {!isViewerOpen ?
        <div className="row">
          <div className="portfolio-items">
            {data.map(({ title, video, image }, index) => (
              <div key={index} onClick={() => openImageViewer(index)} className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item cursor">
                <img src={image} className="img-responsive" alt="Project Title" />{" "}
      
                    </div>
                      </div>
            ))}
          </div>
          
        </div>
: <div className="col-md-4" data-aos='fade-up' data-aos-duration='1000'>
   <a href="#portfolio" className="style-back-3" onClick={resetStatus}>back</a>
<div className='container'>
<div className='row'>
<div className='about-img-cam col-xs-12 col-md-6' data-aos="fade" data-aos-duration="1500">
  {' '}
  <ReactPlayer
className='react-player'
playing
url= {data[currentImage].video}
width = {"100%"}
height = {"76%"}
/></div>
<div className='about-text-title col-xs-12 col-md-6'>
  <div className='about-text'>
    <h2 data-aos="fade-up" data-aos-duration="1500">{data[currentImage].title}</h2 >
    <p data-aos="fade-up" data-aos-duration="1000">{data[currentImage].data} </p>
  </div>
</div>
</div>
</div>

</div>}  


    </div>
    </div>
  );
};
