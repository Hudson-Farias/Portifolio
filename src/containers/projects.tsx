import React, { forwardRef } from 'react';

const Projects = forwardRef<HTMLDivElement, {}>(({ }, ref) => {
    return (
        <div ref={ref} className='text-center'>
            Em breve
        </div>
    );
})


export default Projects
