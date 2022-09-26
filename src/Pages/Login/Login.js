import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { Input, Button, Column } from "../../components"
import {useNavigate} from 'react-router-dom'
import { useTranslation } from "react-i18next"
import {setName} from '../../LoginSlice'


export const Login = () => {
     
    const [username, setuserName] = useState("")

    const { t } = useTranslation()
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const userNameHandle = (evt) =>{
        setuserName(evt.target.value)
    }
    const LoginHandle = () =>{
        dispatch(setName(username)) 
        navigate('/home')
    }
    return(
        <Column>
        <Input onChange={userNameHandle} styleType="outlined" text={t('username')} type="text" placeHolder={t('username_placeholder')}/>
        <Input styleType="outlined" text={t('password')} type="password" placeHolder={t('password_placeholder')}/>
        <Button label="Login" primary onClick={LoginHandle}/>
        </Column>
    )
}