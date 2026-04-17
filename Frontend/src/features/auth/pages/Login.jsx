import React, { useState } from 'react'
import "./login.scss"
import FormGroup from '../components/FormGroup'
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'
 
const Login = () => {

    const { loading, handleLogin } = useAuth()

    const navigate = useNavigate()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        await handleLogin({ email, password })
        navigate("/")
    }

    return (
        <main className="login-page">
            <div className="form-container">

                <h1>Welcome Back 👋</h1>
                <p>Login to your account</p>

                <form onSubmit={handleSubmit}>

                    <FormGroup
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email"
                        placeholder="Enter your email"
                    />

                    <FormGroup
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                    />

                    <button className="button auth-btn" type="submit" disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </button>

                </form>

                <p>
                    Don’t have an account? <Link to="/register">Register</Link>
                </p>

            </div>
        </main>
    )
}

export default Login