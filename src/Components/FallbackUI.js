import React from 'react';
import { Link } from 'react-router-dom';

const ErrorBoundryUI = () => {
    return (
        <div>
            <h1>OOPs Something went wrong</h1>
            <Link to='/'>Go Back</Link>
            
        </div>
    )
}

export default ErrorBoundryUI;