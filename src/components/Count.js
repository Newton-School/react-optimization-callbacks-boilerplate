import React, { useEffect } from 'react'

export const Count = ({count,id})=>{
    console.log('Count changed, so <Count /> re-renders');
    return(
        <div id={`count-${id}`} >
            <span className='count-value'>{count}</span>
        </div>
    )
}