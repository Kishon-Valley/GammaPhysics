import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface OscillationsGraphsProps {
  data: {
    time: number[];
    angle: number[];
    velocity: number[];
    energy: {
      kinetic: number[];
      potential: number[];
      total: number[];
    };
  };
  height: number;
}

export const OscillationsGraphs = ({ data, height }: OscillationsGraphsProps) => {
  // Check if data is properly initialized
  if (!data?.time?.length || !data?.angle?.length || !data?.velocity?.length || !data?.energy?.kinetic?.length) {
    return (
      <div className="space-y-6">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <p className="text-center text-gray-500">Waiting for data...</p>
        </div>
      </div>
    );
  }

  const safeNumber = (value: any) => {
    const num = Number(value);
    return isNaN(num) ? 0 : Number(num.toFixed(2));
  };

  const chartData = data.time.map((t, i) => ({
    time: safeNumber(t),
    angle: safeNumber(data.angle[i]),
    velocity: safeNumber(data.velocity[i]),
    kineticEnergy: safeNumber(data.energy?.kinetic?.[i]),
    potentialEnergy: safeNumber(data.energy?.potential?.[i]),
    totalEnergy: safeNumber(data.energy?.total?.[i])
  })).filter(d => d.time !== undefined);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-2 bg-white rounded border border-gray-200 shadow-sm">
          <p className="text-sm font-medium">Time: {label}s</p>
          {payload.map((entry: any) => (
            <p key={entry.name} style={{ color: entry.color }} className="text-sm">
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Angle Graph */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="mb-4 text-lg font-semibold">Angular Displacement vs Time</h3>
        <ResponsiveContainer width="100%" height={height / 3}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="angleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff4444" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ff4444" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis 
              dataKey="time" 
              label={{ value: 'Time (s)', position: 'bottom' }}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              label={{ value: 'Angle (°)', angle: -90, position: 'insideLeft' }}
              tick={{ fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone"
              dataKey="angle"
              name="Angle"
              stroke="#ff4444"
              fill="url(#angleGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Velocity Graph */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="mb-4 text-lg font-semibold">Angular Velocity vs Time</h3>
        <ResponsiveContainer width="100%" height={height / 3}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="velocityGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4444ff" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#4444ff" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis 
              dataKey="time" 
              label={{ value: 'Time (s)', position: 'bottom' }}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              label={{ value: 'Velocity (m/s)', angle: -90, position: 'insideLeft' }}
              tick={{ fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone"
              dataKey="velocity"
              name="Velocity"
              stroke="#4444ff"
              fill="url(#velocityGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Energy Graph */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="mb-4 text-lg font-semibold">Energy vs Time</h3>
        <ResponsiveContainer width="100%" height={height / 3}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="kineticGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="potentialGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffa500" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ffa500" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis 
              dataKey="time" 
              label={{ value: 'Time (s)', position: 'bottom' }}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              label={{ value: 'Energy (J)', angle: -90, position: 'insideLeft' }}
              tick={{ fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area 
              type="monotone"
              dataKey="kineticEnergy"
              name="Kinetic Energy"
              stroke="#22c55e"
              fill="url(#kineticGradient)"
              strokeWidth={2}
              stackId="1"
            />
            <Area 
              type="monotone"
              dataKey="potentialEnergy"
              name="Potential Energy"
              stroke="#ffa500"
              fill="url(#potentialGradient)"
              strokeWidth={2}
              stackId="1"
            />
            <Area 
              type="monotone"
              dataKey="totalEnergy"
              name="Total Energy"
              stroke="#666666"
              fill="none"
              strokeWidth={2}
              strokeDasharray="5 5"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

