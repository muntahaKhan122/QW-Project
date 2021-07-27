/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import '../../css/signup.css';

const Quotes = (props) =>{
  const [quoteOfDay, setQuoteOfDay]=useState(null);

  const fetchData=()=>{
    fetch('https://type.fit/api/quotes')
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          props.setAllQuotes(data);
          setQuoteOfDay(data[0]);
        });
  };

  useEffect(() => {
    fetchData();
  }, [] );


  return (
    <div>
      <h3 style={{textAlign: 'center'}}>Quote of the day</h3>
      <h3 style={{textAlign: 'center', marginTop: '200px', color: 'black'}}>
        {quoteOfDay!==null?quoteOfDay.text:'..Loading'}
      </h3>

      <div className="quote">

        <h5 style={{textAlign: 'center'}}>
          -{quoteOfDay!==null?quoteOfDay.author:''}</h5>
      </div>


    </div>
  );
};

export default Quotes;
