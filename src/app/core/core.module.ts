import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

/**
 * Модуль приложения, содержащий основную бизнес-логику (ядро приложения).
 */
@NgModule({
	imports: [
		CommonModule
	],
	providers: [
	]
})
export class CoreModule {

	/**
	 * Конструктор модуля.
	 *
	 * @param {CoreModule} parentModule
	 */
	constructor(
		@Optional()
		@SkipSelf() parentModule: CoreModule
	) {
		if (parentModule) {
			throw new Error('CoreModule is already loaded. Import it in the AppModule only');
		}
	}

}
