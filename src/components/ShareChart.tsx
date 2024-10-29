"use client"

import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { Card, CardContent} from "@/components/ui/card"

interface ShareChartProps {
    totalShare: number
    yourShare: number
}

export function ShareChart({ totalShare, yourShare }: ShareChartProps) {
    const data = [
        { name: 'Your Share', value: yourShare },
        { name: 'Others', value: totalShare - yourShare },
    ]

    const COLORS = ['#506AE9', '#9FA4AE']

    return (
        <Card className="w-full max-w-md border-none bg-transparent">
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#C0C5CC"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}