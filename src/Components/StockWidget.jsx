import { ResponsiveContainer, Tooltip, Area, AreaChart } from "recharts";
import { data } from "../Index";

const StockTrendCard = () => {


    return (
        <div className="p-5 bg-[#EEEEEE] rounded-xl shadow-sm border border-[#E7E6E9] w-full min-w-[200px]">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-sm font-light text-gray-600">Weekly Performance</h2>
                <p className="text-xs font-semibold text-emerald-600">+12.4%</p>
            </div>

            <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="20%" stopColor="#2ecc71" stopOpacity={0.5} />
                                <stop offset="100%" stopColor="#2ecc71" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#2ecc71"
                            fill="url(#colorProfit)"
                            strokeWidth={2}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className="flex justify-between text-xs text-gray-500 mt-2">
                {data.map((d) => (
                    <span key={d.day}>{d.day}</span>
                ))}
            </div>
        </div>
    );
};

export default StockTrendCard;
