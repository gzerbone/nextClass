"use client"

import {useState} from 'react'

export default function Formulario() {
    const [email, setEmail] = useState("")           
    const [senha, setSenha] = useState("")           

    return (
      <div>
        <label>Email:</label>
          <input type="text" />
          <br/>
          <br/>
          <label>Senha:</label>
          <input type="password" />
      </div>
    )
  }
  