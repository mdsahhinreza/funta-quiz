import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../../images/bg.png';
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='funta-bg banner'>
            <div className="container">
                <div className="row  banner-raw">
                    <div className="col-md-6 height-inherit d-flex align-items-center">
                            <div className='text-start'>
                                <h1 className='display-3 text-start  fw-bolder text-light ff-poppins'>
                                    Learn technology with  <span className='text-warning'><u>Fun!</u></span>
                                </h1>
                                <button className='btn btn-warning mt-5  rounded-0 d-flex justify-content-start'>
                                    Explore Quizes <FontAwesomeIcon className='fa-bounce ps-2' icon={faArrowDown}></FontAwesomeIcon> 
                                </button>
                            </div>
                    </div>
                    <div className="col-md-6 height-inherit d-none d-md-block">
                        <img className='banner-img' src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;