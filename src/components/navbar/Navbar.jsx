import React, { useContext } from 'react';
import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from '../../contex/darkModeContext';

const Navbar = () => {
    const {dispatch} = useContext(DarkModeContext);

    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...' id="" />
                    <SearchOutlinedIcon/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className='icon' />
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon onClick={()=>dispatch({type:"TOGGLE"})} className='icon' style={{cursor:"pointer"}}/>
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className='icon' />
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className='icon' />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className='icon' />
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className='icon' />
                    </div>
                    <div className="item">
                        <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1440&h=80&dpr=1" alt="" className='avatar' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;