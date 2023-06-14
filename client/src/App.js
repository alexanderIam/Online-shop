import './App.css';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { check } from './http/userApi';
import { Context } from './index';
import { Spinner } from 'react-bootstrap';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'

const App = observer(()=> {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      if(!data){
        user.setUser(false)
        user.setIsAuth(false)
      }else{
        user.setUser(true)
        user.setIsAuth(true)
      }
    })
    .finally(() => setLoading(false))
  }, [])

  if (loading) {
      return <Spinner animation={"grow"}/>
  }

  return (
    <BrowserRouter>
      <Header/>
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
  );
})

export default App;
