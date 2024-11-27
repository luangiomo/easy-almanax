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

  constructor(private almanaxService: AlmanaxService) {
    const [ActualMonth, ActualYear] = [12, 2025];
    // this.almanaxService
    //   .getAlmanaxByMounth(ActualMonth, ActualYear)
    //   .then((res) => {
    //     this.offering = res;
    //   })
    //   .finally(() => ());
  }

  onGetTenOffer() {
    for (let index = 0; index < 10; index++) {
      const element =
        this.offering[index].quantity + 'x ' + this.offering[index].item.name;
      this.nextTenOffers.push(element);
    }
  }
}
