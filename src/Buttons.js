import React from 'react';
import prev from './images/icon-prev.svg';
import next from './images/icon-next.svg';

const Buttons = ({pre,nex}) => {
    return(
    <div className='buttonContainer'>
        <img onClick={pre} className='prev' src={prev} alt='prev'></img>
        <img onClick={nex} className='next' src={next} alt='next'></img>
    </div>
    )
}

export default Buttons;