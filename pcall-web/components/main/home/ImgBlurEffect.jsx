export default function ImgBlurEffect({imgSrc, altText, companyName, mainText, text}) {
    return (
        <>
            <div class="relative h-56 w-64 group bg-gray-200 overflow-hidden shadow-xl p-3">
                <img src={imgSrc} alt={altText} class="absolute w-full h-full inset-0 object-cover" />
                    <div
                        class="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur">
                    </div>
                    <div class="absolute inset-x-5 text-white">
                        <h2 class="text-4xl font-semibold mb-2">{companyName}</h2>
                        <p class="text-sm font-medium uppercase tracking-wider mb-6">{mainText}</p>
                        <p class="text-lg hidden group-hover:block">{text}</p>
                    </div>
            </div>
        </>
    )

}