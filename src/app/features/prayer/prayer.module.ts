import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@tap/shared/shared.module';
import { PrayerComponent } from './prayer.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PrayerComponent,
        // data: {
        //   seo: {
        //     title: `Car Rental - Vancouver`,
        //     description: `Hassle free 24x7 availability of Car with flexible delivery options, pick-up including YVR Airport and other prime locations around Vancouver`,
        //     image: '/assets/images/car-rental-seo.jpg',
        //     author: 'The Aleph Inc.',
        //     type:'website'
        //   },
        // },
      },
    ],
  },
];

@NgModule({
  declarations: [
    PrayerComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class PrayerModule { }
