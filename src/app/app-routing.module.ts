import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'table-demo',
		pathMatch: 'full'
	},
	{
		path: 'table-demo',
		loadChildren: () => import('@pages/table-demo/table-demo.module')
			.then(m => m.TableDemoModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
