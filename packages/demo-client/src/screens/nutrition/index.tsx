import React from 'react';
import { NutritionListHeader } from './components/nutrition-list-header';
import { NutritionListActions } from './components/nutrition-list-actions';
import { DataTable } from '../../components/data-table';
import { ColumnType } from '../../components/data-table/types';

const columns: ColumnType[] = [
  { title: 'Dessert(100g serving)', prop: 'dessertName', sortOrder: 'ascend' },
  { title: 'Calories', prop: 'calories', sortOrder: 'ascend' },
  { title: 'Fat (g)', prop: 'fat', sortOrder: 'ascend' },
  { title: 'Carbs (g)', prop: 'carb', sortOrder: 'ascend' },
  { title: 'Protein (g)', prop: 'protein', sortOrder: 'ascend' },
];

const rows = [
  {
    id: 1,
    dessertName: 'Oreo',
    calories: 437,
    fat: 18,
    carb: 63,
    protein: 4,
  },
  {
    id: 2,
    dessertName: 'Nougat',
    calories: 437,
    fat: 18,
    carb: 63,
    protein: 4,
  },
  {
    id: 3,
    dessertName: 'Marshmallow',
    calories: 437,
    fat: 18,
    carb: 63,
    protein: 4,
  },
  {
    id: 4,
    dessertName: 'Lollipop',
    calories: 437,
    fat: 18,
    carb: 63,
    protein: 4,
  },
  {
    id: 5,
    dessertName: 'KitKat',
    calories: 437,
    fat: 18,
    carb: 63,
    protein: 4,
  },
];

export function NutritionScreen() {
  const [selectedRowKeys, setSelectedRowKeys] = React.useState<string[]>([]);

  const handleChange = (keys: string[]) => {
    setSelectedRowKeys(keys);
  };

  const handleAddClick = () => {
    // TODO: implement dessert addition logic
  };

  const handleDeleteClick = () => {
    // TODO: implement dessert deletion logic
  };

  const statusText = `${selectedRowKeys.length} selected`;

  return (
    <div className="mw8 center mt5 pa3 .bg-near-white">
      <NutritionListHeader />
      <NutritionListActions
        statusText={statusText}
        onAddClick={handleAddClick}
        onDeleteClick={handleDeleteClick}
      />
      <DataTable columns={columns} dataSource={rows} onChange={handleChange} />
    </div>
  );
}
