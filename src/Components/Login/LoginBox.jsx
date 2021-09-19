import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {UseGlobalContext} from '../../Context.js'
import {POSTWITHBODY} from '../../api.js'

function LoginBox() {

    const [userData,setUserData] = useState({type:'patient'})
    const {loginStatus,setLoginStatus} = UseGlobalContext()

    const login = async()=>{
        
        POSTWITHBODY(`/auth/login?user=${userData.type}`,JSON.stringify(userData))
            .then((response)=>{
                console.log(response);
                if(response.status==='success'){
                    window.localStorage.setItem('token',response.token);
                    window.localStorage.setItem('name',response.user.name);
                    window.localStorage.setItem('email',response.user.email);
                    window.localStorage.setItem('userId',response.user.userId);
                    window.localStorage.setItem('type',response.user.type);
                    window.localStorage.setItem('loggedIn',true)
                    setLoginStatus(true)
                    window.location.href="/"
                }else{
                    alert(response.message)
                }
            }).catch((err)=>{
                console.log(err)
                alert(err.message)
            })   
    }

    useEffect(()=>{
        if(loginStatus===true){
            window.location.href='/'
        }
    },[])


    return (
        <>
            <h1 id="login">LogIn</h1><br/>
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
            <input type="email" id="email" class="client-info" required onChange={(e)=>{setUserData({...userData,email:e.target.value})}} />
            <label for="email" className="label">Email</label>
            <input type="password" id="password" class="client-info" required onChange={(e)=>{setUserData({...userData,password:e.target.value})}} />
            <label for="password" className="label">Password</label>
            <input type="button" id="submit" class="client-info" value="Submit" onClick={()=>{login()}}/>
            <div>
                <Link className="box-nav-link" to="/signup">Create an account</Link>
            </div>
        </>
    )
}

export default LoginBox;
