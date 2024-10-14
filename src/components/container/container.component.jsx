import './container.styles.scss';
import { Route, Routes } from 'react-router-dom';
import Home from '../../routes/home/home.component'
import Entry from '../../routes/entry/entry.component'
import Result from '../../routes/result/result.component'
import NavBar from '../navbar/navbar.component';
import { useState } from 'react';
import Req from '../../routes/req/req.component';

const Container=()=>{

    const [cropName,setCropName]=useState('');
    const [soilHealth,setSoilHealth]=useState('');
    const [weatherCondition,setWeatherCondition]=useState('');
    const [growthStage,setGrowthStage]=useState('');

    const handleSetCropName=(crop)=>{
        setCropName(crop);
    }

    const handleSetSoilHealth=(health)=>{
        setSoilHealth(health);
    }

    const handleSetWeatherCondition=(weather)=>{
        setWeatherCondition(weather);
    }

    const handleSetGrowthStage=(stage)=>{
        setGrowthStage(stage);
    }
    
    return (
        <div className='container-div'>
            <Routes>
            <Route path='/' element={<NavBar/>}>
                <Route index element={<Home/>} />
                <Route path='req' element={<Req/>} />
                <Route path='entry' element={<Entry cropName={cropName} handleSetCropName={handleSetCropName} soilHealth={soilHealth} handleSetSoilHealth={handleSetSoilHealth} weatherCondition={weatherCondition} handleSetWeatherCondition={handleSetWeatherCondition} growthStage={growthStage} handleSetGrowthStage={handleSetGrowthStage} />}  />
                <Route path='result' element={<Result  cropName={cropName} soilHealth={soilHealth} weatherCondition={weatherCondition} growthStage={growthStage} />} />
            </Route>
            </Routes>
        </div>
    )
}
export default Container;