import { Component, Input } from '@angular/core';
import { Offering } from '../offering';

@Component({
  selector: 'app-offering-list',
  templateUrl: './offering-list.component.html',
  styleUrls: ['./offering-list.component.css'],
})
export class OfferingListComponent {
  @Input() offering: Offering[] = [];
  viewMode: 'offer' | 'bonus' = 'offer';

  onChangeViewMode(mode: 'offer' | 'bonus') {
    this.viewMode = mode;
  }
}
