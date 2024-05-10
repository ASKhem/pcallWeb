export default function ProgressBar({progress}) {
  const progressPercentage = (progress / 12) * 100;

  return (
    <div className="relative w-9/12 h-5 bg-zinc-300 border-2 border-zinc-400 rounded-full shadow-xl shadow-black flex items-center justify-start text-white transition-all duration-300 hover:text-orange-600">
      <div className={`h-full text-sm flex items-center justify-center bg-custom-blue rounded-full w-[${progressPercentage}%]`}>
        {progress !== 0 ? `${progress}/12` : <div className ='w-full flex items-center justify-center'>0/12</div>}
      </div>
    </div>
  )
}