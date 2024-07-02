import React from 'react'
import './Intensity.css'

import IntensityGraph from './IntensityGraph'



function Intensity({ graph }) {

    return (
        <>
            <h2>Intensity</h2>
            <div className='intensity'>
                <div className='bar-chart'>
                    <IntensityGraph sector={graph} />
                </div>
            </div>
        </>
    )
}

export default Intensity