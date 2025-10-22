import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyUsd',
  standalone: true
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number): string {
    if (!value) return 'Não há dados disponíveis';
    
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`; // Ex: $25.0M
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}K`; // Ex: $250K
    } else {
      return `$${value}`; // Ex: $500
    }
  }
}