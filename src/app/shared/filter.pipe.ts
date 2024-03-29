import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'imageFilter' })

export class FilterPipe implements PipeTransform {
    // take certain items and criteria
    transform(items: any[], criteria: string): any {
        if (criteria === 'all') {
            return items;
        } else {
            return items.filter(item => {
                if (item.category) {
                    return item.category.toLowerCase() === criteria.toLowerCase();
                }
            });
        }
    }
}