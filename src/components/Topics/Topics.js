import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData().data;
    return (
        <div style={{minHeight:"79vh"}}>
            <div className="container my-5">
                <h2 className='py-3 ff-poppins fw-bolder'>Select Topic</h2>
                <div className='row'>
                    {
                        topics.map(topic => <Topic
                            key={topic.id}
                            topic={topic}
                        ></Topic>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Topics;