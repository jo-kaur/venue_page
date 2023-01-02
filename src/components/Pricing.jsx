import React,{Component} from 'react';
import MyButton from './utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component{

    state={
        prices:[110,150,240],
        positions:['Upper-level','Lower-level','Floor-seats'],
        desc:[
            'There\'s no need to speak for the Upper floor when no words can top this fan\'s experience. "The Ticketsnow Club was an exclusive concourse that offered specialty food and drink options that you couldn\'t find anywhere else in the whole place. We hung out there, feeling like royalty before the main acts took the stage. We could easily get to our seats because we could access a small flight of stairs right from the club. ',
            'You have the lower floor option for a cheaper option but incredible view without the crowd of insanity. You\'ll get the same ear destroying experience of your favorite artists. While the side sections closest to the stage are top-notch, side sections farther from the stage may leave you with a cramp in your neck. Sections 9 and 23 are not well-angled towards the stage - leaving you to turn your head for an ideal view. ',
 'You will find some of the most impressive views and highest energy when sitting close to a traditional end stage in either floor section 1, 2, or 3. Seating here typically begins with row 1 at the front and ends at row 15 in the back. For the best center stage views, opt for seat numbers 7-8 in floor section 2 which gives you a direct line of sight to the center of the performance during an end stage configuration.' ],
        linkto:['https://brooklynshow.io-media.com/web/index.html','https://brooklynshow.io-media.com/web/index.html','https://brooklynshow.io-media.com/web/index.html'],
        delay:[500,0,500]

    }

    showBoxes=()=>(
        this.state.prices.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="ffffff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
        
    )

    render(){
        return(
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
            </div>
        );
    }
}

export default Pricing;