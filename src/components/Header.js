import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import {Link, useNavigate} from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";
const Header = () => {
    let isLogin = useSelector(state => state.isLogin)
    isLogin = isLogin || localStorage.getItem("userId");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [value,setValue] = useState();
    const handlelogout = ()=>{
      try{ 
      dispatch(authActions.logout());
      toast.success("Logout Successfully");
      navigate("/login");
      localStorage.clear();
      }catch(error){
       console.log(error);
      }
    }
  return (
        <>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="h4">My Blog APP</Typography>
              {isLogin && (

                <Box display={"flex"} marginLeft="auto" marginRight={"auto"}>
                  <Tabs
                    textColor="inherit"
                    value={value}
                    onChange={(e, val) => setValue(val)}
                  >
                    <Tab label="Blogs" LinkComponent={Link} to="/blogs" />
                    <Tab label="My Blogs" LinkComponent={Link} to="/my-blogs" />
                    <Tab label="Create Blog" LinkComponent={Link} to="/create-blog"/>
                  </Tabs>
                </Box>
              )}
              <Box display={"flex"} marginLeft="auto">
              {!isLogin && (
              <>
                    <Button
                      sx={{ margin: 1, color: "white" }}
                      LinkComponent={Link}
                      to="/login"
                    >
                      Login
                    </Button>
                    
                    <Button
                      sx={{ margin: 1, color: "white" }}
                      LinkComponent={Link}
                      to="/register"
                    >
                      Register
                    </Button>
                    </>
              )}
              {isLogin && ( 
                <Button  onClick={handlelogout} sx={{ margin: 1, color: "white" }}>
                Logout
              </Button>
              )}
              </Box>
            </Toolbar>
          </AppBar>
        </>
      );
    };
    
    export default Header;
