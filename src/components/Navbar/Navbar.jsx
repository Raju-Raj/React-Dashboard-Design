import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {  useMediaQuery } from '@mui/material';
import { useLocation } from 'react-router-dom';
import "./Navbar.css";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Navbar = ({menuBar,setMenuBar}) => {
  const location = useLocation();
  const [pageName,setPageName] = React.useState("")
  const [stickyNav,setStickyNav] = React.useState("")

  // const stickNavbar = () => {
  //     const pathName = location.pathname.split('/');
  //     let windowHeight = window.scrollY;
  //     if(pathName[1] === "qualificationmanagement"){
  //       windowHeight > 200 ? setStickyNav("sticky-nav") : setStickyNav("")
  //     }else{
  //       windowHeight > 50 ? setStickyNav("sticky-nav") : setStickyNav("")
  //     }
      
  // }

  const stickNavbar = () => {
    const pathName = location.pathname.split('/');
    let windowHeight = window.scrollY;
    if (pathName[1] === "qualificationmanagement") {
      if (windowHeight > 200) {
        setStickyNav("sticky-nav");
      } else {
        setStickyNav(""); 
      }
    } else {
      if (windowHeight > 50) {
        setStickyNav("sticky-nav");
      } else {
        setStickyNav(""); 
      }
    }
  };

  React.useEffect(() => {
      window.addEventListener("scroll", stickNavbar);
  }, []);
  
  const menuBarFunction = () => {
    setMenuBar(true)
  }

  React.useEffect(() => {
    const pathSegments = location.pathname.split('/');
    if(pathSegments[1] === 'home'){
      setPageName("Dashboard")
    }else if(pathSegments[1] === 'driversmanagement'){
      setPageName("Drivers Management")
    }else if(pathSegments[1] === 'vehiclemanagement'){
      setPageName("Vehicle Management")
    }else if(pathSegments[1] === 'qualificationmanagement'){
      setPageName("Qualification Management")
    }else if(pathSegments[1] === 'admin'){
      setPageName("Admin Users")
    }

  }, [location.pathname]);
  
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{background:"#09c1ce"}} className={`appBar ${stickyNav}`}>
        <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          onClick={menuBarFunction}
          className='barIcon'
        >
          <MenuIcon />
        </IconButton>
        <Box variant="div" className="logo">
        <div>
          <img
            src="https://scontent.fhyd11-2.fna.fbcdn.net/v/t39.30808-6/279050924_354283636736657_3573637647336651546_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RcH41YRMUJEAX9tNoKl&_nc_ht=scontent.fhyd11-2.fna&oh=00_AfDEzhbC7CA_Vw9dl7gDNR53v0mqdZ2DYn1KBZjSquNQlQ&oe=64F2532E"
            alt=""
          />
        </div>
      </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {pageName}
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;