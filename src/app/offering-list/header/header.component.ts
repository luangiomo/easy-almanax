import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-offering-list',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponentOfferingList {
  viewMode: 'offer' | 'bonus' = 'offer';
  daysRange: 7 | 15 | 30 = 15;
  accontsNumber: number = 1;

  @Output() viewModeEvent = new EventEmitter<'offer' | 'bonus'>();
  @Output() daysRangeEvent = new EventEmitter<7 | 15 | 30>();
  @Output() accontsNumberEvent = new EventEmitter<number>();

  onChangeDaysRange(range: 7 | 15 | 30) {
    this.daysRange = range;
    this.daysRangeEvent.emit(range);
  }
  onChangeViewMode(mode: 'offer' | 'bonus') {
    this.viewMode = mode;
    this.viewModeEvent.emit(mode);
  }
  onChangeAccontsNumber(accontsNumber: number) {
    this.accontsNumber = accontsNumber;
    this.accontsNumberEvent.emit(accontsNumber);
  }

  onIncreaseAccontNumber() {
    if (this.accontsNumber >= 20) return;
    this.accontsNumber += 1;
    this.onChangeAccontsNumber(this.accontsNumber);
  }

  onDecreaseAccontNumber() {
    if (this.accontsNumber === 1) return;
    this.accontsNumber -= 1;
    this.onChangeAccontsNumber(this.accontsNumber);
  }
}
