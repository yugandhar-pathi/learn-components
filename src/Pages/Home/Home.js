import { Button } from "../../components"
import { useNavigate } from "react-router-dom"
export const Home = () =>{
    const navigate = useNavigate()

    const LogoutHandle = () =>{
        navigate('/') 
    }
    
    return(
        <>
        <p>Welcome to HOME page...</p>
        <Button label="Logout" onClick={LogoutHandle}/>
        </>
    )
}