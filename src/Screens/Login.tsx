import React from 'react'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import { useDispatch, useSelector } from 'react-redux'
import { authorizing } from '../Redux/authReducer'
import { authSelector } from '../Redux/selectors/authSelector'
import { Redirect } from 'react-router'

const Login = () => {
    const dispatch = useDispatch()
    const auth = useSelector(authSelector)

    const signInWithFacebook = (response: any) => dispatch(authorizing(response, 'facebook'))
    const signInWithGoogle = (response: any) => dispatch(authorizing(response, 'google'))

    return (
        <div className='login'>
            <GoogleLogin
                clientId={String(process.env.REACT_APP_GOOGLE_AUTH_API)}
                onSuccess={signInWithGoogle}
                onFailure={signInWithGoogle}
                buttonText="LOGIN WITH GOOGLE"
                className='login__google'
            />
            <FacebookLogin 
                appId={String(process.env.REACT_APP_FACEBOOK_AUTH_API)}
                callback={signInWithFacebook}
            />
            {auth && <Redirect to='/videosList'/>}
        </div>
    )
}

export default Login
