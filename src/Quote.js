import React from 'react';

const Quote = ({name,quote,position}) => {
    return(
<div className='quoteBox'>
    <p className='quote'>{quote}</p>
    <div className='personalInfo'>
    <p className='name'>{name}</p>
    <span className='occupation'>{position}</span>
    </div>
</div>
    )
}

export default Quote;