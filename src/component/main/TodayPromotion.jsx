import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductThumb from '../detail/ProductThumb';
import Countdown from './Countdown.jsx';

export default function TodayPromotion() {
  const [ todayPriceList, setTodayPriceList ] = useState([]);
  let rows = [];

  useEffect(()=>{
    axios.post('http://13.209.88.179:9000/main/category', {category: 'special_price'})
         .then((res)=> setTodayPriceList(res.data))
         .catch((error)=>console.log(error));
  },[]);
  
  rows = todayPriceList.slice(0,3);
  
  return (
    <div className='today_section'>
      <div className='today_title'>
        <h2>🌷뷰티 일일특가</h2>
        <h3>단 48시간 한정 특가🍀</h3>
        <Countdown />
        <p className='today_subtitle'>망설이면 늦어요!</p>
      </div>
      <div className='today_product product_list'>
        {rows && rows.map((row, i)=>
           <ProductThumb product={row} key={`${row.pid}_${i}`}/> 
        )}
      </div>
    </div>
  );
}

