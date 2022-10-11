import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quistion from '../Quistion/Quistion';

const Quiz = () => {
    const data = useLoaderData().data;
    const quistions = data.questions;
    const [showhide, setShowhide] = useState([]);
    const [selectAns , setSelectAns] = useState([]);
    const [currectAns, setCurrectAns] = useState(0);
    const [wrongAns, setWrongAns] = useState(0);

    const saveSelectAns = (id,ans) =>{
        const myans = selectAns.find(qid => qid.id === id);
        const getquistions = quistions.find(qs => qs.id === id);

        
        if(myans){
            console.log('already added');
            
        }else{
            const newselectAns = [...selectAns,{id : id, ans : ans}];
            setSelectAns(newselectAns)

            if(ans ===getquistions.correctAnswer){
                setCurrectAns(currectAns+1);
                alert('Currect Answer')
            }else{
                setWrongAns(wrongAns+1);
                alert('Wrong Answer')
            }

        }
        
    }
    // console.log(selectAns);
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
        <div className="container-fluid">
            <div className='row'>
            <div className="col-md-9">
                <div className="container">
                    <h2 className='mt-5 mb-3'>Quiz Name : {data.name}</h2>
                    <div className='row'>
                        {
                            quistions.map((quistion, sl) => <Quistion
                                key={quistion.id}
                                quistion={quistion}
                                sl={sl}
                                showQAns={showQAns}
                                showhide={showhide}
                                saveSelectAns = {saveSelectAns}
                                selectAns={selectAns}
                            ></Quistion>)
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-3 my-5">
                        <div className='funta-bg p-3 text-light sticky-top'>
                            <h2>Quiz Summary:</h2>
                            <hr />
                            <div className='text-start'>
                            <p>Total Quiz : <span className='text-warning'>{data.total}</span></p>
                            <p>Currect Answer : <span className='text-warning'>{currectAns}</span></p>
                            <p>Wrong Answer : <span className='text-warning'>{wrongAns}</span></p>
                            </div>
                        </div>
            </div>
        </div>
        </div>
    );
};

export default Quiz;