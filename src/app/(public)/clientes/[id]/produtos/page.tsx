import React from 'react'

type Props={
    params:{
        id: string
    }
}

export default function Produtos(props: Props) {
  return (
    <div>Produtos
        <p>Do Id: {props.params.id} </p>
    </div>
    
  )
}
