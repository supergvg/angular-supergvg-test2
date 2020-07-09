import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableDemoComponent } from './components/table-demo/table-demo.component';

/**
 * Список маршрутов.
 */
const routes: Routes = [
	{
		path: '',
		component: TableDemoComponent
	}
];

/**
 * Модуль маршрутизации.
 */
@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class TableDemoRoutingModule {}
