import { FraudulentApp } from '@/types/fraud';

export default function AppTable({ apps }: { apps: FraudulentApp[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left">App Name</th>
            <th className="px-4 py-2 text-left">Developer</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Risk Level</th>
            <th className="px-4 py-2 text-left">Reported On</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {apps.map((app) => (
            <tr key={app.app_name} className="border-t">
              <td className="px-4 py-2">{app.app_name}</td>
              <td className="px-4 py-2">{app.developer}</td>
              <td className="px-4 py-2">{app.category}</td>
              <td
                className={`px-4 py-2 ${
                  app.risk_level === 'High' ? 'text-red-500' : app.risk_level === 'Medium' ? 'text-yellow-500' : 'text-green-500'
                }`}
              >
                {app.risk_level}
              </td>
              <td className="px-4 py-2">{app.reported_on}</td>
              <td className="px-4 py-2">
                <button className="mr-2 rounded bg-gray-500 px-2 py-1 text-white hover:bg-gray-600">Report</button>
                <button className="mr-2 rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600">Block</button>
                <button className="rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-600">Investigate</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}