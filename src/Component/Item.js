import '../App.css';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from './Header';

function Item() {

    let [data, setdata] = useState(null);
    let [img, setimg] = useState('');
    let [temp,settemp] = useState('');
    console.log("hhjgjh = ", setimg);

    const id = useParams();
    console.log("i = ", id)

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id.id}`)
            .then(function (response) {
                // handle success
                console.log(response.data);
                setdata(response.data);
                settemp(response.data.thumbnail);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    return (

        data != null && <>
            <Header/>
            <section >
                <div className='items pt-3'>
                    <Container>
                        <Row>
                            <Col xs={1}>
                                <div className='multi'>
                                    {
                                        data.images.map((ele, id) => {
                                            return (
                                                <div className='img' key={id}>
                                                    <img src={ele} alt="" onClick={(e) => { settemp(ele) }} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Col>
                            <Col xs={4} className='text-center'>
                                <div className='thumbnail'>
                                    <img src={temp} alt="" />
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <div className='mb-2'>
                                        <span className='title'>{data.title}</span>
                                    </div>
                                    <div className='price mb-2'>
                                        <div className='d-flex align-items-center'>$ {data.price}<span className='ms-4'>{data.discountPercentage}%</span></div>
                                    </div>
                                    <div className='list'>
                                        <ul>
                                            <li>{data.description}</li>
                                            <li><label htmlFor="">Id :</label> {data.id}</li>
                                            <li><label htmlFor="">Stock :</label> {data.stock}</li>
                                            <li><label htmlFor="">Brand :</label> {data.brand}</li>
                                            <li><label htmlFor="">Category :</label> {data.category}</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section >
        </>
    )
}

export default Item;