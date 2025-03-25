import { FraudulentUrl } from '@/types/fraud';

export default function UrlTable({ urls }: { urls: FraudulentUrl[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left">URL</th>
            <th className="px-4 py-2 text-left">Risk Level</th>
            <th className="px-4 py-2 text-left">Detected On</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <tr key={url.url} className="border-t">
              <td className="px-4 py-2">{url.url}</td>
              <td
                className={`px-4 py-2 ${
                  url.risk_level === 'High' ? 'text-red-500' : url.risk_level === 'Medium' ? 'text-yellow-500' : 'text-green-500'
                }`}
              >
                {url.risk_level}
              </td>
              <td className="px-4 py-2">{url.detected_on}</td>
              <td className="px-4 py-2">{url.category}</td>
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