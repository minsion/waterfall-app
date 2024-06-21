import './App.css';
import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
const result = []
const App = () => {
  const [question, setQuestion] = useState([])
  const fetchQuestion = useCallback(async(page) => {
    const res = await axios({method: 'get', url: 'api/index/question', params: {page: page, pagesize: 5}});
    const {data} = res;
    setQuestion([...data.data])
    result.push(...data.data)
  })
  useEffect(() => {
    fetchQuestion(1);
    fetchQuestion(2);
    fetchQuestion(3);
    fetchQuestion(4);
    fetchQuestion(5);
    fetchQuestion(6);
    fetchQuestion(7);
    fetchQuestion(8);
  }, [''])
  return (
    <div className='content'>
      {result && result.map((item, i) => {
        return(
          <div className='card' key={i}>
            <h3 className="title">{i + 1}</h3>
            {item.question}
          </div>
        )
      })}
    </div>
  )
};

export default App;
