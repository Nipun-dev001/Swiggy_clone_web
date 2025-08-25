import React, { useState, useEffect } from "react";
import Cartt from './Cartt';
import { IoFilterSharp } from "react-icons/io5";
import { PiCaretDownBold } from "react-icons/pi";

export default function OnlineActives() {
    const [data, setData] = useState([]);

    const apiattached = async () => {
        try {
            const response = await fetch("/dp.json");
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const allData = await response.json();

            if (Array.isArray(allData)) {
                setData(allData);
            } else if (Array.isArray(allData.restaurants)) {
                setData(allData.restaurants);
            } else {
                throw new Error("JSON data format is not valid array");
            }
        } catch (err) {
            console.error("Error fetching data:", err);
            setError(err.message);
        }
    };

    useEffect(() => {
        apiattached();
    }, []);

    return (
        <div className='max-w-[1500px] mx-auto '>
            <div className='flex my-5 items-center justify-between'>
                <div className='text-[25px] font-semibold'>
                    Restaurants with online food delivery </div>
            </div>
<div>
    <div className="max-w-[1500px] mx-auto flex my-4">
        <div className="p-3 rounded-md shadow">Filter <IoFilterSharp className="inline" /></div>
        <div className="p-3 rounded-md shadow">Short By <PiCaretDownBold className="inline"/></div>
        <div className="p-3 rounded-md shadow">Fast Delivery</div>
        <div className="p-3 rounded-md shadow">New on Swiggy</div>
        <div className="p-3 rounded-md shadow">Rating 4.0+</div>
        <div className="p-3 rounded-md shadow">Pure Veg.</div>
        <div className="p-3 rounded-md shadow">Offers</div>
        <div className="p-3 rounded-md shadow">Rs.300-Rs.600</div>
        <div className="p-3 rounded-md shadow">Less then Rs.300 </div>
        

    </div>
</div>

            <div className="grid grid-cols-4 gap-3">
                {
                    data.map(
                        (d, i) => {
                            return <Cartt key={d.id || i} {...d} />
                        }
                    )
                }
            </div>
        </div>
    );

}
