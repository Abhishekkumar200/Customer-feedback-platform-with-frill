import React from 'react';
import { jwtDecode } from "jwt-decode";
// import UserContext from '../context/UserContext';

const About = ()=>{
    
    let data = localStorage.getItem("Tensor-token");
    data = jwtDecode(data);

    // const { setUser } = useContext(UserContext);
    // setUser(data);
    
    return(
        <div className='d-flex justify-content-center'>
        <div className="card" style={{width: "20rem"}}>
            <img src={data.picture} className="card-img-top" alt="logo" style={{height: "15rem"}}/>
            <div className="card-body">
                <p className="card-text"><b>Name: </b> {data.name}</p>
                <p className="card-text"><b>Email: </b> {data.email}</p>
            </div>
            </div>
        </div>
    );
}

export default About;