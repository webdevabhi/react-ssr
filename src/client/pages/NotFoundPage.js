import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    console.log(staticContext);
    return (
        <div>
            <h5>Ooops, Route not found</h5>
        </div>
    );
};

export default {
    component: NotFoundPage
};