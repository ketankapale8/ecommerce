import React, { useState } from 'react';
import './slider.scss';
import one from '../../assets/1.jpg';
import two from '../../assets/2.jpg';
import three from '../../assets/3.jpg';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Slider = () => {
    const [currentSlide , setCurrentSlide] = useState(0);
    const data = [
        one,
        two,
        three
    ]

    const prevSlide = () =>{
        setCurrentSlide(currentSlide === 0 ? 2 : (prev)=> prev-1)
    }
    const nextSlide = () =>{
        setCurrentSlide(currentSlide === 2 ? 0 : (prev)=> prev+1)
    }
  return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt='ban1'/>
            <img src={data[1]} alt='ban2'/>
            <img src={data[2]} alt='ban3'/>
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <ChevronLeftIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <ChevronRightIcon/>
            </div>

        </div>
    </div>
  )
}

export default Slider