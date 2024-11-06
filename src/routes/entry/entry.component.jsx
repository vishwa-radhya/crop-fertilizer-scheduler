import './entry.styles.scss';
import { cropWithActualFertilizer } from '../../data';
import { GiCottonFlower } from 'react-icons/gi';
import { TbCircuitGround } from 'react-icons/tb';
import { FaSnowflake } from 'react-icons/fa6';
import { GiStumpRegrowth } from 'react-icons/gi';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';


const Entry=({cropName,soilHealth,weatherCondition,growthStage,handleSetCropName,handleSetSoilHealth,handleSetWeatherCondition,handleSetGrowthStage,numOfCrops})=>{

    const uniqueCropArray = [...new Set(cropWithActualFertilizer.map(c=>c.crop))]
    const uniqueSoilHealthArray = [...new Set(cropWithActualFertilizer.map(c=>c.soil_health))]
    const uniqueWeatherConditionArray =[...new Set(cropWithActualFertilizer.map(c=>c.weather_condition))]
    const navigateRouter = useNavigate();
    const [count,setCount]=useState(0);
    const triggerAnimationRef = useRef(null);

    return(
        <div className='entry-div animate__animated animate__fadeInRight' ref={triggerAnimationRef}>
        <h3>Enter Form Details</h3>
        <h4>Crop : {count+1}</h4>
            <form onSubmit={(e)=>{
                e.preventDefault();
                navigateRouter('/result')
            }}>
                <div>
                <label>Crop Name <GiCottonFlower/> </label>
                <select value={cropName[cropName.length-1]} onChange={(e) => handleSetCropName(e.target.value)}>
                        <option value="" disabled>Select crop</option>
                        {uniqueCropArray.map(obj => (
                            <option value={obj} key={obj}>{obj}</option>
                        ))}
                    </select>
                </div>
                <div>
                <label>Soil Health <TbCircuitGround/> </label>
                <select value={soilHealth[soilHealth.length-1]} onChange={(e) => handleSetSoilHealth(e.target.value)}>
                        <option value="" disabled>Select Soil Health</option>
                        {uniqueSoilHealthArray.map(obj => (
                            <option value={obj} key={obj}>{obj}</option>
                        ))}
                    </select>
                </div>
                <div>
                <label>Weather Condition <FaSnowflake/> </label>
                <select value={weatherCondition[weatherCondition.length-1]} onChange={(e) => handleSetWeatherCondition(e.target.value)}>
                        <option value="" disabled>Select Weather Condition</option>
                        {uniqueWeatherConditionArray.map(obj => (
                            <option value={obj} key={obj}>{obj}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Growth Stage <GiStumpRegrowth/> </label>
                    <select value={growthStage[growthStage.length-1]} onChange={(e)=>handleSetGrowthStage(e.target.value)}>
                        <option value="" disabled>Select Growth Stage</option>
                        <option value="Germination" >Germination</option>
                        <option value="Vegetative" >Vegetative</option>
                        <option value="Flowering" >Flowering</option>
                        <option value="Fruiting" >Fruiting</option>
                        <option value="Maturity" >Maturity</option>
                    </select>
                </div>
                    {count === numOfCrops ? <button type='submit'>Submit</button> : <button type='button' onClick={
                        ()=>{
                            if(cropName.length === 0) cropName.push(uniqueCropArray[0])
                            if(soilHealth.length === 0) soilHealth.push(uniqueSoilHealthArray[0])
                            if(weatherCondition.length === 0) weatherCondition.push(uniqueWeatherConditionArray[0])
                            if(growthStage.length === 0) growthStage.push("Germination")
                            setCount(prev=>prev+1)
                            }
                        }>Next</button>}
            </form>
        </div>
    )
}
Entry.propTypes={
    cropName:PropTypes.array,
    soilHealth:PropTypes.array,
    weatherCondition:PropTypes.array,
    growthStage:PropTypes.array,
    handleSetCropName:PropTypes.func,
    handleSetGrowthStage:PropTypes.func,
    handleSetSoilHealth:PropTypes.func,
    handleSetWeatherCondition:PropTypes.func,
    numOfCrops:PropTypes.number,
}
export default Entry;