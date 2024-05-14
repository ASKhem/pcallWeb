export default function ProgressBar({ progress }) {

  return (
    <div className="relative w-6 h-full bg-zinc-300 border-2 text-sm gap-[2px] border-zinc-400 shadow-xl shadow-zinc-600 flex flex-col items-center justify-end text-white transition-all duration-300 hover:text-orange-600 rounded-xl">
      {Array(progress).fill().map((_, i) => (
        progress == 1 ? 
          <div key={i} className= "w-5 h-[8.33%] bg-custom-blue  rounded-b-xl flex items-center justify-center"></div>
          :
          <div key={i} className={`w-5 h-[8.33%] bg-custom-blue flex items-center justify-center ${i == 0 ? 'rounded-t-xl' : i == (progress - 1) ? 'rounded-b-xl' : " "  }`}></div>
      ))}
    </div>
  );
}