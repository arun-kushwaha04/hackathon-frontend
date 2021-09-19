import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {POSTWITHBODY} from '../../api.js'
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";

function SignUpBox() {

    const [userData,setUserData] = useState({type:'patient'})

    const signUp = async()=>{ 
        console.log(userData)

        POSTWITHBODY(`/auth/signup?user=${userData.type}`,JSON.stringify(userData))
            .then(response=>console.log(response))       
            .catch(error=>{alert(error.message)})

    }

    return (
        <>
            <h1 id="login">Sign Up</h1><br/>
            <div className="user-type-section">
                <span>
                    <input type="radio" id="patient" name="user_type" checked={userData.type==='patient'} onChange={(e)=>{setUserData({...userData,type:'patient'})}} />
                    <label htmlFor="patient">Patient</label>
                </span>
                <span>
                    <input type="radio" id="doctor" name="user_type" checked={userData.type==='doctor'} onChange={(e)=>{setUserData({...userData,type:'doctor'})}} />
                    <label htmlFor="doctor">Doctor</label>
                </span>
            </div>
            <input type="text" id="name" class="client-info" onChange={(e) =>{setUserData({...userData,name:e.target.value})}}/>
            <label for="name" className="label">Name</label>
            
            <input type="email" id="email" class="client-info" autocomplete="off" onChange={(e) =>{setUserData({...userData,email:e.target.value})}}/>
            <label for="email" className="label">Email</label>
            
            <input type="tel" id="contact" class="client-info" autocomplete="off" onChange={(e)=>{setUserData({...userData,contact:e.target.value})}} />
            <label for="contact" className="label">Contact Number</label>
            
            <input type="password" id="password" class="client-info" autocomplete="off" onChange={(e)=>{setUserData({...userData,password:e.target.value})}}/>
            <label for="password" className="label">Password</label>
            
            <input type="number" id="experience" class="client-info" autocomplete="off" style={{display:userData.type==='patient'?'none':'block'}} onChange={(e)=>{setUserData({...userData,experience:e.target.value})}}/>
            <label for="experience" className="label" style={{display:userData.type==='patient'?'none':'block'}} >Experience</label>
            
            <input type="number" id="age" class="client-info" autocomplete="off" style={{display:userData.type==='patient'?'block':'none'}} onChange={(e)=>{setUserData({...userData,age:e.target.value})}}/>
            <label for="age" className="label" style={{display:userData.type==='patient'?'block':'none'}} >Age</label>
            
            <input type="number" id="fees" class="client-info" autocomplete="off"  style={{display:userData.type==='patient'?'none':'block'}} onChange={(e)=>{setUserData({...userData,fees:e.target.value})}}/>
            <label for="fees" style={{display:userData.type==='patient'?'none':'block'}}  className="label">Fees</label>
            <FormControl sx={{ minWidth: 100 }} style={{display:userData.type==='patient'?'none':'block'}} >
                {/* <InputLabel id="demo-simple-select-helper-label" style={{margin:'auto'}}>
                    Type of Doctor
                </InputLabel> */}
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={userData.specialization || "Select type"}
                    style={{width:'60%',margin:'auto',fontSize:'1.4em'}}
                    onChange={(e)=>{setUserData({...userData,specialization:e.target.value})}}>
                    
                    <MenuItem value="" selected><em>Type of doctor</em></MenuItem>
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={"Cardiologist"}>Cardiologist</MenuItem>
                    <MenuItem value={"Oncologist"}>Oncologist</MenuItem>
                    <MenuItem value={"Gastroenterologist"}>Gastroenterologist</MenuItem>
                    <MenuItem value={"Pulmonologist"}>Pulmonologist</MenuItem>
                    <MenuItem value={"Gynecologist"}>Gynecologist</MenuItem>
                    <MenuItem value={"Nephrologist"}>Nephrologist</MenuItem>
                    <MenuItem value={"Endocrinologist"}>Endocrinologist</MenuItem>
                    <MenuItem value={"Ophthalmologist"}>Ophthalmologist</MenuItem>
                    <MenuItem value={"Otolaryngologist"}>Otolaryngologist</MenuItem>
                    <MenuItem value={"Dermatologist"}>Dermatologist</MenuItem>
                    <MenuItem value={"Psychiatrist"}>Psychiatrist</MenuItem>
                    <MenuItem value={"Neurologist"}>Neurologist</MenuItem>
                    <MenuItem value={"Radiologist"}>Radiologist</MenuItem>
                    <MenuItem value={"Surgeon"}>Surgeon</MenuItem>
                    <MenuItem value={"Anesthesiologist"}>Anesthesiologist</MenuItem>
                </Select>
                {/* <FormHelperText>Select Doctor Type</FormHelperText> */}
            </FormControl>
            <button type="button" id="submit" class="client-info" value="Submit" onClick={signUp}>Submit</button>
            <div>
                <Link className="box-nav-link" to="/">Already have an account? Log In</Link>
            </div>
        </>
    )
}

export default SignUpBox
