import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            I am a different page!
            <Link to="/">Home</Link>
        </div>
    );
};