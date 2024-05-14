import Gallery from "./GalleryCard";
import ProgressBar from './ProgressBar';

function componentCategoryConversion(component) {
  const componentMap = {
    "Case": "Case",
    "Motherboard": "Motherboard",
    "CPU": "Processor",
    "GPU": "Graphic Card",
    "RAM": "RAM",
    "NVMe": "NVMe Memory",
    "Hard_Drive": "Hard Drive",
    "CPUCooling": "CPU Cooling",
    "Power_Supply": "Power Supply",
    "Cooling_Fan": "Cooling Fan",
    "Network_Card": "Network Card",
    "Sound_Card": "Sound Card"
  };

  return component ? (componentMap[component.category] || "") : "";
}

function GalleryComponent({ selectCategory, component, pcForm, progress }) {

  let categoryName = componentCategoryConversion(component);
  return (
    <div className="w-full h-[70vh] flex items-center justify-between">
      <div className="w-6/12 h-full p-2">
        <div className="relative text-white w-full h-full border-2 border-zinc-400 bg-gradient-to-br from-black via-zinc-950 to-zinc-800 rounded-xl shadow-2xl shadow-black">
          <img src="/img/galleryComponent/gcAnimation.gif" alt="Imagen de la construcción de un PC" className="w-full h-full object-cover absolute rounded-xl" />
          {component && (
            <div className="text-lg flex flex-col items-center justify-between w-full h-full rounded-xl">
              <div className="relative flex w-full h-2/3 items-center justify-between p-10 backdrop-filter bg-opacity-20 rounded-t-xl">
                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-xl">
                  <img src={`http://localhost:9051/images/components/${component.image}.png`} alt={component.model} className="w-64 h-64 text-sm rounded-xl ransition duration-300 ease-in-out hover:scale-110" />
                </div>
                <h2 className="flex- items-center justify-center text-center text-5xl w-1/2">{categoryName}</h2>
              </div>
              <div className="relative bg-black h-1/3 w-full p-10 backdrop-filter bg-opacity-20 backdrop-blur rounded-b-xl">
                <p>{component.brand} {component.model}</p>
                <p>{component.details}</p>
                <p>{component.price}€</p>
                <p>{component.releaseYear}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-7/12 h-full flex p-2">
        <div className="w-[95%] h-full">
          <Gallery selectCategory={selectCategory} componentsInfo={pcForm} />
        </div>
        <div className="w-[5%] h-11/12 flex items-center justify-center">
          <ProgressBar progress={progress} />
        </div>
      </div>
    </div>
  );
}

export default GalleryComponent;