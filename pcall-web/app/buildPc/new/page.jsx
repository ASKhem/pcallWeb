"use client"
import { FaSquare } from "react-icons/fa6";
import GalleryComponent from "../../../components/main/buildPC/GalleryComponent";
import MusicPlayer from "../../../components/main/buildPC/MusicPlayer";
import ComponentsCategory from "../../../components/main/buildPC/ComponentsCategory"
import { useState } from "react";
import ProgressBar from "../../../components/main/buildPC/ProgressBar"

function BuildNewPcPage() {
    const [category, setCategory] = useState("Case")

    function handleCategory(newCategory) {
        setCategory(newCategory);
    }

    return (
        <div className="w-full justify-center items-center flex flex-col gap-10">
            <div className="w-11/12 min-h-screen pt-10">
                <div className="h-30 w-full flex flex-col items-center  justify-left text-5xl gap-5">

                    <div className="flex w-full h-full pb-5">
                        <div className="flex w-5/12">
                            <FaSquare /><h1 className="text-4xl text-center font-bold">Build your new PC</h1>
                        </div>
                    </div>

                    <div className="flex w-full items-center justify-center">
                        <div className="flex w-5/12 items-center justify-center ml-5">
                            <MusicPlayer />
                        </div>
                        <div className="w-7/12 flex items-center justify-center flex-col">
                            <ProgressBar progress={4} />
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center justify center gap-3">
                        <GalleryComponent selectCategory={handleCategory} />
                        <div className="w-full flex items-center justify-end px-5">
                            <span className="border-2 border-zinc-400 shadow-md text-xl rounded-xl bg-custom-blue w-2/12 font-bold text-zinc-200 flex items-center justify-center p-2 shadow-zinc-600 hover:border-orange-500">TOTAL: 1900€</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-11/12 min-h-96 flex items-center justify-center border-t-2 border-custom-blue py-14">
                <ComponentsCategory category={category} />
            </div>

        </div>
    )
}

export default BuildNewPcPage;