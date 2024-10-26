import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  travelDestinations = [
    { name: 'Baguio City', imageUrl: 'assets/BaguioCity.jpg' },
    { name: 'Ilocos Norte', imageUrl: 'assets/IlocosNorte.jpg' },
    { name: 'Subic Bay', imageUrl: 'assets/Subicbay.jpg' }
  ];

  carRentals = [
    { model: 'Toyota Corolla', imageUrl: 'assets/toyotacorolla.jpg' },
    { model: 'Honda Civic', imageUrl: 'assets/hondacivic.jpg' },
    { model: 'HIACE', imageUrl: 'assets/hiace.jpg' }
  ];
}
