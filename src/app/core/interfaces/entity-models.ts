export interface ITableEntity {
	name: string;
	leads: number;
	revenue: number;
	children: ITableEntity[];
	selected?: boolean;
}
