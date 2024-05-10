export default function ProgressBar({progress}){
    return (
        <div className ="relative w-9/12 h-4 bg-white rounded-full">
            <div className ={`w-${progress}/12 h-full text-sm flex items-center justify-center bg-custom-blue rounded-full text-white`}>{progress}/12</div>
        </div>
    )
}