"use client"
import BuildPcCard from "./BuildPcCard";
import React, { useState } from 'react';
import { useEffect } from 'react';

async function loadComponentsData(category) {

    try {
        const res = await fetch("http://localhost:9090/component/list/" + category, {
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
        return (
            <div className="flex items-center justify-center gap-5 text-custom-blue">
                <div class="border-gray-300 h-16 w-16 animate-spin rounded-full border-8 border-t-custom-blue" />
                <p className ="text-lg">Loading data ...</p>
            </div>
        )

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