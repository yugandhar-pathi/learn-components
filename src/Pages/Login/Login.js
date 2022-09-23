import { Input, Button, Column } from "../../components"
import {useNavigate} from 'react-router-dom'
import { useTranslation } from "react-i18next"

export const Login = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const LoginHandle = () =>{
        navigate('/home')
    }
    return(
        <Column>
        <Input styleType="outlined" text={t('username')} type="text" placeHolder={t('username_placeholder')}/>
        <Input styleType="outlined" text={t('password')} type="password" placeHolder={t('password_placeholder')}/>
        <Button label="Login" primary onClick={LoginHandle}/>
        </Column>
    )
}