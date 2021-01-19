import React, {Component} from'react';
import Fade from 'react-reveal/FAde';
import Slide from'react-reveal/Slide';

import MyButton from'../utils/MyButton';

class Discount extends Component{

    state={
        discountStart:0,
        discountEnd:30
    }

    percentage = ()=> {
        if(this.state.discountStart <this.state.disocuntEnd){
            this.setState({
                discountStart:this.state.discountStart +1
            })
        }
    }


componentDidUpdate(){
    setTimeout(()=>{
        this.porcentage()
    },30)
}

render(){
    return(
        <div className="center_wrapper">
            <div className="discount_wrapper">

                <Fade
                onReveal={()=>this.porcentage}
                >
                    <dive className="discount_porcentage">
                        <span>{this.state.discountStart}%</span>
                        <span>OFF</span>
                    </dive>
                </Fade>

                <Slide right>
                    <div className="discount_description">
                        <h3> Pusrchase tickets before 1st APRIL</h3>
                        <p>
                            filler
                        </p>
                        <MyButton
                        text="Purchse tickets"
                        bck="#ffa800"
                        color="ffffff"
                        link="hhtp://google.com"
                        />
                    </div>
                </Slide>



            </div>
        </div>
    );
};

export default Discount;