export enum VisibilityFilters {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
};

export interface TodoItem
{
  key: string,
  text: string,
  completed: boolean
}