import React from 'react'
import Slider from 'react-slick'
import SlideOne from '../resources/slides/slide_one.jpg'
import SlideTwo from '../resources/slides/slide_two.jpg'
import SlideThree from '../resources/slides/slide_three.jpg'

function Carrousel() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 900
    }

    return(
        <div
            className='carrousel_wrapper'
            style={{
                height:`${window.innerHeight}px`,
                overflow: 'hidden'
            }}
        >
            <Slider {...settings}>
                <div>
                    <div 
                        className='carrousel_image'
                        style={{
                            background: `url(${SlideOne})`,
                            height:`${window.innerHeight}px`
                        }}
                        ></div>
                </div>
                <div>
                    <div 
                        className='carrousel_image'
                        style={{
                            background: `url(${SlideTwo})`,
                            height:`${window.innerHeight}px`
                        }}
                        ></div>
                    </div>
                <div>
                    <div 
                        className='carrousel_image'
                        style={{
                            background: `url(${SlideThree})`,
                            height:`${window.innerHeight}px`
                        }}
                    ></div>
                </div>
            </Slider>
        </div>
    )
}

export default Carrousel