import { Pipe, PipeTransform } from '@angular/core';
import { ITableEntity } from '@core/interfaces/entity-models';

@Pipe({
	name: 'calculateRpl'
})
export class CalculateRplPipe implements PipeTransform {

	transform(value: ITableEntity): string {
		if (!value) {
			return '';
		}

		return (value.revenue / value.leads).toFixed(2);
	}

}
