import { FraudulentApp } from '@/types/fraud';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Button } from './ui/button';

export default function AppTable({ apps }: { apps: FraudulentApp[] }) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>App Name</TableHead>
            <TableHead>Developer</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Risk Level</TableHead>
            <TableHead>Reported On</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {apps.map((app) => (
            <TableRow key={app.app_name}>
              <TableCell>{app.app_name}</TableCell>
              <TableCell>{app.developer}</TableCell>
              <TableCell>{app.category}</TableCell>
              <TableCell
                className={
                  app.risk_level === 'High'
                    ? 'text-red-500 bg-red-100'
                    : app.risk_level === 'Medium'
                    ? 'text-yellow-500 bg-yellow-100'
                    : 'text-green-500 bg-green-100'
                }
              >
                {app.risk_level}
              </TableCell>
              <TableCell>{app.reported_on}</TableCell>
              <TableCell className="flex gap-2">
                <Button variant="secondary">Report</Button>
                <Button variant="destructive">Block</Button>
                <Button variant="default">Investigate</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
