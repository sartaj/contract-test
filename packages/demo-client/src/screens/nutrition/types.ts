export type NutritionInfo = {
  calories?: number | string;
  fat?: number | string;
  carb?: number | string;
  protein?: number | string;
}

export type DessertItem = {
  dessertName: string;
  nutritionInfo: NutritionInfo;
}
