import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ITableEntity } from '@core/interfaces/entity-models';

@Component({
	selector: 'app-table-row',
	templateUrl: './table-row.component.html',
	styleUrls: ['./table-row.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableRowComponent implements OnInit {

	// -----------------------------
	//  Input properties
	// -----------------------------

	@Input()
	rowData: ITableEntity;

	@Input()
	level = 1;

	// -----------------------------
	//  Lifecycle functions
	// -----------------------------

	ngOnInit(): void {
	}

}
