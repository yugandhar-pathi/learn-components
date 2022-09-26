import { Button } from "../../components"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

export const Home = () =>{
    const navigate = useNavigate()
    const { t } = useTranslation()

    const name = useSelector(state => state.userdetails.username)

    const LogoutHandle = () =>{
        navigate('/') 
    }
    
    return(
        <>
        <p>{`Welcome ${name}`}</p>
        <p>{t('Welcome_Home')}</p>
        <Button label={t('logout')} onClick={LogoutHandle}/>
        </>
    )
}