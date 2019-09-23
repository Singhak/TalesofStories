import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shortenlen'
})
export class TrunkTextPipe implements PipeTransform {

    transform(value: string, length?: number) {
        let valueList = value.split('\n');
        length = length ? length : 10;
        valueList = valueList.length > length ? valueList.splice(0, length) : valueList;
        return valueList.join(' ') + ' ...read more';
    }
}
