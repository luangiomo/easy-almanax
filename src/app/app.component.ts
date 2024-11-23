import { Component } from '@angular/core';
import { Offering } from './offering';
import { AlmanaxService } from './almanax.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'easy-almanax';

  offering: Offering[] = [];
  nextTenOffers: string[] = [];
  today = new Date();
  loading = false;

  constructor(private almanaxService: AlmanaxService) {
    this.loading = true;
    const [ActualMonth, ActualYear] = [
      this.today.getMonth() + 1,
      this.today.getFullYear(),
    ];
    this.almanaxService
      .getAlmanaxByMounth(ActualMonth, ActualYear)
      .then((res) => {
        this.offering = res;
        this.onGetTenOffer();
      })
      .finally(() => (this.loading = false));

    this.almanaxService.getAlmanaxNextTenDays().then((res) => {});
  }

  onGetTenOffer() {
    for (let index = 0; index < 10; index++) {
      const element =
        this.offering[index].quantity + 'x ' + this.offering[index].item.name;
      this.nextTenOffers.push(element);
    }
  }
}
