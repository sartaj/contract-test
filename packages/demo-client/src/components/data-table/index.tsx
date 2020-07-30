import React from 'react';
import { ColumnType } from './types';

interface DataTableProps {
  columns: ColumnType[];
  dataSource: any[];
  indexKey: string;
  onChange?: (selectedRowKeys: string[]) => void;
}

const SELECT_ALL = 'All'

export const DataTable = (props: DataTableProps) => {
  const { columns, dataSource, indexKey, onChange } = props;
  const [selectedRowKeys, setSelectedRowKeys] = React.useState<string[]>([]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    let newSelectedRowKeys = selectedRowKeys.slice();
    let index = selectedRowKeys.indexOf(value);
    if (index < 0) {
      if (value === SELECT_ALL) {
        newSelectedRowKeys = [
          SELECT_ALL,
          ...dataSource.map((o) => String(o[indexKey]))
        ];
      } else {
        newSelectedRowKeys.push(value);
        if (newSelectedRowKeys.length === dataSource.length) {
          newSelectedRowKeys.push(SELECT_ALL);
        }
      }
    } else {
      if (value === SELECT_ALL) {
        newSelectedRowKeys = [];
      } else {
        newSelectedRowKeys.splice(index, 1);
        index = newSelectedRowKeys.indexOf(SELECT_ALL)
        if (index > -1) {
          newSelectedRowKeys.splice(index, 1);
        }
      }
    }
    onChange?.(newSelectedRowKeys.filter(key => key !== SELECT_ALL));
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const isChecked = (key: string) => selectedRowKeys.indexOf(String(key)) > -1

  return (
    <div className="overflow-auto mv4">
      <table className="f5 w-100 mw8 center" cellSpacing={0}>
        <thead>
          <tr>
            <th className="fw6 bb b--black-20 tl pb3 ph4 bg-white">
              <input
                className="mr2"
                type="checkbox"
                value={SELECT_ALL}
                checked={isChecked(SELECT_ALL)}
                onChange={handleSelectChange}
              />
            </th>
            {columns.map((column) => (
              <th
                key={column.prop}
                className="fw6 bb b--black-20 tl pb3 pr3 bg-white"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="lh-copy">
          {dataSource.map((row: any, i) => (
            <tr key={i}>
              <td className="pv3 ph4 bb b--black-20">
                <input
                  className="mr2"
                  type="checkbox"
                  value={row[indexKey]}
                  checked={isChecked(row[indexKey])}
                  onChange={handleSelectChange}
                />
              </td>
              {columns.map((column) => (
                <td key={column.prop} className="pv3 pr3 bb b--black-20">
                  {row[column.prop]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

DataTable.defaultProps = {
  indexKey: 'id',
};
