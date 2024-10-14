import './result.styles.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { soilHealthScore } from '../../score';
import { weatherHealthScore } from '../../score';
import { growthStageScore } from '../../score';
import { cropWithActualFertilizer } from '../../data';
import { cropWithGrowthStage } from '../../data';
import { RiPlantFill } from 'react-icons/ri';

const Result=({cropName,soilHealth,weatherCondition,growthStage,numOfCrops,scoreArr,setScoreArr})=>{

    const [isBtnClicked,setISBtnClicked]=useState(false);

    // sjf setter
    const handleScoreCalculation=()=>{
        if(cropName.length === numOfCrops && soilHealth.length === numOfCrops && weatherCondition.length === numOfCrops && growthStage.length === numOfCrops){
            for(let i=0;i<cropName.length;i++){
                scoreHelper(cropName[i],soilHealth[i],weatherCondition[i],growthStage[i])
            }
            setISBtnClicked(true)
        }
    }

    // score scalculator
    const scoreHelper=(crop,soil,weather,growth)=>{
        const score = soilHealthScore[soil]+weatherHealthScore[weather]+growthStageScore[growth];
        setScoreArr(prev => ({
            ...prev, 
            [crop]: score
        }));
    }
    // console.log(scoreArr)


    return(
        <div className='result-div animate__animated animate__fadeInRight'>
            <h3>Analysis Report</h3> 
            <p>Scheduled using Shortest Job First (SJF)</p>   
            <button onClick={
                ()=>{
                    handleScoreCalculation()
                    }
                }>Generate Analysis</button>
            {isBtnClicked && <div className='res-div'>
                {Object.entries(scoreArr).sort((a,b)=>a[1]-b[1]).map(arr=>{
                    return <div key={arr[0]}>
                        <p className='one'><RiPlantFill/> {arr[0]}</p>
                        <p className='two'>Recommended Fertilizer: {cropWithActualFertilizer.find(c => c.crop === arr[0])?.fertilizer_recommendation || 'N/A'}</p>
                            <p className='three'>Fertilizer Name: {cropWithActualFertilizer.find(c => c.crop === arr[0])?.fertilizer_name || 'N/A'}</p>
                            <p className='four'>Nutrient Recommendation: {cropWithGrowthStage[arr[0]]["maturity"]["balanced_nutrients"] || 'N/A'}</p>
                    </div>
                })}
            </div>}
        </div>
    )
}
Result.propTypes={
    cropName:PropTypes.array,
    soilHealth:PropTypes.array,
    weatherCondition:PropTypes.array,
    growthStage:PropTypes.array,
    numOfCrops:PropTypes.number,
    scoreArr:PropTypes.object,
    setScoreArr:PropTypes.func,
}
export default Result;