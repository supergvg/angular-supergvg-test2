import { Injectable } from '@angular/core';

import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

import { ITableEntity } from '@core/interfaces/entity-models';
import { IDropdownModel } from '@shared/components/dropdown/dropdown.component';

@Injectable({
	providedIn: 'root'
})
export class FakeHttpServiceService {

	getDropDownType(): Observable<IDropdownModel[]> {
		return timer(500)
			.pipe(
				map(() => {
					return [
						{label: 'Type 1', id: 1},
						{label: 'Type 2', id: 2},
						{label: 'Type 3', id: 3},
						{label: 'Type 4', id: 4}
					];
				})
			);
	}

	getDropDownSecond(): Observable<IDropdownModel[]> {
		return timer(500)
			.pipe(
				map(() => {
					return [
						{label: 'Second 1', id: 1},
						{label: 'Second 2', id: 2},
						{label: 'Second 3', id: 3},
						{label: 'Second 4', id: 4}
					];
				})
			);
	}

	getTableList(): Observable<ITableEntity[]> {
		return timer(500)
			.pipe(
				map(() => {
					return Array(10)
						.fill(undefined)
						.map(() => ({
							name: `Name - ${Math.ceil(Math.random() * 100)}`,
							leads: Math.ceil(Math.random() * 100),
							revenue: Math.ceil(Math.random() * 1000)
						}));
				})
			);
	}

}
