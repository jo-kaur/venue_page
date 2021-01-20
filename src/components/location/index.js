import React from 'react';

const Location = () => {
    return(
        <div className = "location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.7106071402377!2d-73.84725628566294!3d40.74639294344961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25fd9ca205fe1%3A0xafd91bbf57827de3!2sUnisphere%2C%20Flushing%20Meadows-Corona%20Park%2C%20Corona%2C%20NY%2011368!5e0!3m2!1sen!2sus!4v1611104641766!5m2!1sen!2sus"
                width="600"
                height="450" 
                frameborder="0" 
                style="border:0;" 
                allowfullscreen="" 
                aria-hidden="false" 
                tabindex="0"
                title = "Titles"
            >
            </iframe>

            <div className = "location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;
