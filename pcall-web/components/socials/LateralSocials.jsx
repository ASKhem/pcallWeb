"use client"
import { useState } from 'react';
import Image from 'next/image';

function LateralSocials() {
    const [isHidden, setIsHidden] = useState(true);
    const socials = ["facebook", "instagram", "whatsapp", "youtube", "x", "phone"];

    const openMenu = () => {
        setIsHidden(false);
    };

    const closeMenu = () => {
        setIsHidden(true);
    };

    return (
        <aside
            className={`flex justify-start items-center w-24 h-96 cursor-pointer fixed border-l-0 z-10 left-0 top-1/4 transition-transform duration-500 ease-in-out ${isHidden ? 'translate-x-[-68%]' : ''}`}
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
        >
            <div className="flex justify-between py-5 px-1 items-center flex-col rounded-r-lg bg-custom-blue border border-gray-700 h-full gap-1 w-16">
                {socials.map(social => (
                    <a key={social} href="#" className="flex items-center justify-center w-full h-12 cursor-pointer">
                        <Image src={`/img/lateral-socials/${social}.png`} alt={social} width={32} height={32} className="filter brightness-120" />
                    </a>
                ))}
            </div>
            <div id="lateral-socials2" className={`h-56 w-6 flex justify-center items-center flex-col bg-custom-blue border border-gray-800 border-l-0 rounded-r-lg ${isHidden ? '' : 'hidden'}`}>
                <a className="text-white flex justify-center items-center w-full h-full">
                    S<br />O<br />C<br />I<br />A<br />L<br />S
                </a>
            </div>
        </aside>
    )
}

export default LateralSocials;