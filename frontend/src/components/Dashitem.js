import React from 'react';


const Dashitem = (props) => {
    const { feedback } = props;
    const title = JSON.parse(feedback.name);
    return (
        <div className='col-md-3 my-2'>                       
            <div className="card">
                    <div className="card-body">
                        <h6 className="card-title">{title.email}</h6>
                        <p className="card-text" style={{color: "gray"}}>{feedback.description}</p>
                    </div>
            </div>
        </div>
    );
}

export default Dashitem;