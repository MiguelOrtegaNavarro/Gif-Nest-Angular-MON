import { Component, input } from '@angular/core';

@Component({
  selector: 'gifs-list-item',
  standalone: true,
  templateUrl: './list-item.html',
})

export class ListItem {
  imageUrl = input.required<string>();
}
