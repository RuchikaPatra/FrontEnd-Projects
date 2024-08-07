import React, { useRef } from 'react'

function RegistrationForm() {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();


    const handleSubmit =(event)=>{
        event.preventDefault();
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        alert(`Username: ${username}\nEmail: ${email}\nPassword: ${password}`)
    }


    return (
        <div className='App-body'>
            <form onSubmit={handleSubmit}>
                <h1>Registration Form</h1>
                <div className='body-in'>
                    <div>
                        <label htmlFor='username'>
                            Username:
                        </label>
                        <input type='text' id='username' ref={usernameRef} onFocus={()=>usernameRef.current.focus()} />
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' id='email' ref={emailRef} onFocus={()=>emailRef.current.focus()} />
                    </div>
                    <div>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' id='password' ref={passwordRef} onFocus={()=>passwordRef.current.focus()} />
                    </div>
                    <button className='btn' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm;