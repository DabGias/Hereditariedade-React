import { useState } from "react"

function Componente2() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    
    return(
        <>
            <h2>Digite nome e email: </h2>

            <label>Nome: </label>
            <input type={"text"} onChange={(e) => setNome(e.target.value)}/>
            <br/>
            <br/>
            <label>E-mail: </label>
            <input type={"email"} onChange={(e) => setEmail(e.target.value)}/>

            <p>Nome: {nome}</p>
            <p>E-mail: {email}</p>
        </>
    )
}

export default Componente2