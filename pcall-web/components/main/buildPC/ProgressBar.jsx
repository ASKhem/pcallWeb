export default function ProgressBar({ progress }) {
  const progressPercentage = (progress / 12) * 100;

  return (
    <div className="relative w-6 h-full bg-zinc-300 border-2 border-zinc-400 rounded-sm shadow-xl shadow-zinc-600 flex items-end justify-center text-white transition-all duration-300 hover:text-orange-600">
      <div className="w-full text-sm flex items-center justify-center bg-custom-blue rounded-sm" style={{ height: `${progressPercentage}%` }}>
        
      </div>
    </div>
  );
}