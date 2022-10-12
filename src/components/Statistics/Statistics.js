import React from 'react';
import { Table } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Statistics.css'
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";


const Statistics = () => {
    const quizdata = useLoaderData().data;
    const data = [];

    quizdata.map(quiz => data.push({name : quiz.name, uv : quiz.total}))

    
    return (
        <div className='container my-5' style={{minHeight:"75vh"}}>
            <h2 className='mb-3'>Topic and Quistions Statistics</h2>
            <hr />
            <div className="row">
                <div className="col-md-6 text-start">
                    <h3 className='text-center pb-3'>Quiz List Table:</h3>
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#sl</th>
                        <th>Quiz Name</th>
                        <th>Total Quiztions</th>
                    </tr>
                </thead>                               
                    {
                        quizdata.map((quiz, sl) => 
                        <tbody key={sl}>
                            <tr>
                                <td>{sl+1}</td>
                                <td>{quiz.name}</td>
                                <td className='text-end'>{quiz.total}</td>
                            </tr>
                        </tbody>
                        )
                    }
                </Table>
                </div>
                <div className="col-md-6 mx-auto">
                <h3 className=' pb-3'>Quiz List Chirt:</h3>
                    <ComposedChart className='chart'
                        width={390}
                        height={450}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="uv" barSize={20} fill="#051D40" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                    </ComposedChart>
                </div>
            </div>

        </div>
    );
};

export default Statistics;