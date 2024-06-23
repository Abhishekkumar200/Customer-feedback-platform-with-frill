import React, { useContext, useEffect} from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Dashitem from './Dashitem';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ChangingProgressProvider from "./ChangingProgressProvider";
import 'react-circular-progressbar/dist/styles.css';



const Dashboard = () => {

    // const [ratingData, setRatingData] = useState({feature: [], pricing: [], usability: []});
    const { feedbacks, feedbackData, loading } = useContext(FeedbackContext);
    useEffect(() => {
        feedbackData();
    }, []);


    let f = 0;
    let p = 0;
    let u = 0;
    let count = 0;
    feedbacks.forEach((feedback) => {
        const rating = JSON.parse(feedback.name).rating;
        f += Number(rating.feature);
        p += Number(rating.pricing);
        u += Number(rating.usability);
        count += 1;
    });

    f = parseFloat((f / count).toFixed(1));
    p = parseFloat((p / count).toFixed(1));
    u = parseFloat((u / count).toFixed(1));

    const generateRange = (end) => {
        const steps = 3;
        const stepSize = end / (steps - 1);
        const result = [];

        for (let i = 0; i < steps; i++) {
            result.push(parseFloat((i * stepSize).toFixed(1)));
        }
        return result;
    }

    const featureRating = generateRange(f);
    const pricingRating = generateRange(p);
    const usabilityRating = generateRange(u);

    // const finalRating = {feature: featureRating, pricing: pricingRating, usability: usabilityRating};
    // useEffect(()=>{
    //     setRatingData(finalRating);
    // }, []);


    return (
        <>

            {loading
                ?
                <div className='d-flex justify-content-center align-items-center' style={{ height: "80vh" }}>
                    <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                :
                feedbacks.length === 0
                    ?
                    (<div className='d-flex justify-content-center align-items-center my-3' style={{ color: "red" }}>
                        <h4>No Feedback available.</h4>
                    </div>)
                    :
                    (<>
                        <div className='container' style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div id="fLabel" style={{ width: "8rem" }}>
                                <ChangingProgressProvider values={featureRating}>
                                    {value => (
                                        <CircularProgressbar
                                            value={value}
                                            text={`${value}/10`}
                                            circleRatio={0.75}
                                            minValue={0}
                                            maxValue={10}
                                            strokeWidth={10}
                                            styles={buildStyles({
                                                rotation: 1 / 2 + 1 / 8,
                                                strokeLinecap: "round",
                                                trailColor: "#eee",
                                                pathColor: "#4CBB17",
                                                textColor: "#4CBB17",
                                                textSize: '13px'
                                            })}
                                        />
                                    )}
                                </ChangingProgressProvider>
                            </div>
                            <div id="pLabel" style={{ width: "8rem" }}>
                                <ChangingProgressProvider values={pricingRating}>
                                    {value => (
                                        <CircularProgressbar
                                            value={value}
                                            text={`${value}/10`}
                                            circleRatio={0.75}
                                            minValue={0}
                                            maxValue={10}
                                            strokeWidth={10}
                                            styles={buildStyles({
                                                rotation: 1 / 2 + 1 / 8,
                                                strokeLinecap: "round",
                                                trailColor: "#eee",
                                                pathColor: "#4CBB17",
                                                textColor: "#4CBB17",
                                                textSize: '13px'
                                            })}
                                        />
                                    )}
                                </ChangingProgressProvider>
                            </div>
                            <div id="uLabel" style={{ width: "8rem" }}>
                                <ChangingProgressProvider values={usabilityRating}>
                                    {value => (
                                        <CircularProgressbar
                                            value={value}
                                            text={`${value}/10`}
                                            circleRatio={0.75}
                                            minValue={0}
                                            maxValue={10}
                                            strokeWidth={10}
                                            styles={buildStyles({
                                                rotation: 1 / 2 + 1 / 8,
                                                strokeLinecap: "round",
                                                trailColor: "#eee",
                                                pathColor: "#4CBB17",
                                                textColor: "#4CBB17",
                                                textSize: '13px'
                                            })}
                                        />
                                    )}
                                </ChangingProgressProvider>
                            </div>
                        </div>
                        <div className='container' style={{ display: 'flex', justifyContent: 'space-around', color: 'gray' }}>
                            <label htmlFor='fLabel'><b>Features</b></label>
                            <label htmlFor='pLabel'><b>Pricing</b></label>
                            <label htmlFor='uLabel'><b>Usability</b></label>
                        </div>
                        <h4 className='mt-5' style={{color: "gray"}}>Comments</h4>
                        <hr className="bg-secondary border-2 border-top border-secondary" />
                        <div className='container mx-3 my-3' >
                            <div className='row my-3'>

                                {feedbacks.map((feedback, i) => {
                                    return (
                                        <Dashitem key={i} feedback={feedback} />)
                                })}

                            </div>
                        </div>
                    </>)
            }
        </>
    );
};

export default Dashboard;
