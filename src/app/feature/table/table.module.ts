import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { TableComponent } from './components/table/table.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule
	],
	declarations: [
		TableComponent
	],
	exports: [
		TableComponent
	]
})
export class TableModule {}
