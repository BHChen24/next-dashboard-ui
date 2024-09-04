import { Col } from "@/lib/data";
import React from "react";

export default function ReusableList({
  columns,
  data,
  renderRow,
}: {
  columns: Col[];
  data: any[];
  renderRow: (item: any) => React.ReactNode;
}) {
  return (
    <table className="w-full mt-4">
        <thead>
            <tr className="text-left text-gray-500 text-sm">
                {columns.map((col) => (
                    <th key={col.accessor} className={col.className}> { col.header}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {(data || []).map((item) => (renderRow(item)))}
        </tbody>
    </table>
  );
}
