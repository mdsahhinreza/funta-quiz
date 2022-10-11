import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Topic from '../Topic/Topic';

const Home = () => {
    const topics = useLoaderData().data;
    return (
        <div>
            <Banner></Banner>
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

export default Home;