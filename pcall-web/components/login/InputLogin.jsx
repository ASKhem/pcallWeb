export default function InputLogin({name, type, errorMessage}) {

    return (
        <div className="w-full flex items-center gap-10 py-2 px-5">
            <label className="h-8 flex items-end justify-center text-orange-500 text-lg font-semibold">{name}</label>
            <input type={type} className="w-2/4 h-8  border-b-2 border-gray-500 px-2" maxLength={25}/>
            <p className="h-8 flex items-center justify-center text-red-500 text-sm font-semibold">{errorMessage}</p>
        </div>
    )
}