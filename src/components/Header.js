import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Header = (props) => {
    
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
            <div style={{textAlign: 'center',fontSize:27}}>Anusha's Blog</div>
           
            </div>
            </nav>
    )
}

export default withRouter(Header)
