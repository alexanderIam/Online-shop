import React, { useContext, useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { LOGIN_ROUTE } from '../utils/consts';
import { registration, login } from '../http/userApi';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Auth = observer(()=>{
    const location = useLocation()
    const {user} = useContext(Context)
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const click = async () => {
     
        try {
            let data;
            if(isLogin){
                data = await login(email, password)
                
            }else{
                data = await registration(email, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
            
        } catch (error) {
            alert(error.response)
        }     
    }
    
    return (
        <Container className="d-flex align-items-center justify-content-center">              
            <Form> 
                <h2 className='m-auto mb-4  mt-4'>{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button
                    variant={"outline-success"}
                    onClick={click}
                >
                    {isLogin ? 'Войти' : 'Регистрация'}
                </Button>
                {isLogin ? 
                    <div>No account? <Link to={REGISTRATION_ROUTE}>register</Link></div>
                    :
                    <div>Have account? <Link to={LOGIN_ROUTE}>login</Link></div>
                }                        
            </Form>              
        </Container> 
    );
})

export default Auth;
