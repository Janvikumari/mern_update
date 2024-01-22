import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import toast from 'react-hot-toast'
const Register = () => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
      });
      const handleChange = (e) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.post("/api/v1/user/register", {
            username: inputs.name,
            email: inputs.email,
            password: inputs.password,
          });
          if (data.success) {
            toast.success("User registered successfully")
            navigate("/login");
          }
        } catch (error) {
          console.log(error);
        }
      };    
  return (
    <div>
        <form onSubmit={handleSubmit}>

        <Box
        maxWidth={500}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        justifyContent={'center'}
        margin="auto"
        marginTop={6}
        boxShadow= "12px 12px 22px #ccc"
        padding={3}
        borderRadius={5}
        >
        <Typography variant="h4" 
        sx={{ textTransform: "uppercase" }}
        padding={3}
        textAlign="center"
        >Register
        </Typography>
        <TextField placeholder="name"
            value={inputs.name}
            onChange={handleChange}
            name="name"
            margin="normal"
            type={"text"}
            required
          />
        <TextField   placeholder="email"
            value={inputs.email}
            onChange={handleChange}
            name="email"
            margin="normal"
            type={"email"}
            required/>
        <TextField  placeholder="password"
            value={inputs.password}
            name="password"
            margin="normal"
            type={"password"}
            required
            onChange={handleChange}/>
        <Button  type="submit"
            sx={{ borderRadius: 3, marginTop: 3 }}
            variant="contained"
            color="primary"
          >
            Submit</Button>
        <Button  onClick={() => navigate("/login")}
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Already Registerd ? Please Login</Button>
        </Box>
        </form>
    </div>
  )
}

export default Register