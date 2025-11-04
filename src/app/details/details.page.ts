import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { MovieService } from '../services/movie';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '../pipes/currency-usd-pipe';
import { HighlightDirective } from '../directives/highlight';
import { StarsPipe } from '../pipes/stars-pipe'; 

@Component({
  selector: 'app-details',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, CurrencyPipe, HighlightDirective, StarsPipe],
})
export class DetailsPage implements OnInit {
  movie: any = null;
  loading: boolean = true;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const movieId = this.route.snapshot.paramMap.get('id');
    
    if (movieId) {
      this.loadMovieDetails(parseInt(movieId));
    }
  }

  loadMovieDetails(id: number) {
    this.movieService.getMovieById(id).subscribe({
      next: (data: any) => {
        this.movie = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching movie details:', error);
        this.loading = false;
      }
    });
  }
}