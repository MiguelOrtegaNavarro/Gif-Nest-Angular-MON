import { Component, inject, signal } from '@angular/core';
import { List } from "src/app/gifs/components/side-menu/list/list";
import { Gif } from 'src/app/gifs/services/gif.interface';
import { GifService } from 'src/app/gifs/services/gifs.services';

@Component({
  selector: 'app-search-page',
  imports: [List],
  templateUrl: './search-page.html',
})
export default class SearchPage {

  gifService = inject(GifService)
  gifs= signal<Gif[]>([]);

  onSearch(query: string){
    this.gifService.searchGifs(query).subscribe((resp)=>{
      this.gifs.set(resp);
    });

  }

}
