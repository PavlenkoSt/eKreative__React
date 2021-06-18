import React from 'react'
import { authSelector, authUserSelector } from '../Redux/selectors/authSelector'
import { useSelector } from 'react-redux'

const Header = () => {
    const auth = useSelector(authSelector)
    const authUser = useSelector(authUserSelector)

    return (
        <header className="header">
            <div className="header__logo">eKreative Video</div>
            <div className="header__login">
                {auth ? <span>Вы авторизованы как <span className="header__person">{authUser.name}</span></span> : <span>Вы не авторизованы</span>}
            </div>
        </header>
    )
}

export default Header
