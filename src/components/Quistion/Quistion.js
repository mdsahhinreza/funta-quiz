import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Quistions.css';

const Quistion = ({quistion,sl,showQAns,showhide}) => {
    const {id,question,options,correctAnswer} = quistion;
    const isSow = showhide.find(sid => sid ===id );
    

    
    return (
       <div className="row">
        <div className="col-md-9 m-auto">
        <div className='col-12 my-3 p-3 border rounded border-warning text-start fanta-light-bg'>
            
            <div className='d-flex justify-content-between py-3'>
                <h4 className=' text-start ps-4 fw-normal fs d-flex totka' dangerouslySetInnerHTML={{__html: `<small>Q-${sl+1} ${question}</small>`}}></h4>

                {/* <h4  className='d-flex justify-content-between'> 
                    <span  className='me-2 d-flex'>Quiz {sl+1} : <span dangerouslySetInnerHTML={{__html: question}} /> </span> 
                    
                    
                </h4> */}
                <button onClick={()=>showQAns(id)} className='border-0 funta-color'><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
                
            </div>
            <div>
                  {
                    options.map(option => 
                    <div key={option} className="form-check py-3 px-3 cursor my-3  border border-warning" htmlFor={option}>
                        {/* <input className="form-check-input" type="radio" name={id} value="" id={option}/>
                        <label className="form-check-label" htmlFor={option}>
                            {option}
                        </label> */}
                        <h6>{option}</h6>
                    </div>)
                  }
                  
                  <div className={`py-3 px-5 my-3 funta-bg text-light ${isSow ? 'currently' : 'd-none'}`} >
                        <h5 className='p-0 m-0'>Currect Answer : {correctAnswer}</h5>
                    </div>
            </div>
        </div>
        </div>
       </div>
    );
};

export default Quistion;