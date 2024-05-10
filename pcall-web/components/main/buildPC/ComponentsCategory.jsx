"use client"
import BuildPcCard from "./BuildPcCard";
import React, { useState } from 'react';
import { useEffect } from 'react';

async function loadComponentsData(category) {
    console.log(category)
    try {
        const res = await fetch("http://localhost:9051/component/list/" + category, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('An error occurred while fetching the data:', error);
        return null;
    }
}

function ComponentsCategory({ category, addComponent }) {
    const [data, setData] = useState(null);
    useEffect(() => {
        loadComponentsData(category).then(setData);
    }, [category]);

    function handleComponent(component) {
        addComponent(component);
    }

    if (data === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-11/12 justify-center items-center grid grid-cols-4 grid-rows-auto gap-y-10">
            {data.map((component) => {
                return (
                    <div key={component.id} className="flex justify-center items-center" onClick={() => handleComponent(component)}>
                        <BuildPcCard data={component} />
                    </div>
                );
            })}
        </div>
    )
}

export default ComponentsCategory;