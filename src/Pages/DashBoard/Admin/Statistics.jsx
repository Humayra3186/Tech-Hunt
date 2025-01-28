import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import useUsers from '../../../Hooks/useUsers';
import useProducts from '../../../Hooks/useProducts';



 







const Statistics = () => {

    const [users] = useUsers()
    const [products] = useProducts()
    
    

    const data = [
        { name: "All Users", value: users?.length },
        { name: "All Products", value: products?.length },
        { name: "All Reviews", value: 10 },
       
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
                    <Legend></Legend>
                </PieChart>
                
            </ResponsiveContainer>

            
            
            </div>
    );
};

export default Statistics;