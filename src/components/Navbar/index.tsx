import { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    useEffect (() => {
        console.log('Cargo Navbar')
    }, [])
      
    return(
        <nav>
            <ul>
                <li><Link to='/'> Home </Link></li>
                <li><Link to='/contador'>Contador</Link></li>
                <li><Link to='/formulario'>Formulario</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar