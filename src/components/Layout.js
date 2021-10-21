import React from 'react'
import NavigationMenu from './NavigationMenu'

const style = {
    fontSize: '25px',
    marginLeft: '10px',
    fontFamily: ['caveat', 'cursive'],
    color: '#1976d2'
}

const Layout = ({ children }) => {

    return (
        <div>
            <div style={style}>Sonora Yun</div>
            <NavigationMenu />
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout