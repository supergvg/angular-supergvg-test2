import { Pipe, PipeTransform } from '@angular/core';
import { ITableEntity } from '@core/interfaces/entity-models';

@Pipe({
	name: 'calculateRpl'
})
export class CalculateRplPipe implements PipeTransform {

	transform(value: ITableEntity): string {
		return (value.revenue / value.leads).toFixed(2);
	}

}
