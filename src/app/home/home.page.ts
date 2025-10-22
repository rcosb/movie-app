import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../services/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage implements OnInit {
  movies: any[] = [];
  searchTerm: string = '';

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadPopularMovies();
  }

  loadPopularMovies() {
    this.movieService.getPopularMovies().subscribe({
      next: (data: any) => {
        this.movies = data.results;
      },
      error: (error) => {
        console.error('Error fetching movies:', error);
      }
    });
  }

  searchMovies() {
    if (this.searchTerm.trim()) {
      this.movieService.searchMovies(this.searchTerm).subscribe({
        next: (data: any) => {
          this.movies = data.results;
        },
        error: (error) => {
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