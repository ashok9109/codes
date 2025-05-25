import React from 'react'

const SignUp = ({ toggle, setToggle }) => {

    console.log(toggle)
    return (
        <>
            <div id='log' className=' h-screen w-screen flex items-center justify-center pt-10   ' >
                <form
                    className=' h-110 w-120 bg-transparent backdrop-blur-sm border-4 border-black-700 text-black flex items-center justify-center flex-col '>
                    <h1 className='mb-15 text-4xl ' >{toggle ? "SignUp" : "Login"}</h1>
                    {toggle ? <div className='flex'>
                        <h1 className='m-2' ><i className="ri-user-2-line"></i></h1>
                        <input className='border-1 m-2 p-1' type="text" placeholder='Username' />
                    </div> : ''}
                    <div className='flex'>
                        <h1 className='m-2' ><i className="ri-mail-fill"></i></h1>
                        <input className='border-1 m-2 p-1 ' type="email" placeholder='Email' />
                    </div>
                    <div className='flex'>
                        <h1 className='m-2' ><i className="ri-git-repository-private-fill"></i></h1>
                        <input className='border-1 m-2 p-1' type="password" placeholder='Password' />
                    </div>
                    {toggle ? <div className='flex'>
                        <h1 className='m-2' ><i className="ri-contacts-book-3-line"></i></h1>
                        <input className='border-1 m-2 p-1' type="number" placeholder='number' />
                    </div> : ''}
                    <input type="submit" className=' bg-gray-500 rounded-full px-20 py-2 mt-10' value={toggle ? "SignUp" : "Login"} />
                    <div className='flex'>
                        <p>Already have an account? </p>
                        <button
                            onClick={() => {
                                setToggle(!toggle)
                            }}
                        >{toggle ? "Login" : "SignUp"} </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUp
