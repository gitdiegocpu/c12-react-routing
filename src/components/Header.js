
import { useEffect, useState } from "react"

export default function Header() {
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        const userLS = localStorage.getItem('myUser')

        if(userLS){
            setLoggedIn(true)
        }
    }, [])

    return(
        <header>
            <nav>
                <ul>
                    <li><a href="" > Home</a></li>
                    {!loggedIn && 
                    <>
                    <li><a href="/signup">Signup </a></li>
                    <li><a hret="/Login">login</a></li>
                    </>
                    }
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>    
   
    )
}