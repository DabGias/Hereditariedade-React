import { useState } from "react"

function Componente1(props) {
    const frutas = ['banana', 'maça', 'uva', 'pera', 'goiaba']

    const [frase, setFrase] = useState('')

    return(
        <>
            <h2>Componente 1</h2>
            {props.children}

            <ul>
                {frutas.map((f) => <li>{f + ' fresca'}</li>)}
            </ul>
            <ul>
                {frutas.map((f, i) => <li>{i + 1 + '° ' + f}</li>)}
            </ul>

            <h2>Vamos escrever uma frase</h2>

            <label>Motivação: </label>
            <input type={"text"} onChange={(e) => setFrase(e.target.value)}/>

            <p>Motivação do Dia: {frase}</p>
        </>
    )
}

export default Componente1