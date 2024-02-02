import '../App.css';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaStar } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';

function Leftbar(props) {
    const { search } = props;

    let [data, setdata] = useState([]);
    let [temp, settemp] = useState([]);
    let [data1, setdata1] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setdata(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    let handler = (e) => {
        let a = [];
        a = temp.filter((el) => {
            return el.category == e;
        })
        setdata1(a);
    }

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(function (response) {
                // handle success
                console.log(response.data.products);
                setdata1(response.data.products);
                settemp(response.data.products);
                props.li(response.data.products);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    useEffect(() => {
        let filterData = temp?.filter((item) => {
            return item?.title.includes(search);
        })
        setdata1(filterData)
        console.log(filterData);
    }, [search])

    
    function MouseOver(event) {
        event.target.style.background = 'red';
      }
      function MouseOut(event){
        event.target.style.background="";
      }
      const handelCard = (e) =>{
        console.log(e)
        e.target.style.background = 'red';

      }
      function changeBackground(e) {
        e.target.style.background = 'red';
      }


    return (
        <>
            <section className='mt-2' style={{ backgroundColor: "#EFF1F4" }}>
                <Container fluid>
                    <Row>
                        <Col xs={3} className='ms-2 mt-2'>
                            <div className='leftbar'>
                                <div className='lef'>
                                    <h5 className='m-0 p-3'>Filter</h5>
                                </div>
                                <div>
                                    <h6 className='m-0 p-3'>CATEGORIES</h6>
                                </div>
                                <div>
                                    {
                                        data.map((ele) => {
                                            return (
                                                <h4 className='m-0 py-2 px-4' onClick={() => { handler(ele) }}>{ele}</h4>
                                            )
                                        })
                                    }
                                </div>

                            </div>
                        </Col>
                        <Col className='ms-2 mt-2'>
                            <div className='details-product'>
                                <div className='rightbar'>
                                    {
                                        data1.map((ele, id) => {
                                            return (
                                                <Link to={`/item/${ele.id}`}  style={{ color: "black", textDecoration: "none" }}>
                                                    <div className="border-bottom px-3 py-5">
                                                        <Row className=''>
                                                            <Col xs={5}>
                                                                <div className='img '>
                                                                    <img src={ele.thumbnail} alt="" width="100%" style={{ objectFit: "cover" }} />
                                                                </div>
                                                            </Col>
                                                            <Col>
                                                                <div className='mb-3 '>
                                                                    <span className='name'>{ele.title}</span>
                                                                    <div className='rating'>
                                                                        <span>{ele.rating}<FaStar className='icon' /></span>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <ul>
                                                                        <li>{ele.description}</li>
                                                                        <li><label htmlFor="">Id :</label> {ele.id}</li>
                                                                        <li><label htmlFor="">Stock :</label> {ele.stock}</li>
                                                                        <li><label htmlFor="">Brand :</label> {ele.brand}</li>
                                                                        <li><label htmlFor="">Category :</label> {ele.category}</li>
                                                                    </ul>
                                                                </div>
                                                            </Col>
                                                            <Col xs={"auto"}>
                                                                <div className='d-flex flex-column justify-content-between align-items-center'>
                                                                    <label>${ele.price}</label>
                                                                    <h6>{ele.discountPercentage}%</h6>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}
export default Leftbar;