import React from 'react';
import Slide from 'react-reveal/Slide';

import bts from '../../resources/images/artists/bts.jpg';
import khalid from '../../resources/images/artists/khalid.jpg';
import postMalone from '../../resources/images/artists/postMalone.jpg';
import shawn from '../../resources/images/artists/shawn.jpg';
import doja from '../../resources/images/artists/doja.jpg';
import megan from '../../resources/images/artists/megan.jpg';

function Bios(){
    return(
                <div className="artist_wrapper">
                <h3>Featured Artists</h3>
                <Slide up>
                    <div className="artist">
                        <div className="artist_image" 
                            style={{
                                background: `url(${shawn})`,
                                height:`350px`,
                                width:`50%`,
                                position:'static'
                            }}
                        ></div>
                            
                        <div className="artist_desc">  
                            <h2><a href="https://www.youtube.com/channel/UCAvCL8hyXjSUHKEGuUPr1BA">Shawn Mendes</a></h2>
                            <p>
                                A Canadian pop artist who is known for his platinum-selling hits and Billboard-topping works. This singer and songwriter brought us hit 
                                songs such as “Stitches”, “Believe”, “Senorita”, “If I Can’t Have You”, “Treat You Better”, “There’s Nothing Holdin Me Back”, “In My Blood”,
                                and “Lost in Japan.
                            </p>
                        </div>
                    </div>   

                    <div className="artist">
                        <div className="artist_image"
                            style={{
                                background: `url(${bts})`,
                                height:`350px`,
                                width:`50%`,
                                position:'relative'
                            }}
                        ></div>
                        <div className="artist_desc">
                            <h2><a href="https://www.youtube.com/channel/UCLkAepWjdylmXSltofFvsYQ">BTS</a></h2>
                            <p>
                                This Korean boy band took the world by storm with countless awards and record-topping album sales.
                                These South-Korean artists brought us hit songs such as “Dynamite”, “Boy With Luv”, “IDOL”, “FAKE LOVE”,
                                “Save me”, “Blood, Sweat, & Tears”, “Black Swan”, “DNA”, “Spring Day”, “MIC Drop”, and “Fire”.
                            </p>
                        </div>
                    </div>

                    <div className="artist">
                        <div className="artist_image"
                            style={{
                                background: `url(${khalid})`,
                                height:`350px`,
                                width:`50%`,
                                position:'relative'
                            }}
                        ></div>
                        <div className="artist_desc">
                            <h2><a href="https://www.youtube.com/channel/UCkntT5Je5DDopF70YUsnuEQ">Khalid</a></h2>
                            <p>
                                This American singer and songwriter rose to fame in 2016 with his hit song  “Location”. His music is primarily R&B, hip hop, 
                                pop, and pop-soul. Khalid has collaborated with other artists as well such as Billie Eilish and Ed Sheeran. Some of his hit 
                                songs are “Location”, “Better”, “Young Dumb & Broke”, “Lovely”, “Beautiful People”.
                            </p>
                        </div>
                    </div>

                    <div className="artist">
                        <div className="artist_image"
                            style={{
                                background: `url(${postMalone})`,
                                height:`350px`,
                                width:`50%`,
                                position:'relative'
                            }}
                        ></div>
                        <div className="artist_desc">
                            <h2><a href="https://www.youtube.com/channel/UCeLHszkByNZtPKcaVXOCOQQ">Post Malone</a></h2>
                            <p>
                                Post Malone is an American rapper, singer, songwriter, and record producer. He is known for his introspective songwriting and laconic 
                                vocal style. This versatile singer has brought us hits like “Sunflower”, “Better Now”, “Wow”, “Rockstar”, “Congratulations”, “Psycho”, 
                                “Goodbyes”, “I Fall Apart”, and “White Iverson”.
                            </p>
                        </div>
                    </div>

                    <div className="artist">
                        <div className="artist_image"
                            style={{
                                background: `url(${doja})`,
                                height:`350px`,
                                width:`50%`,
                                position:'relative'
                            }}
                        ></div>
                        <div className="artist_desc">
                            <h2><a href="https://www.youtube.com/channel/UCzpl23pGTHVYqvKsgY0A-_w">Doja Cat</a></h2>
                            <p>
                                Doja Cat is a rapper, singer, songwriter, and record producer who became a viral Internet sensation after releasing
                                her song “Mooo!” even though she had been singing before that. Some of her hit are “Say So”, “Boss B*tch”, “Like That”,
                                “Motive”, and “Streets”.
                            </p>
                        </div>
                    </div>

                    <div className="artist">
                        <div className="artist_image"
                            style={{
                                background: `url(${megan})`,
                                height:`350px`,
                                width:`50%`,
                                position:'relative'
                            }}
                        ></div>
                        <div className="artist_desc">
                            <h2><a href="https://www.youtube.com/channel/UCKrdjiuS66yXOdEZ_cOD_TA">Megan Thee Stallion</a></h2>
                            <p>
                                Megan Thee Stallion is a rapper as well who is famous for her infectious confidence and her jaw-dropping lyrics. She rose to 
                                fame through her social media when videos of her freestyling became popular. Some of her hits are “Body”, “Cry Baby”, “Savage”,
                                “Don’t Stop”, and “Girls in the Mood”.
                            </p>
                        </div>
                    </div>
                    </Slide>
                </div>  
    
    );
};

export default Bios;
