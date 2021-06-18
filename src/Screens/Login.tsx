import React, { useEffect } from 'react'
import FacebookLogin from 'react-facebook-login'
import { useDispatch, useSelector } from 'react-redux'
import { authActions, facebookAuth, googleAuth, googleUnauth } from '../Redux/authReducer'
import { authSelector } from '../Redux/selectors/authSelector'
import { Redirect } from 'react-router'
import { installGoogleAuth } from '../API/googleAuth'

const Login = () => {
    const dispatch = useDispatch()
    const auth = useSelector(authSelector)

    useEffect(() => {
        installGoogleAuth()
    },[])

    const signInWithGoogle = () => dispatch(googleAuth())
    const signOutWithGoogle = () => dispatch(googleUnauth())

    const signInWithFacebook = (response: any) => dispatch(facebookAuth(response))
    const signOutWithFacebook = () => dispatch(authActions.setAuthSuccess(false))

  
    return (
       <div className='login'>
        <FacebookLogin 
            appId={String(process.env.REACT_APP_FACEBOOK_AUTH_API)}
            callback={signInWithFacebook}
        />
        <button 
            onClick={signInWithGoogle}
            className='login__google'
        >Login with Google</button>
        {auth && <Redirect to='/videosList'/>}
       </div>
    )
}

export default Login
