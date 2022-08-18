import { useState } from "react"
import Componente1 from "./components/Componente1"
import Componente2 from "./components/Componente2"

function App() {
    const [num, setNum] = useState(0)

    return(
        <>
            <h1>Aula 03</h1>
            <Componente1>
                <p>Este elemento veio do pai.</p>
                <p>Segundo parágrafo do pai.</p>

                <p>O número {num} é {num % 2 === 0? 'par' : 'ímpar'};</p>
                {
                    num % 2 === 0? <p>Ele é par...</p> : <p>Ele é ímpar...</p>
                }

            </Componente1>

            <Componente2/>

            <button onClick={() => setNum(num + 1)}>Num + 1</button>            
        </>
    )
}

export default App