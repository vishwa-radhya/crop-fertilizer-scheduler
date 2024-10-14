import './entry.styles.scss';
import { cropWithActualFertilizer } from '../../data';
import { GiCottonFlower } from 'react-icons/gi';
import { TbCircuitGround } from 'react-icons/tb';
import { FaSnowflake } from 'react-icons/fa6';
import { GiStumpRegrowth } from 'react-icons/gi';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const Entry=({cropName,soilHealth,weatherCondition,growthStage,handleSetCropName,handleSetSoilHealth,handleSetWeatherCondition,handleSetGrowthStage})=>{

    const uniqueCropArray = [...new Set(cropWithActualFertilizer.map(c=>c.crop))]
    const uniqueSoilHealthArray = [...new Set(cropWithActualFertilizer.map(c=>c.soil_health))]
    const uniqueWeatherConditionArray =[...new Set(cropWithActualFertilizer.map(c=>c.weather_condition))]
    const navigateRouter = useNavigate();


    return(
        <div className='entry-div animate__animated animate__fadeInRight'>
        <h3>Enter Form Details</h3>
            <form onSubmit={(e)=>{
                e.preventDefault();
                navigateRouter('/result')
            }}>
                <div>
                <label>Crop Name <GiCottonFlower/> </label>
                <select value={cropName} onChange={(e) => handleSetCropName(e.target.value)}>
                        <option value="" disabled>Select crop</option>
                        {uniqueCropArray.map(obj => (
                            <option value={obj} key={obj}>{obj}</option>
                        ))}
                    </select>
                </div>
                <div>
                <label>Soil Health <TbCircuitGround/> </label>
                <select value={soilHealth} onChange={(e) => handleSetSoilHealth(e.target.value)}>
                        <option value="" disabled>Select Soil Health</option>
                        {uniqueSoilHealthArray.map(obj => (
                            <option value={obj} key={obj}>{obj}</option>
                        ))}
                    </select>
                </div>
                <div>
                <label>Weather Condition <FaSnowflake/> </label>
                <select value={weatherCondition} onChange={(e) => handleSetWeatherCondition(e.target.value)}>
                        <option value="" disabled>Select Weather Condition</option>
                        {uniqueWeatherConditionArray.map(obj => (
                            <option value={obj} key={obj}>{obj}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Growth Stage <GiStumpRegrowth/> </label>
                    <select value={growthStage} onChange={(e)=>handleSetGrowthStage(e.target.value)}>
                        <option value="" disabled>Select Growth Stage</option>
                        <option value="Germination" >Germination</option>
                        <option value="Vegetative" >Vegetative</option>
                        <option value="Flowering" >Flowering</option>
                        <option value="Fruiting" >Fruiting</option>
                        <option value="Maturity" >Maturity</option>
                    </select>
                </div>
                    <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
Entry.propTypes={
    cropName:PropTypes.string,
    soilHealth:PropTypes.string,
    weatherCondition:PropTypes.string,
    growthStage:PropTypes.string,
    handleSetCropName:PropTypes.func,
    handleSetGrowthStage:PropTypes.func,
    handleSetSoilHealth:PropTypes.func,
    handleSetWeatherCondition:PropTypes.func,
}
export default Entry;