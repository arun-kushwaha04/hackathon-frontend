import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import LoginBox from './LoginBox'
import SignUpBox from './SignUpBox'
import './styles/Login.css'

function Login() {
    return (
        <div id="container">
            <div id="left">
                <h1 id="welcome">Welcome</h1>
                <p id="lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                Vivamus sodales eros non arcu pellentesque convallis.<br/>
                Nunc dignissim lectus in malesuada porta.<br/>
                Proin ac erat sed urna congue suscipit.<br/>
                Morbi aliquet eget nisl id ornare.
                </p>
            </div>
            <div id="right">
                <Router>
                    <Switch>
                        <Route path="/" exact component={LoginBox} />
                        <Route path="/signup" exact component={SignUpBox} />
                    </Switch>
                </Router>
            </div>
        </div>

    )
}

export default Login


