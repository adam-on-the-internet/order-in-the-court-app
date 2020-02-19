export interface Widget {
  name: string;
  _id: string;
  type: string;
  description: string;
  age: number;
  used: boolean;
}

export interface WidgetResource {
  widgets: Widget[];
}
