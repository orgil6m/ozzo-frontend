import React from 'react'
import {getOpenPositions} from "../../Datas/Positions"

export async function getServerSideProps({ params }) {
    const { id } = params;
    const positions = await getOpenPositions();
    const current_position = positions.find((p) => p && p._id === id || false)
    return {
      props: { position: current_position }
    };
  }

const CareerID = ({ position }) =>{
  return (
    <div className='pt-20'>
      <p>
      {position.title}
      </p>
      <p>
      {position.detail}
      </p>
    </div>
  )
}

export default CareerID