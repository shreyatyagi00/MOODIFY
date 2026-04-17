import React, { useState } from 'react'
import "./login.scss"
import FormGroup from '../components/FormGroup'
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'

const Register = () => {

    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const navigate = useNavigate()

    const { loading, handleRegister } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()

        await handleRegister({ username, password, email })

        navigate('/')

    }

    return (
        <main className="login-page">   {/* ⭐ same class */}
            <div className="form-container">

                <h1>Create Account </h1>
                <p>Register to get started</p>

                <form onSubmit={handleSubmit}>

                    <FormGroup
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        label="Name"
                        placeholder="Enter your name"
                    />

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
                        {loading ? "Creating..." : "Register"}
                    </button>

                </form>

                <p>
                    Already have an account? <Link to="/login">Login here</Link>
                </p>

            </div>
        </main>
    )
}

export default Register

