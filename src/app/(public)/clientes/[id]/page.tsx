import React from 'react'


type Props={
    params:{
        id: string
    }
}

export default function ClienteId(props:Props) {
  return (
    <div>
        <h1>ClienteId</h1>
        <p>{props.params.id}</p>
    </div>

  )
}
