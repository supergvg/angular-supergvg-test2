import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FakeHttpServiceService } from '@core/services/fake-http-service.service';

import { interval, Observable, Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';

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

	// -----------------------------
	//  Lifecycle functions
	// -----------------------------

	ngOnInit(): void {
		this.dropdownListType$ = this.fakeHttpServiceService.getDropDownType();
		this.dropdownListSecond$ = this.fakeHttpServiceService.getDropDownSecond();

		this.tableData$ = interval(1000)
			.pipe(
				takeUntil(this.unsubscribe$$),
				switchMap(() => this.fakeHttpServiceService.getTableList()),
				tap(v => console.log('==========', v))
			);
			// .subscribe((v: ITableEntity) => {
			// 	console.log('==========', v);
			// });
	}

	ngOnDestroy(): void {
		this.unsubscribe$$.next();
		this.unsubscribe$$.complete();
	}

}
