import { Button } from "../../components"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

export const Home = () =>{
    const navigate = useNavigate()
    const { t } = useTranslation()

    const LogoutHandle = () =>{
        navigate('/') 
    }
    
    return(
        <>
        <p>{t('Welcome_Home')}</p>
        <Button label="Logout" onClick={LogoutHandle}/>
        </>
    )
}