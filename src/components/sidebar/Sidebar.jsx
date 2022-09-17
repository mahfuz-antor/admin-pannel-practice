import React, { useContext } from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../contex/darkModeContext';

const Sidebar = () => {

    const {dispatch} = useContext(DarkModeContext);

    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/" style={{textDecoration: "none"}}>
                <span className="logo">myAdmin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                
                <ul>
                    <p className="tittle">MAIN</p>
                    <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                    </li>
                    <p className="tittle">LISTS</p>
                    <li>
                        <Link to="/users" style={{textDecoration: "none"}}>
                            <PersonOutlineOutlinedIcon className='icon'/>
                            <span>Users</span>
                        </Link>
                    </li>
                    <li>
                    <Link to="/products" style={{textDecoration: "none"}}>
                        <Inventory2OutlinedIcon className='icon'/>
                        <span>Products</span>
                    </Link>
                        
                    </li>
                    <li>
                        <DvrOutlinedIcon className='icon'/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <AirportShuttleOutlinedIcon className='icon'/>
                        <span>Delivery</span>
                    </li>
                    <p className="tittle">USEFUL</p>
                    <li>
                        <QueryStatsOutlinedIcon className='icon'/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsActiveOutlinedIcon className='icon'/>
                        <span>Notifications</span>
                    </li>
                    <p className="tittle">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className='icon'/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyAltOutlinedIcon className='icon'/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsOutlinedIcon className='icon'/>
                        <span>Settings</span>
                    </li>
                    <p className="tittle">USER</p>
                    <li>
                        <AccountBoxOutlinedIcon className='icon'/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppOutlinedIcon className='icon'/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
            </div>
        </div>
    );
};

export default Sidebar;