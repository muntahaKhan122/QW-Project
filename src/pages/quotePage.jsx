import React, {useState} from 'react';
import Quotes from '../components/Quotes/quotes';
import Header from '../components/Header/header';
import QuoteList from '../components/Quotes/quoteList';


const QuotesPage=()=> {
  const [search, setSearch]=useState('');
  const [allQuotes, setAllQuotes]=useState('');


  const setSearchData=(val)=>{
    setSearch(val);
  };

  const setQuotes=(val)=>{
    setAllQuotes(val);
  };

  return (
    <div>
      <Header setData={setSearchData}/>

      {search?
        <QuoteList data={search} quotes={allQuotes}/>:
        <Quotes setAllQuotes={setQuotes}/>}


    </div>


  );
};

export default QuotesPage;
