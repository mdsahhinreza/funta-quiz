import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {id, name,logo,total} = topic;
    return (
        <div className='col-md-3 '>
            <Card style={{ width: '18rem' }}>
                <Card.Img  className='funta-bg text-light' variant="top" src={logo} />
                <Card.Body className=''>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    <p>Total Quiz : {total}</p>
                    </Card.Text>
                    <Link to={`/quiz/${id}`}>
                        <Button variant="primary">Start Quiz  <FontAwesomeIcon className='fa-spin ms-2' icon={faGear}></FontAwesomeIcon></Button>
                    </Link>                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default Topic;