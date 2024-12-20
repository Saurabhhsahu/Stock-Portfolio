import React, { useState } from 'react'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [haveAcc, setHaveAcc] = useState(false)

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleChange = () => {
        setHaveAcc(!haveAcc)
    }

    return (
        <div className='w-full bg-gradient-to-r from-indigo-100 to-blue-200 flex'>

            {/* left part */}
            <div className='w-1/2 bg-gradient-to-b from-green-500 to-teal-500 h-screen flex justify-center items-center'>
                <div className='bg-white w-[350px] p-[30px] rounded-xl shadow-xl'>
                    <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
                        {haveAcc ? 'Sign in' : 'Sign up'}
                    </h2>

                    <div className='text-gray-600 text-sm mb-4'>
                        <p>{haveAcc ? "Don't" : "Already"} have an account? 
                            <span className='font-semibold cursor-pointer hover:text-gray-500' onClick={handleChange}>
                                {haveAcc ? ' Sign up' : ' Sign in'}
                            </span>
                        </p>
                    </div>

                    <div className='mb-4'>
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            placeholder="Email"
                            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                        />
                    </div>

                    <div className='mb-6'>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                            placeholder="Password"
                            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                        />
                    </div>

                    <button className='w-full bg-teal-600 text-white p-3 rounded-md hover:bg-teal-700 transition'>
                        {haveAcc ? 'Sign in' : 'Sign up'}
                    </button>
                </div>
            </div>

            {/* right part */}
            <div className='w-1/2 bg-gradient-to-r from-teal-600 to-blue-600 h-screen flex justify-center items-center'>
                <div className='text-center text-white'>
                    <h1 className='text-5xl font-extrabold mb-4'>
                        Track Your Portfolio
                    </h1>
                    <p className='text-xl opacity-80'>
                        Manage your stock investments effortlessly with real-time tracking and valuable insights. 
                        Stay ahead in the market and make informed decisions.
                    </p>
                    <p className='text-lg mt-4 opacity-90'>
                        Start tracking today and build your financial future with confidence!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
