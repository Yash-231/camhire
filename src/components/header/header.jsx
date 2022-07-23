import shortVid from '../video/CamHire_vid.mp4'
import "./header.css"
import Typed from "react-typed";
import camHireImage from '../video/camhire_logo.png'

export const Header = (props) => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h1 className="i-name">
                        <img src={camHireImage} style ={{width:"300px"}} alt="" />
                        <span></span></h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                        <Typed
                            strings={["Capturing Moments ", "Redifining Photography","Printing Imagination"]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        />
                        </div>
                    </div>
                    <p className="i-desc">
                        {props.data ? props.data.paragraph : 'Loading'}
                    </p>
                    <a
                        href='#features'
                        className='btn btn-custom btn-lg page-scroll'
                    >
                        Learn More
                    </a>{' '}
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg">

                </div>
                <video autoPlay loop muted className='i-img'>
                    <source src={shortVid} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}