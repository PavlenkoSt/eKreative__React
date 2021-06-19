import React from 'react'
import { authSelector, authUserSelector } from '../../Redux/selectors/authSelector'
import { useSelector } from 'react-redux'

const Header = () => {
    const auth = useSelector(authSelector)
    const authUser = useSelector(authUserSelector)

    return (
        <header className="header">
            <div className="header__logo">eKreative Videos</div>
            <div className="header__login">
                {auth ? <span>Hello, <span className="header__person">{authUser.name}</span></span> : <span>You are not authorized</span>}
            </div>
        </header>
    )
}

export default Header
