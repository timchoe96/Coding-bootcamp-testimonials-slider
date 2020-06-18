import React,{useState} from 'react';
import bg from './images/pattern-bg.svg';
import curve from './images/pattern-curve.svg';
import quotes from './images/pattern-quotes.svg';
import Tanya from './images/image-tanya.jpg';
import John from './images/image-john.jpg';
import Quote from './Quote';
import Buttons from './Buttons';


const App = () => {
    const [testimonial,setTestimonial] = useState({
        image: Tanya,
        quote: '" I\'ve been interested in coding for a while but never taken the jump, until now. I couldn\'t recommend this course enough. I\'m now in the job of my dreams and so excited about the future."',
        name:'Tanya Sinclair',
        position:'UX Engineer'
    });

    const nextClicked = () => {
        setTestimonial({
            image: John,
            quote: '" If you want to lay the best foundation possible I\'d recommend taking this course. The depth the isntructors go into is incredible. I now feel so confident about starting up as a professional developer."',
            name:'John Tarkpor',
            position:'Junior Front-end Developor'
        });
    }
    const prevClicked = () => {
            setTestimonial({
            image: Tanya,
            quote: '" I\'ve been interested in coding for a while but never taken the jump, until now. I couldn\'t recommend this course enough. I\'m now in the job of my dreams and so excited about the future."',
            name:'Tanya Sinclair',
            position:'UX Engineer'
            });
    }

    return(
        <div>
            <div className='appContainer'>
                <img className='bg' src={bg} alt="bg" />
                <img className='curve' src={curve} alt="curve" />
                <img className='quotes' src={quotes} alt="quotes"/>
            </div>
            <div className='testimonialContainer'>
                <Quote quote={testimonial.quote} name={testimonial.name} position={testimonial.position}/>
                <img className='photo' alt='' src={testimonial.image}></img>
                <Buttons nex={nextClicked} pre={prevClicked}/>
            </div>
            </div>    
    )
}

export default App;