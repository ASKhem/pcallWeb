"use client"
import React, { useState } from 'react';
import ComponentsCategory from './ComponentsCategory';

function Gallery({selectCategory}) {
    const [selectedItem, setSelectedItem] = useState("Case");

    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
    };

    const items = [
        { name: "Case", altText: "Imagen de la caja", imgSrc: "/img/galleryCards/caseOp.png", category: "Case"},
        { name: "Motherboard", altText: "Imagen de la placa madre", imgSrc: "/img/galleryCards/motherboardOp.png", category: "Motherboard"},
        { name: "Processor", altText: "Imagen del procesador", imgSrc: "/img/galleryCards/processorOp.png", category: "CPU"},
        { name: "Graphic Card", altText: "Imagen de la tarjeta gráfica", imgSrc: "/img/galleryCards/graphicCardOp.png", category: "GPU"},
        { name: "RAM", altText: "Imagen de la memoria RAM", imgSrc: "/img/galleryCards/ramOp.png", category: "RAM"},
        { name: "NVMe memory", altText: "Imagen de la memoria NVMe", imgSrc: "/img/galleryCards/nvmeOp.png", category: "NVMe"},
        { name: "Hard Drive", altText: "Imagen del disco duro", imgSrc: "/img/galleryCards/hardDriveOp.png", category: "Hard_Drive"},
        { name: "CPU Cooling", altText: "Imagen de la refrigeración de la CPU", imgSrc: "/img/galleryCards/cpuCoolingOp.png", category: "CPUCooling"},
        { name: "Power Supply", altText: "Imagen de la fuente de alimentación", imgSrc: "/img/galleryCards/powerSupplyOp.png", category: "Power_Supply"},
        { name: "Cooling Fan", altText: "Imagen del ventilador de refrigeración", imgSrc: "/img/galleryCards/coolingFanOp.png", category: "Cooling_Fan"},
        { name: "Network Card", altText: "Imagen de la tarjeta de red", imgSrc: "/img/galleryCards/networkCardOp.png", category: "Network_Card"},
        { name: "Sound Card", altText: "Imagen de la tarjeta de sonido" , imgSrc: "/img/galleryCards/soundCardOp.png", category: "Sound_Card"},
    ];

    return (
        <ul className="w-full h-full grid grid-cols-3 grid-rows-4 gap-2">
            {items.map((item, index) => (
                <li key={index}>
                    <GalleryCard
                        name={item.name}
                        altText={item.altText}
                        text="texto de muestra"
                        imgSrc={item.imgSrc}
                        selected={selectedItem === item.name}
                        onItemClick={handleItemClick}
                        changeCategory={selectCategory}
                        category={item.category}
                    />
                </li>
            ))}
        </ul>
    );
}

export default Gallery;

function GalleryCard({ name, imgSrc, altText, text, selected, onItemClick, changeCategory, category}) {
    const handleItemClick = () => {
        onItemClick(name);
    };

    const handleChangeCategory = () => {
        changeCategory(category);
    };

    return (
        <div
            className={`relative h-full w-full group overflow-hidden shadow-lg shadow-black  p-3r drop-shadow-sm rounded-xl border-2  border-zinc-400 ${selected ? "border-orange-600" : "border-white"}`}
            onClick={() => {
                handleItemClick();
                handleChangeCategory();
            }}
        >
            <img src={imgSrc} alt={altText} className="absolute w-full h-full inset-0 object-cover text-sm" />
            <div
                className={`absolute inset-0 w-full h-full  bg-black bg-opacity-0 transition duration-500 backdrop-filter ${selected ? "bg-opacity-20 backdrop-blur" : " "}`} >
            </div>
            <div className="absolute inset-x-5 text-white">
                <h2 className="text-3xl font-semibold mb-2">{name}</h2>
                <p className={`text-lg ${selected ? "block" : "hidden"}`}>{text}</p>
            </div>
        </div>
    );
}
