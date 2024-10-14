import './req.styles.scss';
import { FaArrowRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import SvgLoader from '../../components/svg-loader/svg-loader.component';
import FarmImg from '../../assets/farm-svg-1.svg';
import PropTypes from 'prop-types';


const Req=({handleSetNumOfCrops})=>{

    const navigateRouter=useNavigate();

    return(
        <div className='req-div animate__animated animate__fadeInRight'>
            <h3>Number Of Crops</h3>
            <SvgLoader imgSrc={FarmImg} imgWidth={200} />
            <label>Select Number Of Crops</label>
            <select onChange={(e)=>handleSetNumOfCrops(e.target.value)}>
            <option value="" disabled>Number of crops</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            </select>
            <button onClick={()=>navigateRouter('/entry')} >Enter Crops <FaArrowRight/> </button>
        </div>
    )
}
Req.propTypes={
    handleSetNumOfCrops:PropTypes.func,
}
export default Req;