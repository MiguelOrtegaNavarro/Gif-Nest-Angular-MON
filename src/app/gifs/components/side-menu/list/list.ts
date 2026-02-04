import { Component, input } from '@angular/core';
import { ListItem } from "./list-item/list-item";
import { Gif } from 'src/app/gifs/services/gif.interface';

@Component({
  selector: 'gifs-list',
  standalone: true,
  imports: [ListItem],
  templateUrl: './list.html',
})

export class List {
  gifs = input.required<Gif[]>();
}
