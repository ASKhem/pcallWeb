export default function BuildPcCard({data}){
    console.log(data)
    return <>
        <div className ="relative h-auto w-72 group bg-white text-white flex flex-col shadow-2xl hover:scale-110 transition-all duration-500 hover:shadow-custom-blue backdrop-blur-2xl">
            <img src ={`http://localhost:9051/images/${data.image}.png`} alt="image" className ="w-full h-8/12 inset-0 object-cover border-2 border-gray-300 shadow-xl hover:brightness-110"/>
            <div className ="w-full h-36 text-white bg-custom-blue px-2 pb-10 pt-5">
                <ul>
                    <li>{data.brand} {data.model} {data.details}</li>
                    <li>{data.price} €</li>
                </ul>
            </div>
        </div>
    </>
} 