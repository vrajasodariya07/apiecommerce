import '../App.css';
import { useState } from "react";
import Header from './Header';
import Leftbar from './Leftbar';

function Home() {

    let [search, setsearch] = useState('');
    let [listarr, setlistarr] = useState([]);
    return (
        <>
            <Header setsearch={setsearch} list={listarr} ></Header>
            <Leftbar search={search} li={setlistarr}></Leftbar>

        </>
    )
}

export default Home;