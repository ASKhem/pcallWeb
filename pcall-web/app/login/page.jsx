import InputLogin from "../../components/login/InputLogin.jsx";
import Image from 'next/image';

export default function page(){
     
    return (
        <>
            <div className = "min-h-screen bg-gradient-to-br from-black via-zinc-950 to-zinc-800 flex flex-col items-center justify-center">
                <div id="login" className = "w-1/3 flex flex-col items-start justify-start bg-white rounded-xl py-5 px-2">
                    <h1 className = "w-full text-4xl font-semibold flex items-center justify-center p-0">Login</h1>
                    <InputLogin name="Username" type="text" errorMessage={null}/>
                    <InputLogin name="Password" type="password" errorMessage={null}/>
                    <div className = "w-full flex items-center justify-start m-5">
                        <button className = "w-1/4 h-10 bg-orange-500 text-white font-semibold rounded-lg">Login</button>
                        <div className = "w-1/6 h-10 bg-white text-black font-semibold rounded-lg ml-5 flex items-center justify-center border-2 border-gray-500 mouse-pointer">
                            <Image src="/img/google/googleLogo.png" alt="google" width={20} height={20} className = "w-5 h-5"/>
                        </div>
                    </div>
                    <div className="px-5">
                        <p className = "text-gray-500 text-sm font-semibold">Don&apos;t have an account? <a href="/register" className = "text-orange-500">Register</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}