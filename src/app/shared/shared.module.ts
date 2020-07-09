import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DropdownComponent } from './components/dropdown/dropdown.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { CalculateRplPipe } from './pipes/calculate-rpl.pipe';

/**
 * Модуль с общими компонентами без внешних зависимостей.
 */
@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		DropdownComponent,
		TableHeaderComponent,
		TableRowComponent,
		CalculateRplPipe
	],
	exports: [
		DropdownComponent,
		TableHeaderComponent,
		TableRowComponent,
		CalculateRplPipe
	]
})
export class SharedModule {}
