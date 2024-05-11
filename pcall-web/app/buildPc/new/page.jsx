"use client"
import { FaSquare } from "react-icons/fa6";
import GalleryComponent from "../../../components/main/buildPC/GalleryComponent";
import MusicPlayer from "../../../components/main/buildPC/MusicPlayer";
import ComponentsCategory from "../../../components/main/buildPC/ComponentsCategory"
import { useState } from "react";
import ProgressBar from "../../../components/main/buildPC/ProgressBar"

function findFormComponentByCategory(category, computerForm) {
    for (const key in computerForm) {
        if (key === category) {
            return computerForm[key];
        }
    }
    return null;
}

function totalPrice(computerForm) {
    let total = 0;
    for (const key in computerForm) {
        if (computerForm[key] && computerForm[key].price) {
            total += computerForm[key].price;
        }
    }
    return total.toFixed(2);
}

function progressBar(computerForm) {
    let total = 0;
    for (const key in computerForm) {
        if (computerForm[key]) {
            total += 1;
        }
    }
    return total;

}

function BuildNewPcPage() {
    const [category, setCategory] = useState("Case")
    const [computerForm, setComputerForm] = useState({
        "Case": null,
        "Motherboard": null,
        "CPU": null,
        "GPU": null,
        "RAM": null,
        "NVMe": null,
        "Hard_Drive": null,
        "CPUCooling": null,
        "Power_Supply": null,
        "Cooling_Fan": null,
        "Network_Card": null,
        "Sound_Card": null,
        "Total": 0
    });

    let total = totalPrice(computerForm);
    let progress = progressBar(computerForm);

    let component = findFormComponentByCategory(category, computerForm);


    function handleCategory(newCategory) {
        setCategory(newCategory);
    }

    function handleComponent(component) {
        setComputerForm({
            ...computerForm,
            [category]: component
        });
    }

    return (
        <div className="w-full justify-center items-center flex flex-col gap-10">
            <div className="w-11/12 min-h-screen pt-10">
                <div className="h-40 w-full flex flex-col items-center  justify-left text-5xl gap-5">

                    <div className="flex w-full h-full pb-3">
                        <div className="flex w-5/12">
                            <FaSquare /><h1 className="text-4xl text-center font-bold">Build your new PC</h1>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center justify center gap-1">
                        <GalleryComponent selectCategory={handleCategory} component={component} pcForm={computerForm} progress={progress} />
                        <div className="w-full flex items-center justify-start p-2 gap-5">
                            <div className="w-[45%] h-full  flex items-center justify-center">
                                <MusicPlayer />
                            </div>
                            <div className="w-[52%] flex items-center justify-center gap-1 pr-4">
                                <span className="w-1/3 h-12">

                                </span>
                                <span className="w-1/3 h-12 text-xl font-bold flex items-center justify-center p-2 border-b-2 border-zinc-700 text-black">
                                    {total}€
                                </span>
                                <button className="w-1/3 h-12 border-2 border-zinc-400 shadow-md text-xl rounded-xl bg-custom-blue font-bold text-zinc-200 flex items-center justify-center p-2 shadow-zinc-600 active:scale-95 transition-all duration-300 hover:bg-zinc-200 hover:text-custom-blue">
                                    Build
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-11/12 min-h-96 flex items-center justify-center border-t-2 border-custom-blue py-14">
                <ComponentsCategory category={category} addComponent={handleComponent} />
            </div>

        </div>
    )
}

export default BuildNewPcPage;