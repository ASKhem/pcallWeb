import Gallery from "./GalleryCard";

function GalleryComponent({ selectCategory }) {
  function selected (name) {
    console.log(name);
  }
  return (
    <div className="w-full h-[70vh] flex items-center justify-between">
      <div className="w-6/12 h-full p-2">
        <div className ="w-full h-full border-2 border-zinc-400 bg-gradient-to-br from-black via-zinc-950 to-zinc-800 via-zinc-900 rounded-xl shadow-2xl shadow-black">
          
        </div>
      </div>
      <div className="w-7/12 h-full p-2">
        <Gallery selectCategory={selectCategory} />
      </div>
    </div>
  );
}

export default GalleryComponent;