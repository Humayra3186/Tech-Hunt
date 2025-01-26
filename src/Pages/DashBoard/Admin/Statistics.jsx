import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import useUsers from '../../../Hooks/useUsers';









const Statistics = () => {

    const [users] = useUsers()
    console.log(users)

    const data = [
        { name: "Group A", value: users?.length },
        { name: "Group B", value: 30 },
        { name: "Group C", value: 10 },
       
    ];
    const COLORS = ['#69a533', '#FDBB2F', '#007CC3'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius,  index ,value }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {value}
            </text>
        );
    };
    return (
        <div className='w-[100%] h-[600px] bg-base-200'>
            <ResponsiveContainer width="100%" height="60%">
                <PieChart >
                    <Pie
                        data={data}
                        cx="50%"
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

            <div className='ml-6'>
                <div>
                    <p className='flex items-center font-semibold'>Total Products : <span className='text-[#0088FE]  text-[1.4rem] font-bold px-2'>{users?.length}</span></p>
                    <p className='flex items-center font-semibold'>Total Reviews : <span className='text-[#FDBB2F]  text-[1.4rem] font-bold px-2'>{users?.length}</span></p>
                    <p className='flex items-center font-semibold'>Total Users : <span className='text-[#69a533]  text-[1.4rem] font-bold px-2'>{users?.length}</span></p>
                </div>
            </div>
            
            </div>
    );
};

export default Statistics;