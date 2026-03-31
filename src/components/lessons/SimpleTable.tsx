interface Row {
  cells: string[];
}

interface Props {
  headers: string[];
  rows: Row[];
}

export default function SimpleTable({ headers, rows }: Props) {
  return (
    <div className="my-6 not-prose overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} className="border border-gray-200 bg-gray-50 px-4 py-2 text-left font-medium text-gray-700">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              {row.cells.map((cell, j) => (
                <td key={j} className="border border-gray-200 px-4 py-2 text-gray-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}