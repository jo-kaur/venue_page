import React from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

function Discount() {
    state={
        discountStart:0,
        discountEnd:30
    }

    porcentage=()=>{
        if(this.state.discountStart<this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart+1
            })
        }
    }

    componentDidUpdate = () => {
        setTimeout(()=>{
            this.porcentage()
        },30)
    }
        return(
            <div className='center_wrapper'>
                <div className='discount_wrapper'>

                    <Fade 
                    onReveal={()=>this.porcentage()}
                    >
                        <div className='discount_porcentage'>
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className='discount_description'>
                            <h3>Purchase tickets before 1st APRIL</h3>
                            <p> Be there to experience the history making Barclay Bash. With limited seating, get your hands on these tickets now. </p>

                            <MyButton
                                text='Purchase tickets'
                                bck='#ffa800'
                                color='#ffffff'
                                link='http://google.com'
                            />

                        </div>
                    </Slide>


                </div>
            </div>
        )
}

export default Discount