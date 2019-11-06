import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes =[

  {
    path: '',
    redirectTo: '/payment',
    pathMatch: 'full'
},
{
    path: 'payment',
    loadChildren: './payment/payment.module#PaymentModule',
    // data: {
    //     authorities: ['ROLE_USER']
    // },
    // canActivate: [UserRouteAccessService]
},

  
]

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
