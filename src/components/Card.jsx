import react from 'react';
import '../card.css';
import React, { useState, useCallback } from "react";
import axios from 'axios';
    export const  Card = props => {
          const openPhotographerSection = useCallback(index => {
              props.setIsShowData(false)
              console.log(index)
              props.setIsPhotographerPosition(index)
            }, []);
            const downloadQuote = (name) => {
                const FileDownload = require('js-file-download');
                
                axios({
                    url: `/get-pdf/${name}.pdf`,
                    method: 'GET',
                    responseType: 'blob', // Important
                  }).then((response) => {
                      FileDownload(response.data, `CAMHIRE-${name}.pdf`);
                  });
            }
                return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={props.imageUrl} alt='' />
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>{props.title}</h3>
                </div>
                <div className='card-body'>
                    <p>{props.body}</p>
                </div>
            </div>
<div className='btn1'>
          <a
              href='#photographersCard'
              className='btn btn-custom-card btn-lg page-scroll'
              onClick={(index) => openPhotographerSection(props.index)}
          >
              View More
          </a>{' '}
      </div>
      <div className='btn2'>
          <a
              className='btn btn-custom-card btn-lg page-scroll'
              onClick={()=>downloadQuote(props.codeword)}
          >
              Get Quote
          </a>{' '}
      </div>
            
        </div>
    )
}

export default Card;