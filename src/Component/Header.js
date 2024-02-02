import '../App.css';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../fkheaderlogo_exploreplus-44005d.svg';
import { GoSearch } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";

function Header(props) {
    return (
        <>
            <header className='py-2 header'>
                <Container>
                    <Row>
                        <Col>
                            <div className='d-flex justify-content-evenly align-items-center'>
                                <img src={img} alt="" className='text-center' />
                                <div className='search d-flex align-items-center'>
                                    <a href="" className='ps-2'>< GoSearch className='icon' /></a>
                                    <input type="text" name="" id="" placeholder="Search For Product, Brands and More" onChange={(e) => {  props.setsearch(e.target.value) }} />
                                </div>
                                <button>Click Here</button>
                                <div>
                                    <a href="" className='cart'>
                                        < IoCartOutline className='icon' />
                                        <span className='ps-2'>Cart</span>
                                    </a>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    )
}

export default Header;