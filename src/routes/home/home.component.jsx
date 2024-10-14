import './home.styles.scss';
import HomeImg from '../../assets/home-img -c.png'
import { FaArrowRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import SvgLoader from '../../components/svg-loader/svg-loader.component';
import { BiReset } from 'react-icons/bi';
import PropTypes from 'prop-types';

const Home=({setCropName,setGrowthStage,setNumOfCrops,setSoilHealth,setWeatherCondition,setScoreArr})=>{

    const navigateRouter = useNavigate();

    const handleReset=()=>{
        setCropName([]);
        setGrowthStage([]);
        setNumOfCrops(2);
        setSoilHealth([]);
        setWeatherCondition([]);
        setScoreArr({});
    }

    return(
        <div className='home-div animate__animated animate__fadeInLeft'>
            <h3>Fertilizer Scheduler</h3>
            <SvgLoader imgSrc={HomeImg} imgWidth={300} />
            <p>Fertilizer scheduler for crops using CPU scheduling algorithms is an innovative approach to optimize fertilizer application.</p>
            <button onClick={()=>navigateRouter('req')}>Get Started <FaArrowRight/> </button>
            <button onClick={handleReset}> <BiReset/> Reset</button>
        </div>
    )
}
Home.propTypes={
    setCropName:PropTypes.func,
    setGrowthStage:PropTypes.func,
    setNumOfCrops:PropTypes.func,
    setSoilHealth:PropTypes.func,
    setWeatherCondition:PropTypes.func,
    setScoreArr:PropTypes.func,
}
export default Home;