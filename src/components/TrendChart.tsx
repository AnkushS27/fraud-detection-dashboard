import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FraudTrend } from '@/types/fraud';

export default function TrendChart({ trends }: { trends: FraudTrend[] }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>30-Day Fraud Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" label={{ value: 'Date', position: 'insideBottom', offset: -5 }} />
            <YAxis label={{ value: 'Fraud Cases', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="fraud_cases_detected" 
              stroke="rgb(255, 99, 132)" 
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}