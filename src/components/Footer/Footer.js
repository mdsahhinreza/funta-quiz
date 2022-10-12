import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='funta-bg py-4 text-light'>
            <h5> <FontAwesomeIcon className='text-warning' icon={faBrain}></FontAwesomeIcon> Funta Quiz </h5>
            <p className='p-0 m-0'>Cpytight FuntaQuiz &copy;2022-2100 </p>
        </div>
    );
};

export default Footer;