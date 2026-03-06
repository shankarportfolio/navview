"use client";

import { plusjakartasans } from "@/app/_lib/font";

type FilterType = "1M" | "6M" | "1Y" | "5Y"| "ALL";

type Props = {
    active: FilterType;
    onChange: (filter: FilterType) => void;
};

const filters: FilterType[] = ["1M", "6M", "1Y", "5Y", "ALL"];

export default function ChartFilters({ active, onChange }: Props) {
    return (
        <div className="w-full bg-[#eff4fa] py-2 px-2.5 rounded-2xl grid grid-cols-5 gap-1">
        {
            filters.map((filter) => (
                <button key={filter} onClick={() => onChange(filter)} className={`${plusjakartasans.className} w-full px-3 py-1.5 text-sm rounded-md transition ${ active === filter ? "bg-(--bggrad) text-white" : "bg-transparent text-black" }`}>
                {filter}
                </button>
            ))
        }
        </div>
    );
}