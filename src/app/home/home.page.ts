import { Component, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../services/movie';
import { Router } from '@angular/router';
import { StarsPipe } from '../pipes/stars-pipe'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, StarsPipe],
})
export class HomePage implements OnInit {
  // O array original de todos os filmes
  allMovies: any[] = [];
  searchTerm: string = '';

  // Novos arrays para as linhas da grade
  row1Movies: any[] = [];
  row2Movies: any[] = [];
  row3Movies: any[] = [];
  row4Movies: any[] = [];
  row5Movies: any[] = [];
  row6Movies: any[] = [];

  private movieService = inject(MovieService);
  private router = inject(Router);

  ngOnInit() {
    this.loadPopularMovies();
  }

  loadPopularMovies() {
    this.movieService.getPopularMovies().subscribe({
      next: (data: any) => {
        this.allMovies = data.results;
        this.splitMoviesIntoRows(); // Chama a função para dividir
      },
      error: (error: any) => {
        console.error('Error fetching movies:', error);
      }
    });
  }

  splitMoviesIntoRows() {
    // Exemplo de divisão baseada nas linhas que você pediu:
    // Primeira linha: 5 filmes
    this.row1Movies = this.allMovies.slice(0, 5);
    // Segunda linha: 5 filmes
    this.row2Movies = this.allMovies.slice(5, 10);
    // Terceira linha: 4 filmes
    this.row3Movies = this.allMovies.slice(10, 14);
    // Quarta linha: 6 filmes
    this.row4Movies = this.allMovies.slice(14, 20);
    // Quinta linha: 6 filmes
    this.row5Movies = this.allMovies.slice(20, 26);
    // Sexta linha: 3 filmes
    this.row6Movies = this.allMovies.slice(26, 29);
  }

  searchMovies() {
    // Você precisará adaptar a busca também para reorganizar os resultados
    // ou apenas exibir a primeira linha de resultados.
    if (this.searchTerm.trim()) {
      this.movieService.searchMovies(this.searchTerm).subscribe({
        next: (data: any) => {
          this.allMovies = data.results;
          this.splitMoviesIntoRows(); // Reorganiza os resultados da busca
        },
        error: (error: any) => {
          console.error('Error searching movies:', error);
        }
      });
    } else {
      this.loadPopularMovies();
    }
  }

  goToDetails(movieId: number) {
    this.router.navigate(['/details', movieId]);
  }
}
