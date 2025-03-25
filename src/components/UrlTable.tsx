import { FraudulentUrl } from '@/types/fraud';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

export default function UrlTable({ urls }: { urls: FraudulentUrl[] }) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>URL</TableHead>
            <TableHead>Risk Level</TableHead>
            <TableHead>Detected On</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {urls.map((url) => (
            <TableRow key={url.url}>
              <TableCell>{url.url}</TableCell>
              <TableCell
                className={
                  url.risk_level === 'High'
                    ? 'text-red-500 bg-red-100'
                    : url.risk_level === 'Medium'
                    ? 'text-yellow-500 bg-yellow-100'
                    : 'text-green-500 bg-green-100'
                }
              >
                {url.risk_level}
              </TableCell>
              <TableCell>{url.detected_on}</TableCell>
              <TableCell>{url.category}</TableCell>
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
