import React from 'react'
import './Header.css'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCall"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"
import { Avatar } from '@material-ui/core'

function Header() {
    const avatar_image = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    return (
        <div>
            <div className='header'>
                <div className="header__left">
                    <MenuIcon />
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="" />
                </div>
                <div className="header__input">
                    <input type="text"/>
                    <SearchIcon className="header__inputButton" />
                </div>
                <div className="header__icons">
                    <VideoCallIcon />
                    <AppsIcon />
                    <NotificationsIcon />
                    <Avatar
                        alt = "User"
                        src = { avatar_image }
                    />
                </div>
            </div>
        </div>
    )
}

export default Header
