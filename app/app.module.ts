import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }       from './app.component';
import { routing,
         appRoutingProviders } from './app.routing';
import { SecondComponent }    from './second.component';
import { ThirdComponent }  from './third.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    SecondComponent,
    ThirdComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
