import './result.styles.scss';
import PropTypes from 'prop-types';


const Result=({cropName,soilHealth,weatherCondition,growthStage})=>{
    return(
        <div className='result-div animate__animated animate__fadeInRight'>
            result
        </div>
    )
}
Result.propTypes={
    cropName:PropTypes.string,
    soilHealth:PropTypes.string,
    weatherCondition:PropTypes.string,
    growthStage:PropTypes.string,
}
export default Result;