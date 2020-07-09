import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-table-demo',
	templateUrl: './table-demo.component.html',
	styleUrls: ['./table-demo.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableDemoComponent implements OnInit {

	// -----------------------------
	//  Lifecycle functions
	// -----------------------------

	ngOnInit(): void {
	}

}
