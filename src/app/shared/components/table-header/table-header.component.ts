import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-table-header',
	templateUrl: './table-header.component.html',
	styleUrls: ['./table-header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableHeaderComponent implements OnInit {

	ngOnInit(): void {
	}

}
