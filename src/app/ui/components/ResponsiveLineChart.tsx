"use client";

import { useMemo, useState } from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChartSkeleton from "./ChartSkeleton";
import ChartFilters from "./ChartFilters";
import { plusjakartasans } from "@/app/_lib/font";
import { ArrowBigDown, ArrowBigUp, IndianRupee } from "lucide-react";

type NavItem = {
  date: string; // format: "28-05-2008"
  nav: string;
};

type FilterType = "1M" | "6M" | "1Y" | "5Y" | "ALL";

export default function ResponsiveLineChart({
        data,
        loading = false,
        currNav
    }: {
        data: NavItem[];
        loading?: boolean;
        currNav: any
    }) {
    const [filter, setFilter] = useState<FilterType>("ALL");

    const filterLabels: Record<FilterType, string> = {
        "1M": "Past Month",
        "6M": "Past 6 Months",
        "1Y": "Past Year",
        "5Y": "Past 5 Years",
        "ALL": "All Time",
    };
      
    const changeText = filterLabels[filter];

    /**
        * Format and sort data
    */
    const formattedData = useMemo(() => {
        return data
        .map((item) => {
            const [day, month, year] = item.date.split("-");
            const dateObj = new Date(`${year}-${month}-${day}`);

            return {
            date: dateObj.getTime(), // use timestamp (safer)
            nav: Number(item.nav),
            };
        })
        .sort((a, b) => a.date - b.date);
    }, [data]);

  /**
   * Apply Filter
   */
    const filteredData = useMemo(() => {
        if (!formattedData.length) return [];

        if (filter === "ALL") return formattedData;

        const latestDate = new Date(
        formattedData[formattedData.length - 1].date
        );

        const monthsMap: Record<FilterType, number> = {
        "1M": 1,
        "6M": 6,
        "1Y": 12,
        "5Y": 60,
        "ALL": 0,
        };

        const pastDate = new Date(latestDate);
        pastDate.setMonth(
        pastDate.getMonth() - monthsMap[filter]
        );

        return formattedData.filter(
        (d) => d.date >= pastDate.getTime()
        );
    }, [formattedData, filter]);

    /**
   * Calculate % Change
   */
    const changePercent = useMemo(() => {
        if (filteredData.length < 2) return null;

        const first = filteredData[0].nav;
        const last = filteredData[filteredData.length - 1].nav;

        return ((last - first) / first) * 100;
    }, [filteredData]);

    if (loading) return <ChartSkeleton />;

    return (
        <div className="w-full">
            <div className={`w-full grid grid-cols-2 gap-4`}>
                <div className={`w-full rounded-2xl bg-white shadow-xl/5 py-2.5 px-2.5`}>
                    <span className={`${plusjakartasans.className} text-[12px] text-black font-normal block mb-1.5`}>Current Nav:</span>
                    <span className={`${plusjakartasans.className} text-xl text-black font-bold flex items-center justify-start`}><IndianRupee className={`w-5 text-black`}/> {parseFloat(currNav).toFixed(2)}</span>
                </div>
                <div className={`w-full rounded-2xl bg-white shadow-xl/5 py-2.5 px-2.5`}>
                    <span className={`${plusjakartasans.className} text-[12px] text-black font-normal block mb-1.5`}>{changeText}
                    </span>
                    {changePercent !== null && (
                    <span className={`${plusjakartasans.className} text-xl ${ changePercent >= 0 ? "text-[#36c76c]" : "text-[#ff6692]" } font-bold flex items-center justify-start`}>
                        {changePercent >= 0 ? <ArrowBigUp className={`w-5 text-[#36c76c] mr-1.5`}/>
                            : <ArrowBigDown className={`w-5 text-[#ff6692] mr-1.5`}/>}
                        {changePercent.toFixed(2)}%
                    </span>
                    )}
                </div>
            </div>
            <div className="w-full mt-4 mb-5">
                <ChartFilters active={filter} onChange={setFilter} />
            </div>

            {/* Chart */}
            <div className="w-full h-87.5">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={filteredData}>
                        <defs>
                            <linearGradient
                                id="navGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                offset="5%"
                                stopColor="#2563eb"
                                stopOpacity={0.3}
                                />
                                <stop
                                offset="95%"
                                stopColor="#2563eb"
                                stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>

                        <XAxis
                            dataKey="date"
                            tickFormatter={(value) =>
                                new Date(value as number).toLocaleDateString(
                                    "en-IN",
                                    {
                                        month: "2-digit",
                                        year: "2-digit",
                                    }
                                )
                            }
                        />

                        <YAxis hide />

                        <Tooltip
                            labelFormatter={(label) =>
                            new Date(label as number).toLocaleDateString(
                            "en-IN",
                            {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                            }
                            )
                        }
                        formatter={(value) =>
                            typeof value === "number"
                            ? `₹${value.toFixed(2)}`
                            : ""
                        }
                        />

                        <Area
                            type="monotone"
                            dataKey="nav"
                            stroke="#2563eb"
                            strokeWidth={2}
                            fill="url(#navGradient)"
                            dot={false}
                            isAnimationActive={true}
                            animationDuration={500}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}