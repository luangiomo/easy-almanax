import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  viewMode: 'offer' | 'bonus' = 'offer';
  daysRange: 7 | 15 | 30 = 15;

  @Output() viewModeEvent = new EventEmitter<'offer' | 'bonus'>();
  @Output() daysRangeEvent = new EventEmitter<7 | 15 | 30>();

  onChangeDaysRange(range: 7 | 15 | 30) {
    this.daysRange = range;
    this.daysRangeEvent.emit(range);
  }
  onChangeViewMode(mode: 'offer' | 'bonus') {
    this.viewMode = mode;
    this.viewModeEvent.emit(mode);
  }
}
