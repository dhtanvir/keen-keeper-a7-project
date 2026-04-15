"use client";
import { KeenAppsContext } from "@/context/keen.context";
import { useContext } from "react";

const TimelinePage = () => {

     const { timeline } = useContext(KeenAppsContext);

console.log(timeline, " timeline text");

    return (
        <div>
            <h1>Timeline pages {timeline.length}</h1>
            <ul>
                {timeline.map((item, index) => (
                    <li key={index}>
                        {item.type}: {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TimelinePage;