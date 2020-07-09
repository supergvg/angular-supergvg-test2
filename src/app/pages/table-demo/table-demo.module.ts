import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TableModule } from '@feature/table/table.module';
import { SharedModule } from '@shared/shared.module';

import { TableDemoComponent } from './components/table-demo/table-demo.component';
import { TableDemoRoutingModule } from './table-demo-routing.module';

@NgModule({
	imports: [
		CommonModule,
		TableDemoRoutingModule,
		SharedModule,
		TableModule
	],
	declarations: [
		TableDemoComponent
	]
})
export class TableDemoModule {}
