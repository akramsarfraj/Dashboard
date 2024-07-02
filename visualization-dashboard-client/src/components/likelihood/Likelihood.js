import React from 'react'
import LikelihoodGraph from './LikelihoodGraph';
import './Likelihood.css'

function Likelihood({ graph }) {

  return (
    <>
      <h2>Likelihood</h2>
      <div className='likelihood'>

        <div className='likelihood-graph'>
          <LikelihoodGraph like={graph} />
        </div>
      </div>
    </>

  )
}

export default Likelihood