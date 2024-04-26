import Image from 'next/image'
import NavMenu from './NavMenu';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { FaRegQuestionCircle } from 'react-icons/fa';

function Header() {
    return (
        <>
            <header className="fixed t-0 w-full bg-custom-blue z-30 flex items-center justify-center">
                <div className='w-10/12  h-16 py-2 flex items-center justify-between'>
                    <div className="flex items-center justify-around">
                        <div className="h-12 flex items-center m-5 mr-20">
                            <Link href="/"><Image src="/img/header/logo.png" alt="logo" width={90} height={40} priority/></Link>
                        </div>
                        <NavMenu />
                    </div>
                    <ul className="w-40 md:h-14 h-10 flex items-center justify-around">
                        <li>
                            <div className=" bg-black flex justify-center items-center">
                                <div className=" bg-black flex justify-center items-center">
                                    <div className="relative inline-flex  group">
                                        <div
                                            className="absolute transitiona-all duration-1000 opacity-60 inset-1 rounded-xl bg-gradient-to-r from-[#ffa743] via-[#ff9844] to-[#ff6600]  blur-sm group-hover:opacity-100 group-hover:inset-0 group-hover:duration-200 animate-tilt">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <FaShoppingCart className="text-white hover:text-orange-700 transition-all duration-150" size={25} />
                        </li>
                        <li>
                            <FaRegQuestionCircle className="text-white hover:text-orange-700 transition-all duration-150" size={25} />
                        </li>
                        <li>
                            <Image src="/img/header/userNav/user.png" alt="user" width={50} height={50} className="border rounded-full border-white hover:border-orange-700 transition-all duration-150" />
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;