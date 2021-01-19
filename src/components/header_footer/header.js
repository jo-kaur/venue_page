
import React, { Component } from 'react'

import AppBar from'@material-ui/core/Appbar';
import Toolbar from'@material-ui/core/Toolbar';
import Menuicon from'@material-ui/icon/Menu';
import IconButton from '@material-ui/core/iconButton';

import SiderDarwer from'/sideDrawer';

class Header extends Component {
    state={
        drawerOpen: false,
        headerShow: false
            }

    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
    }



    handleScroll = () => {
        if(window.scrollY >0){
            this.setState({
                headerShow: false
            })
        }
    }

    toggleDarwer =(value) =>{
        this.setSate({
            drawerOpen:value
        })
    }

    render(){
        return(
            <AppBar
            position="fixed"
            style={{
                baclgroundColor:this.state.headerShow ? '#2f2f2f' :
                'transparent',
                boxShadow:'none',
                padding: '1010px 0px'
            }}
            >
                <Toolbar>

                    <div className="header_logo">
                        <div className= "font_righteous header_logo_venue">YAnkee Stadium</div>
                        <div classNAme="header_logo_title">Opening Day</div>
                    </div>

                    <IconButton
                    aria-label="Menu"
                    color="inherit"
                    onClick={()=> this.toggleDrawer(true)}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <SiderDarwer
                    open ={this.state.drawerOpen}
                    onClsoe={(value)=> this.toggleDrawer(value)}
                    />


                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;