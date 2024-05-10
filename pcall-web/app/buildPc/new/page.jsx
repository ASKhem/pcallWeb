"use client"
import { FaSquare } from "react-icons/fa6";
import GalleryComponent from "../../../components/main/buildPC/GalleryComponent";
import MusicPlayer from "../../../components/main/buildPC/MusicPlayer";
import ComponentsCategory from "../../../components/main/buildPC/ComponentsCategory"
import { useState } from "react";
import ProgressBar from "../../../components/main/buildPC/ProgressBar"
import { data } from "autoprefixer";

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
    return total;
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
        "CPU": null,
        "GPU": null,
        "RAM": null,
        "Motherboard": null,
        "Hard_Drive": null,
        "NVMe": null,
        "Power_Supply": null,
        "Case": null,
        "CPUCooling": null,
        "Cooling_Fan": null,
        "Network_Card": null,
        "Sound_Card": null,
        "Total": 0
    });

    let total = totalPrice(computerForm);
    let progress = progressBar(computerForm);

    let component = findFormComponentByCategory(category, computerForm);

    console.log(computerForm);

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

                    <div className="flex w-full h-full pb-5">
                        <div className="flex w-5/12">
                            <FaSquare /><h1 className="text-4xl text-center font-bold">Build your new PC</h1>
                        </div>
                    </div>

                    <div className="flex h- w-full items-center justify-center">
                        <div className="flex w-5/12 items-center justify-center ml-5">
                            <MusicPlayer />
                        </div>
                        <div className="w-7/12 h-full flex items-center justify-end flex-col">
                            <ProgressBar progress={progress} />
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center justify center gap-3">
                        <GalleryComponent selectCategory={handleCategory} category={setCategory} component={component} />
                        <div className="w-full flex items-center justify-end px-5">
                            <span className="border-2 border-zinc-400 shadow-md text-xl rounded-xl bg-custom-blue w-2/12 font-bold text-zinc-200 flex items-center justify-center p-2 shadow-zinc-600 hover:border-orange-500">{total}€</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-11/12 min-h-96 flex items-center justify-center border-t-2 border-custom-blue py-14">
                <ComponentsCategory category={category} addComponent={handleComponent}/>
            </div>

        </div>
    )
}

export default BuildNewPcPage;