import { ScrollStateService } from './../../../../shared/services/scroll-state.service';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { GifService } from '../../../services/gifs.services';

@Component({
  selector: 'app-trending-page',
  imports: [],
  templateUrl: './trending-page.html',
})

export default class TrendingPage implements AfterViewInit{
  gifService = inject(GifService);

  ScrollStateService = inject(ScrollStateService);

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;

    if(!scrollDiv)return;

    scrollDiv.scrollTop = this.ScrollStateService.trendingScrollState();
  }

  onScroll(event: Event){
    const scrollDiv = this.scrollDivRef()?.nativeElement;

    if(!scrollDiv)return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeigth = scrollDiv.scrollHeight;
    const isABottom = scrollTop + clientHeight + 300 >= scrollHeigth;

    this.ScrollStateService.trendingScrollState.set(scrollTop);

    if(isABottom){
      this.gifService.loadTrendingGifs();
    }
  }
}
