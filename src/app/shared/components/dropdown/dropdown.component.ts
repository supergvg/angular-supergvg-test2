import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

export interface IDropdownModel {
	id: number;
	label: string;
}

@Component({
	selector: 'app-dropdown',
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent implements OnInit {

	// -----------------------------
	//  Input properties
	// -----------------------------

	@Input()
	dropdownList: IDropdownModel[];

	// -----------------------------
	//  Public functions
	// -----------------------------

	readonly trackByDropdownItemFn = (index, item: IDropdownModel) => item.id;

	// -----------------------------
	//  Lifecycle functions
	// -----------------------------

	ngOnInit(): void {
	}

}
