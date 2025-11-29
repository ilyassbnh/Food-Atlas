import React from 'react';
import './SideBar.css'
import { Link } from 'react-router-dom';
const SideBar = () => {
    return (
        <div className='side-bar'  >
            <button><Link className='btn' to={'/add'}>Add Recipe</Link></button>

            <button><Link className='btn' to={'/manage'}>Manage Recipe</Link></button>

        </div>
    );
}

export default SideBar;
