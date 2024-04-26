import Link from 'next/link';
import Image from 'next/image'

export default function Dropdown(props) {
    const { item, isOpen, handleDropdown } = props;
    const menuItems = item?.children ? item.children : [];
    
    return (
        <>
            <div className="relative">
                <button
                    className="hover:text-orange-500"
                    onClick={handleDropdown}
                >{item.title}</button>
            </div>
            <div
                className={`absolute w-full top-16 left-0 h-0 z-30 flex flex-col items-center justify-center gap-2 bg-zinc-200 overflow-hidden transition-height duration-300 ease-in-out ${isOpen ? 'h-64' : ''}`}
                onMouseLeave={handleDropdown}
            >
                <div className='flex items-center justify-center gap-10'>
                    {
                        menuItems.map(item =>
                            <Link
                                key={item.route}
                                className= " text-black hover:text-custom-blue hover:bg-white border p-2  w-44 h-44 flex flex-col items-center justify-center rounded-xl transition-all duration-200"
                                href={item?.route || ''}
                            >
                                <div className="text-lg">{item.title}</div>
                                {item.image && <Image className="rounded-xl mb-3" src={item.image} alt={item.title} width={130} height={130} />}
                            </Link>
                        )
                    }
                </div>
            </div>
            {
                isOpen ? <div className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40" onClick={handleDropdown}></div> : <></>
            }
        </>
    )
}