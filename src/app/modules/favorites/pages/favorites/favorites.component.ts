import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character';
import { FavoritesService } from 'src/app/service/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  public favorites: Array<Character> = [];
  public character: Character = {
    id: 0,
    image: '',
    name: '',
    species: '',
    gender: '',
  };

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.getFavorites();
  }

  public console() {
    console.log(this.favorites);
  }

  public getFavorites() {
    this.favoritesService.getFavorites().subscribe((favorites) => {
      this.favorites = favorites;
    });
  }

  public removeFavorite(character: Character) {
    this.favoritesService.removeFavorite(character);
    this.getFavorites();
  }

  public removeFromFavorites(character: Character) {
    this.removeFavorite(character);
  }
}
