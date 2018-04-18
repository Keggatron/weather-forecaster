import React from 'react';
import Search from './Search';

const Index = () => {

  return (
    <div className='container boxing' align='center'>
      <div className='column'>
        <h1 className='header'>Enter a City</h1>
        <Search path='/'/>
      </div>
    </div>
  )
}

export default Index;
