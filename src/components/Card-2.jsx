import react from 'react';
import './Card2.css';

function Card({ title, imageUrl, body }) {
    return (
        <div className='card-container-1'>
            <div className='img-left'>

            <div className='image-container-1'>
                <img src={imageUrl} alt='' />
            </div>
            </div>
            <div className='content-right'>

            <div className='card-content-1'>
                <div className='card-title-1'>
                    <h3>{title}</h3>
                </div>
                <div className='card-body-1'>
                    <p>{body}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Card;