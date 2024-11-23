import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  viewMode: 'offer' | 'bonus' = 'offer';
  @Output() viewModeEvent = new EventEmitter<'offer' | 'bonus'>();
  onChangeViewMode(mode: 'offer' | 'bonus') {
    this.viewMode = mode;
    this.viewModeEvent.emit(mode);
  }
}
