import './container.styles.scss';
import { Route, Routes } from 'react-router-dom';
import Home from '../../routes/home/home.component'
import Entry from '../../routes/entry/entry.component'
import Result from '../../routes/result/result.component'
import NavBar from '../navbar/navbar.component';
import { useState } from 'react';
import Req from '../../routes/req/req.component';

const Container=()=>{

    const [cropName,setCropName]=useState([]);
    const [soilHealth,setSoilHealth]=useState([]);
    const [weatherCondition,setWeatherCondition]=useState([]);
    const [growthStage,setGrowthStage]=useState([]);
    const [numOfCrops,setNumOfCrops]=useState(2);
    const [scoreArr,setScoreArr]=useState({});

    const handleSetCropName=(crop)=>{
        setCropName(prev=>{
            return [...prev,crop]
        });
    }

    const handleSetSoilHealth=(health)=>{
        setSoilHealth(prev=>[...prev,health]);
    }

    const handleSetWeatherCondition=(weather)=>{
        setWeatherCondition(prev=>[...prev,weather]);
    }

    const handleSetGrowthStage=(stage)=>{
        setGrowthStage(prev=>[...prev,stage]);
    }

    const handleSetNumOfCrops=(num)=>{
        setNumOfCrops(Number(num));
    }
    
    return (
        <div className='container-div'>
            <Routes>
            <Route path='/' element={<NavBar/>}>
                <Route index element={<Home setCropName={setCropName} setGrowthStage={setGrowthStage} setNumOfCrops={setNumOfCrops} setSoilHealth={setSoilHealth} setWeatherCondition={setWeatherCondition} setScoreArr={setScoreArr}  />} />
                <Route path='req' element={<Req  handleSetNumOfCrops={handleSetNumOfCrops} />} />
                <Route path='entry' element={<Entry numOfCrops={numOfCrops} cropName={cropName} handleSetCropName={handleSetCropName} soilHealth={soilHealth} handleSetSoilHealth={handleSetSoilHealth} weatherCondition={weatherCondition} handleSetWeatherCondition={handleSetWeatherCondition} growthStage={growthStage} handleSetGrowthStage={handleSetGrowthStage} />}  />
                <Route path='result' element={<Result  cropName={cropName} soilHealth={soilHealth} weatherCondition={weatherCondition} growthStage={growthStage} numOfCrops={numOfCrops} scoreArr={scoreArr} setScoreArr={setScoreArr} />} />
            </Route>
            </Routes>
        </div>
    )
}
export default Container;