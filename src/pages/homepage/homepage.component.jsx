import React from 'react';

import Directory from '../../components/menu-items/directory/directory.component';

import './homepage.styles.scss';



const HomePage = ({ history}) => (
    <div className='homepage'>
        <Directory history={ history} />
    </div>
         


);

export default HomePage;