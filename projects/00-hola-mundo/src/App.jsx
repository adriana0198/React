import { useState } from 'react'
import './App.css'
import { TwitterFollow } from './TwitterFollow.jsx'

export function App () {
    // const formatUserName = (userName) => `@${userName}` funcion
    // const formatUserName = <span>@{userName}</span> // elemento

    const [name, setName] = useState('adrianapaez_1')

    return (
        <section className='App'>
            <TwitterFollow initialIsFollowing={true} userName={name}>
                Adriana Lucia Paez
            </TwitterFollow>

            <TwitterFollow userName="midudev">
                Miguel Angel
            </TwitterFollow>

            <button onClick={() => setName('Lucia01')}>
                cambiar nombre
            </button>

            {/* <TwitterFollow isFollowing userName="elonmusk" name="Elonk Musk"/> */}
            {/* <TwitterFollow formatUserName={formatUserName} isFollowing userName="elonmusk" name="Elonk Musk"/> */}
        </section>
    )
}
