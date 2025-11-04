import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stars',
  standalone: true
})
export class StarsPipe implements PipeTransform {
  transform(voteAverage: number): string {
    if (!voteAverage || voteAverage === 0) {
      return '☆☆☆☆☆'; // 0 estrelas
    }

    // The Movie DB usa escala de 0-10, vamos converter para 0-5
    const normalizedScore = voteAverage / 2;
    
    // Arredondamos para meio ponto mais próximo (ex: 3.7 → 3.5)
    const roundedScore = Math.round(normalizedScore * 2) / 2;
    
    let stars = '';
    
    // Estrelas cheias
    const fullStars = Math.floor(roundedScore);
    stars += '⭐'.repeat(fullStars);
    
    // Meia estrela (se necessário)
    if (roundedScore % 1 !== 0) {
      stars += '½';
    }
    
    // Estrelas vazias
    const emptyStars = 5 - Math.ceil(roundedScore);
    stars += '☆'.repeat(emptyStars);
    
    return stars;
  }
}