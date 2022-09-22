import {Input, Button, Column, Home} from './components'
import {useHistory} from 'react-router-dom'

export const Login = () => {
    let history = useHistory()
    return(
        <Column>
        <Input text='Enter User Name' type='text'/>
        <Input text='Enter Password' type='password'/>
        <Button label="Login" primary onClick={()=> history.push(' /Home')}/>
        </Column> 
    )
}
