import { useState } from "react"
// nos sirve para poder guardar una variable para saber si esta siguiendo al usuario

export function TwitterFollow ({ formatUserName, children ,userName, name, initialIsFollowing}) { // las props no se deben mutar debe ser una constante
    // userName = 'unknown' valor por defecto de los parametros
    // const addAt = (userName) => `@${userName}`
    // utilizar una prop para inicializar el estado = initialIsFollowing - solo una vez

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    //const isFollowing = state[0] // valor del estado
    //const setIsFollowing = state[1] // actualizar el estado

    const text = isFollowing ? 'siguiendo' : 'seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
                className='tw-followCard-avatar'
                alt="Avatar de carita feliz" src={`https://unavatar.io/${userName}`}/>
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                {/* <span className='tw-followCard-infoUser'>{formatUserName(userName)}</span> */}
                {/* <span className='tw-followCard-infoUser'>{formatUserName}</span> */}
                <span className='tw-followCard-infoUser'>@{userName}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClick}> 
                {text} {/* hijo del elemento - children */}
            </button>
        </aside>
    </article>
    )
}

// reddit.com