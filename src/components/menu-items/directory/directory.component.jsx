import React from 'react';
import MenuItem from '../menu-items.component';
import './directory.styles.scss'



class directory extends React.Component{
    constructor() {

        super();


        this.state = {
            sections: [{
                title: "women",
                imageUrl: "https://i.ibb.co/Pj14XzG/women.jpg",
                id: 1
            },
            {
                title: "shortskirts",
                imageUrl: "https://i.ibb.co/cJ2s1wL/shortskirts.jpg",
                id: 2
            },
            {
                title: "hoodies",
                imageUrl: "https://i.ibb.co/r3mRHTT/hoodie.jpg",
                id: 3
            },

            {
                title: "sneakers",
                imageUrl: "https://i.ibb.co/k4R3ShB/sneakers.jpg",
                size: "large",
                id: 4
            },

            {
                title: "menwear",
                imageUrl: "https://i.ibb.co/3sr9rCr/menwear.jpg",
                size: "large",
                id: 5
            }]
        };
 }

    
    
    
     
    render() {
        return (
            <div className='directory-menu'>
                
                {this.state.sections.map(({ title, imageUrl, id, size}) =>
                (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ))}
                
            </div>
        );
    }
}

export default directory; 