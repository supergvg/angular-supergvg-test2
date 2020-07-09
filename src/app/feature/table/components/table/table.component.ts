import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FakeHttpServiceService } from '@core/services/fake-http-service.service';

import { Observable, Subject } from 'rxjs';

import { ITableEntity } from '@core/interfaces/entity-models';
import { IDropdownModel } from '@shared/components/dropdown/dropdown.component';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit, OnDestroy {

	// -----------------------------
	//  Public properties
	// -----------------------------

	dropdownListType$: Observable<IDropdownModel[]>;
	dropdownListSecond$: Observable<IDropdownModel[]>;

	tableData$: Observable<ITableEntity[]>;

	// -----------------------------
	//  Private properties
	// -----------------------------

	private readonly unsubscribe$$ = new Subject<never>();

	// -----------------------------
	//  Public functions
	// -----------------------------

	constructor(
		private readonly fakeHttpServiceService: FakeHttpServiceService
	) {}

	readonly trackByRowFn = (index, item: ITableEntity) => item.name;

	onClickRowHandler(row: ITableEntity): void {
		row.selected = !row.selected;
	}

	// -----------------------------
	//  Lifecycle functions
	// -----------------------------

	ngOnInit(): void {
		this.dropdownListType$ = this.fakeHttpServiceService.getDropDownType();
		this.dropdownListSecond$ = this.fakeHttpServiceService.getDropDownSecond();
		this.tableData$ = this.fakeHttpServiceService.getTableList();
	}

	ngOnDestroy(): void {
		this.unsubscribe$$.next();
		this.unsubscribe$$.complete();
	}

}
