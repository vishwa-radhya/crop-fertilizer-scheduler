import './home.styles.scss';
import HomeImg from '../../assets/home-img -c.png'
import { FaArrowRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Home=()=>{

    const navigateRouter = useNavigate();

    return(
        <div className='home-div animate__animated animate__fadeInLeft'>
            <h3>Heading</h3>
            <img src={HomeImg } width={300} />
            <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
            <button onClick={()=>navigateRouter('req')}>Get Started <FaArrowRight/> </button>
        </div>
    )
}
export default Home;