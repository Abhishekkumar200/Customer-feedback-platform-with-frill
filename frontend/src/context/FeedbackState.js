import React, { useState } from 'react';
import FeedbackContext from './FeedbackContext';

const FeedbackState = (props) => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const feedbackData = async()=>{

        try {

            let result = await fetch("/v1/ideas", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ab547ed1-b792-4039-b9f8-b1f7db695b02'
                }
            });
            result = await result.json();
            setFeedbacks(result.data);
            // console.log(result);
            setLoading(false);
        
        } catch (error) {
            
            console.log(error);
            setLoading(false);
        }
        
    }
    
    return (
        <FeedbackContext.Provider value={{ feedbacks, feedbackData, loading }}>
            {props.children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackState;