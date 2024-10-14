import './req.styles.scss';
import { FaArrowRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Req=()=>{

    const navigateRouter=useNavigate();

    return(
        <div className='req-div animate__animated animate__fadeInRight'>
            <h3>Number Of Crops</h3>
            <label>Select Number Of Crops</label>
            <select>
            <option value="" disabled>Number of crops</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            </select>
            <button onClick={()=>navigateRouter('/entry')} >Enter Crops <FaArrowRight/> </button>
        </div>
    )
}
export default Req;