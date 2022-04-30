
import React, { useState, useContext, useEffect }  from 'react'
import { useRouter } from 'next/router';
import { DataContext } from '../store/GlobalState';

export async function getServerSideProps() {
  const base = process.env.BASE_URL
  const api = process.env.API_URL
  return {
    props: {base, api},
  }
}

const Login = ({api}) => {
    const router = useRouter()
    const {state, dispatch} = useContext(DataContext)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errmessage, setErrmessage] = useState("");
    const {auth, notify} = state
    const login = async (e) => {
        try {
            e.preventDefault()
            const data = { username, password };
            const response = await fetch(`${api}/api/ozzo/login`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
        });
        const resJson = await response.json();
        if (response.status == 200) {
             dispatch({type:'AUTH', payload:{
                token: resJson.token,
                user: resJson.user,
            }})
            window.localStorage.setItem("token", resJson.token);
            window.localStorage.setItem("tokenExpTime", resJson.tokenExpTime);
            window.localStorage.setItem("user", JSON.stringify(resJson.user));
            window.localStorage.setItem("loggedTime", resJson.loggedTime);
            window.localStorage.setItem("tokenExpTime", resJson.tokenExpTime);
            const user = JSON.parse(window.localStorage.getItem("user"))
            if(user.roles.includes("admin")){
                router.push('/admin')
            } else if(user.roles.includes("teacher")){
                router.push("teacher")
            } else if(user.roles.includes("service")){
                router.push("service")
            } else if(user.roles.includes("artist")){
                router.push("artist")
            }

        } else if (response.status == 401) {
            setErrmessage("Хэрэглэгчийн нэр эсвэл нууц үг буруу байна");
        } else {
            setErrmessage("Алдаа гарлаа");
        }
        } catch (err) {}
  };
  if(Object.keys(auth).length !== 0){
      router.push("/admin")
      return <></>
    }
    return (
        <div className='w-screen h-screen absolute  flex justify-center items-center'>
            <div className='lg:w-1/2 md:w-2/3 w-11/12 py-20'>
                <div className='w-full flex flex-col items-center py-5'>
                    <p className='uppercase font-light text-xl'>
                        Хэрэглэгч нэвтрэх
                    </p>
                    <div className='w-10 h-1 mt-3 bg-red-500'>

                    </div>
                </div>
                <form method='POST' onSubmit={login}>
                <div className='w-full flex flex-col lg:px-32 md:px-20 p-5'>
                    <label>Нэвтрэх нэр</label>
                    <input 
                        className='transition-all duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-red-300
                        font-light ' 
                        id="username-address"
                        name="username"
                        type="text"
                        defaultValue={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        required
                        autoComplete="off"
                        placeholder='Нэвтрэх нэрээ оруулна уу'/>
                    <label>Нууц үг</label>
                    <input 
                        className='transition-all duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-red-300 font-light'   
                        id="password"
                        name="password"
                        type="password"
                        defaultValue={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        required
                        placeholder='Нууц үгээ оруулна уу'
                    />
                     <p className='text-red-500/80 text-sm text-justify'>{errmessage}</p>
                    <button 
                        className='transition-all duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2  font-medium bg-red-500 hover:bg-red-400 text-white'
                        onClick={()=> {login()
                        setErrmessage()}}
                    >
                        Нэвтрэх
                    </button>
                   
                </div>
                </form>
            </div>
        </div>
    )
}

export default Login