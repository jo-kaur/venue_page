import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import SideDrawer from './SideDrawer'

function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [showHeader, setShowHeader] = useState(false)

    const handleScroll = () => {
        if(window.scrollY > 0){
            setShowHeader(true)
        } else {
           setShowHeader(false)
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleDrawer = (value) => {
        setDrawerOpen(value)
    }
    
    return(
        <AppBar
            position='fixed'
            style={{
                    backgroundColor: showHeader ? '#240090' : 'transparent',
                    boxShadow: 'none',
                    padding: '10px 0px'
                }}
            >
            <Toolbar> 
            <header className='header_logo'>
                <h1 className='font_righteous header_logo_venue'>
                    Barclays Bash
                </h1>
                <h2 className='header_logo_title'>Concerts happening in the stadium</h2>
            </header>
            <IconButton
                aria-label='Menu'
                color='inherit'
                onClick={() => toggleDrawer(true)}
                >
                <MenuIcon/>
            </IconButton>
            <SideDrawer
                open={drawerOpen}
                onClose={(value) => toggleDrawer(value)}
                />
                </Toolbar>
            </AppBar>
        )
}

export default Header