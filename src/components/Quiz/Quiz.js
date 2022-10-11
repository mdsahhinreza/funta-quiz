import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quistion from '../Quistion/Quistion';

const Quiz = () => {
    const quistions = useLoaderData().data.questions;
    const [showhide, setShowhide] = useState([]);
    const showQAns = (id) =>{
        const isSow = showhide.find(sid => sid ===id );
        if(isSow){
            const newShow = showhide.filter(sid => sid !== id);
            setShowhide(newShow);
        }else{
            const newShow = [...showhide,id];
            setShowhide(newShow);
        }
        

    }
    return (
        <div className='row'>
            <div className="col-md-9">
                <div className="container">
                    <h2>Quiz Page</h2>
                    <div className='row'>
                        {
                            quistions.map((quistion, sl) => <Quistion
                                key={quistion.id}
                                quistion={quistion}
                                sl={sl}
                                showQAns={showQAns}
                                showhide={showhide}
                            ></Quistion>)
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-3">

            </div>
        </div>
    );
};

export default Quiz;