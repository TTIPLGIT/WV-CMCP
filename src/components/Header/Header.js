import React, { useState } from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Collapse from '@material-ui/core/Collapse';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import download from './../../images/logo.png';
import './index.css'
import { fontFamily } from '@mui/system';
import { Link } from 'react-router-dom';

// import { borderBottomColor, borderColor } from '@mui/system';

const useStyles = makeStyles(theme => ({
  appBar: {
    boxShadow: '0 1px 8px rgba(0,0,0,.3)',
    position: 'relative',
    color:'#000000',
    background:'#ebebe0',
    // background: 'rgb(2,0,36)',
    // background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(56,55,135,1) 0%, rgba(255,39,24,1) 0%, rgba(222,36,25,1) 20%, rgba(190,39,31,1) 59%, rgba(167,32,27,1) 88%, rgba(195,38,25,1) 100%, rgba(249,74,10,1) 100%, rgba(0,212,255,1) 100%, rgba(227,108,48,1) 100%)',
    zIndex: theme.zIndex.drawer + 100,
    [theme.breakpoints.down('sm')]: {
      position: 'fixed'
    }
  },
  toolBar: {
    paddingLeft: theme.spacing(1) / 2,
    paddingRight: theme.spacing(1) / 2,
    
  },
 

  branding: {
    display: 'flex',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    margin: 'auto 0',
    lineHeight: '50px',
    padding: `0 64px 0 0`,
    height: '53px',
    width: '20%',
  },
  download: {
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '50px'
    }
  },
  searchWrapper: {
    flex: '1 1 0%',
    boxSizing: ' border-box',
    
  },
  searchForm: {
   
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(1) * 2,
    display: 'block',
    maxWidth: '800px',
  },
  searchInput: {
    fontSize: '1rem',
    padding: theme.spacing(1) * 1.9,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1) * 1.2
    },
    cursor: 'text',
    textIndent: '30px',
    width: '70%',
    outline:'#F37021',
    borderRadius:'25px',
    borderColor:'#F37021'
    
  },
  searchWrapperContent:{
    margin:'0rem 8rem ',
    fontSize:'20PX',
    fontFamily:'sans-serif',
    color:'#F37021',
  },
 
  searchIcon: {
    position: 'absolute',
    top: '50%',
    left: '0',
    marginTop: '-24px',
    color: 'rgba(0,0,0,.87)'
  },

}));

const Header = ({
  logo,
  logoAltText,
  toggleFullscreen,
  toggleDrawer,
  toogleNotifications
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchExpanded, setSearchExpanded] = useState(false);

  const handleSettingdToggle = event => setAnchorEl(event.currentTarget);

  const handleCloseMenu = () => setAnchorEl(null);

  const handleSearchExpandToggle = () => setSearchExpanded(!searchExpanded);

  const handleDrawerToggle = () => {
    toggleDrawer();
    if (searchExpanded) handleSearchExpandToggle();
  };

  const handleNotificationToggle = () => {
    toogleNotifications();
    if (searchExpanded) handleSearchExpandToggle();
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>

        <div className={classes.branding}>
          <img src={download} alt={logoAltText} className={classes.logo} />
        </div>

        <Hidden xsDown >
          <div className={classes.searchWrapper}>
            <p className='Heading'>CASE MANAGEMENT FOR CHILD PROTECTION</p>
          </div>
        </Hidden>

        <Hidden smUp>
          <span className="flexSpacer" />
        </Hidden>

        <Hidden smUp>
          <IconButton
            color="inherit"
            onClick={handleSearchExpandToggle}
            aria-expanded={searchExpanded}
            aria-label="Show searchbar"
          >
            <SearchIcon />
          </IconButton>
        </Hidden>

        <Hidden xsDown>
          <IconButton color="inherit" onClick={toggleFullscreen}>
            <FullscreenIcon />
          </IconButton>
        </Hidden>

        <IconButton color="inherit" onClick={handleNotificationToggle}>
          <Badge badgeContent={5} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <IconButton
          aria-label="User Settings"
          aria-owns={anchorEl ? 'user-menu' : null}
          aria-haspopup="true"
          color="inherit"
          onClick={handleSettingdToggle}
        >
          <MoreVertIcon />
        </IconButton>

        <Menu
          id="user-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleCloseMenu}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            <ListItemIcon>
              <NotificationsOffIcon />
            </ListItemIcon>
            <ListItemText primary="Disable notifications" />
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <Link to="/signin">
            <ListItemText primary="Sign out" />
            </Link>
          </MenuItem>
        </Menu>
      </Toolbar>
      <Hidden smUp>
        <Collapse in={searchExpanded} timeout="auto" unmountOnExit>
          <Toolbar className={classes.toolBar}>
            <div className={classes.searchWrapper}>
              <form className={classNames(classes.searchForm, 'mr-0')}>
                <IconButton aria-label="Search" className={classes.searchIcon}>
                  <SearchIcon />
                </IconButton>
                <input
                  className={classes.searchInput}
                  type="text"
                  placeholder="Search"
                  autoFocus="true"
                />
              </form>
            </div>
          </Toolbar>
        </Collapse>
      </Hidden>
    </AppBar>
  );
};

Header.prototypes = {
  logo: PropTypes.string,
  logoAltText: PropTypes.string
};

export default Header;
