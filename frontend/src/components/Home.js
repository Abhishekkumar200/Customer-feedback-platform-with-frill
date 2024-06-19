import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {

    return (
        <>
            <div className='container text-center' style={{ color: 'grey' }}>
                <h1>Welcome! to our customer feedback portal.</h1>
                <h2>Click on below button for your feedback.</h2>
                {/* <Link className="btn btn-outline-primary my-5" to ={localStorage.getItem('Tensor-token')?'/feedback':'/login'} role="button">Get Started &rarr;
            <svg className="bi" aria-hidden="true"><use xlinkhref="#arrow-right"></use></svg>
            </Link> */}
                <Link className="icon-link icon-link-hover btn btn-outline-primary my-5" to ={localStorage.getItem('Tensor-token')?'/feedback':'/login'}>
                    Get Started <i className="bi bi-arrow-right mb-2"></i>
                </Link>
            </div>
            {/* <div className='container text-center' style={{ color: 'grey' }}><h2>Click on button below for your feedback.</h2></div> */}
            {/* <Link className="btn btn-outline-primary mx-2" to ="/login" role="button">Get Started&rarr;</Link> */}
        </>
    )
};

export default Home;