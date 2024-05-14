import LoginForm from "@/components/auth/LoginForm"
import AuthProvider from "@/components/context/AuthProvider"

export default function page() {

    return (
        <>
            <div className="w-full h-screen flex items-center justify-center">
                <div className="w-5/12 h-full">
                    <AuthProvider>
                        <LoginForm />
                    </AuthProvider>
                </div>
                
                <div className=" bg-gradient-to-bl from-black via-zinc-950 to-zinc-800 w-7/12 h-full">
                    <img src="/img/galleryComponent/gcAnimation.png"  alt="pc barckground"  className ="w-full h-full object-cover"/>
                </div>
            </div>
        </>
    )
}