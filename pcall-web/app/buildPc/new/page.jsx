"use client"
import { useState, useEffect } from 'react';
import BuildPcCard from "../../../components/main/buildPC/BuildPcCard"

async function loadComponentsData() {
    try {
        const res = await fetch("http://localhost:9051/component/list", {
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

function BuildNewPcPage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        loadComponentsData().then(setData);
    }, []);

    if (data === null) {
        return <div>Loading...</div>;
    }

    console.log(data);

    return (
        <div className = "grid grid-cols-4 grid-rows-auto gap-y-10">
            {data.map((component) => {
                return (
                    <div key={component.id}>
                        <BuildPcCard data ={component}/>
                    </div>
                );
            })}
        </div>
    )
}

export default BuildNewPcPage;