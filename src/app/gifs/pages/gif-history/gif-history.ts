import { Component, computed, inject } from '@angular/core';
import {  toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifService } from '../../services/gifs.services';
import { List } from "../../components/side-menu/list/list";

@Component({
  selector: 'app-gif-history',
  imports: [List],
  templateUrl: './gif-history.html',
})

export default class GifHistory {

  gifService = inject(GifService);

  query = toSignal(inject(ActivatedRoute).params.pipe(map(params => params['query'])))

  gifsByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query());
  })

}


