import react from 'react';
import './Card2.css';
import React, { useState, useCallback } from "react";
export const  Card = props => {
    const openBlogSection = useCallback(index => {
        props.setIsShowData(false)
        console.log(index)
        props.setIsBlogPosition(index)
      }, []);
    return (
        <div className='card-container-1'>
            <div className='img-left'>

            <div className='image-container-1'>
                <img src={props.imageUrl} alt='' />
            </div>
            </div>
            <div className='content-right'>

            <div className='card-content-1'>
                <div className='card-title-1'>
                    <h3>{props.title}</h3>
                </div>
                <div className='card-body-1'>
                    <p>{props.body}</p>
                </div>
            </div>
            <div className='btn1'>
          <a
              href='#photographersCard'
              className='btn btn-custom-card btn-lg page-scroll'
              onClick={(index) => openBlogSection(props.index)}
          >
              View More
          </a>{' '}
      </div>
            </div>

        </div>
    )
}

export default Card;