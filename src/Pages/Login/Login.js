import { Input, Button, Column } from "../../components"
//import {Home} from '../Home/Home'
import {useNavigate} from 'react-router-dom'

export const Login = () => {

    const navigate = useNavigate()

    const LoginHandle = () =>{
        navigate('/home')
    }

    return(
        <Column>
        <Input styleType="outlined" text="User Name :" type="text" placeholder="Enter Your User Name Here"/>
        <Input styleType="outlined" text="Password :" type="password" placeholder="Enter Your Password Here"/>
        <Button label="Login" primary onClick={LoginHandle}/>
        </Column>
    )
}