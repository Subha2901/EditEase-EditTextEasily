// import { useState } from "react"
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    // const [mode, setMode] = useState("light");
    // let myStyle = {
    //     color: 'white',
    //     backgroundColor: 'black'
    // }

    // const handleDarkMode = () => {
    //     setMode("dark");
    // }

    let myStyle = {
        color: props.mode === 'light' ? 'black' : 'white',
        backgroundColor: props.mode === 'light' ? '#001a00' : 'black',
        paddingLeft: '50px'
    }

    return (
        <div>
            <nav className={`navbar navbar-expand-lg border-bottom border-body`} data-bs-theme={props.mode} style={myStyle}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{fontWeight: '600', color: 'white'}}>{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav" >
                            <li className="nav-item" >
                                <Link className="nav-link active" style={{color: 'white'}} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="nav-link active" style={{color: 'white'}} to='/about'>About</Link>
                            </li>
                            <li className='nav-item' >
                                <Link className='nav-link disabled' style={{color: 'grey'}} to='/'>Contacts</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="form-check form-switch">
                        {/* <button type='button' className='btn btn-warning' onClick={props.handleYellowTheme}>Yellow</button> */}
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.handleToggle}/>
                    </div>
                </div>
            </nav>
        </div>
    )
}
