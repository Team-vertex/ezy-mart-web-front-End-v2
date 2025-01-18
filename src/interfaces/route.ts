export interface IRoute {
  label?: string;
  path?: any;
  dropdown?: {
    label: string;
    description: string;
    icon: any;
    path?: any;
  }[];
}
