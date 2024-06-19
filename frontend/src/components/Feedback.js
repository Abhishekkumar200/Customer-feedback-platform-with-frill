import React, { useState } from 'react';
import { jwtDecode } from "jwt-decode";


const Feedback = (props) => {

    const [selectedOption, setSelectedOption] = useState({ feature: 0, pricing: 0, usability: 0, comments: "" });
    const [fLoading, setFLoading] = useState(false);

    const onChange = (e) => {
        setSelectedOption({ ...selectedOption, [e.target.name]: e.target.value });
    };

    let data = "";
    try {
        data = localStorage.getItem("Tensor-token");
        data = jwtDecode(data); 
    } catch (error) {
        console.log("Please login.")
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFLoading(true);
        // const rData = "{'feature': ${selectedOption.feature}, 'pricing': ${selectedOption.pricing}, 'usability': ${selectedOption.usability}}";
        const rData = { feature: String(selectedOption.feature), pricing: String(selectedOption.pricing), usability: String(selectedOption.usability) };
        const ratings = JSON.stringify({ rating: rData, email: data.email });
        const req = { name: ratings, author_idx: "follower_7d9vkd53", description: selectedOption.comments }
        try {

            let result = await fetch("/v1/ideas", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ab547ed1-b792-4039-b9f8-b1f7db695b02'
                },
                body: JSON.stringify(req)
            });
            result = await result.json();
            console.log(result);
            setFLoading(false);
            props.handleAlert("Your feedback submitted successfully.", "success");


        } catch (error) {

            console.log(error);
            setFLoading(false);
            props.handleAlert("Something went wrong.", "danger");
        }

        let response = await fetch("http://localhost:8000/api/feedback", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(selectedOption)
        });
        response = await response.json();
        console.log(response);
        // // console.log(selectedOption);
        // props.handleAlert("Your feedback submitted successfully.", "success");
    }

    return (
        <>

            <form className="card p-3 m-5" onSubmit={handleSubmit}>
                <div className='container text-center' ><h4>Feedback Form</h4></div>
                {localStorage.getItem('Tensor-token') ? '' : <p style={{ color: "red" }}>Please! Login first to submit your feedback.</p>}
                <label htmlFor="features" className="form-label">Product Features</label>
                <div className="mb-3" id='features'>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="feature" id="inlineRadio1" value={1} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="feature" id="inlineRadio2" value={2} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="feature" id="inlineRadio3" value={3} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio3">3</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="feature" id="inlineRadio4" value={4} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio4">4</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="feature" id="inlineRadio5" value={5} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio5">5</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="feature" id="inlineRadio6" value={6} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio6">6</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="feature" id="inlineRadio7" value={7} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio7">7</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="feature" id="inlineRadio8" value={8} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio8">8</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="feature" id="inlineRadio9" value={9} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio9">9</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="feature" id="inlineRadio10" value={10} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio10">10</label>
                    </div>
                </div>
                <label htmlFor="price" className="form-label">Product Pricing</label>
                <div className="mb-3" id='price'>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="pricing" id="inlineRadio11" value={1} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio11">1</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="pricing" id="inlineRadio12" value={2} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio12">2</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="pricing" id="inlineRadio13" value={3} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio13">3</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="pricing" id="inlineRadio14" value={4} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio14">4</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="pricing" id="inlineRadio15" value={5} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio15">5</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="pricing" id="inlineRadio16" value={6} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio16">6</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="pricing" id="inlineRadio17" value={7} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio17">7</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="pricing" id="inlineRadio18" value={8} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio18">8</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="pricing" id="inlineRadio19" value={9} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio19">9</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="pricing" id="inlineRadio20" value={10} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio20">10</label>
                    </div>
                </div>
                <label htmlFor="use" className="form-label">Product Usability</label>
                <div className="mb-3" id='use'>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="usability" id="inlineRadio21" value={1} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio21">1</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="usability" id="inlineRadio22" value={2} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio22">2</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="usability" id="inlineRadio23" value={3} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio23">3</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="usability" id="inlineRadio24" value={4} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio24">4</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="usability" id="inlineRadio25" value={5} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio25">5</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="usability" id="inlineRadio26" value={6} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio26">6</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="usability" id="inlineRadio27" value={7} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio27">7</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="usability" id="inlineRadio28" value={8} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio28">8</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="usability" id="inlineRadio29" value={9} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio29">9</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="usability" id="inlineRadio30" value={10} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadio30">10</label>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="textArea" className="form-label">Comments</label>
                    <textarea className="form-control" id="textArea" rows="5" name='comments' value={selectedOption.comments} onChange={onChange} required></textarea>
                </div>
                {/* <button type="submit" className= {`btn btn-primary ${localStorage.getItem('Tensor-token')?'':"disabled"}`} style={{width: '5rem'}}>Submit</button> */}
                <button className={`btn btn-primary ${localStorage.getItem('Tensor-token')?'':"disabled"}`} type="submit" style={{width: '8rem'}} disabled={fLoading}>
                    {fLoading ? <><span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    <span role="status">Loading...</span></> : 'Submit'}
                </button>
            </form>
        </>
    );
};

export default Feedback;