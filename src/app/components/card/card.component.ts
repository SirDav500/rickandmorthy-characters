import { FavoritesService } from 'src/app/service/favorites.service';
import { Character } from '../../interfaces/character';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() character: Character = {
    id: 0,
    image: '',
    name: '',
    species: '',
    gender: '',
  };

  @Input() isFavorite: boolean = false;
  @Output() updateFavorite: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favoritesService.getFavorites().subscribe((favorites) => {
      this.isFavorite = favorites.some((fav) => fav.id === this.character.id);
    });
  }

  public toggleFav(): void {
    this.updateFavorite.emit(!this.isFavorite);
  }
}
