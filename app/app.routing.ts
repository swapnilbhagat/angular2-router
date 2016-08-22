import { Routes, RouterModule } from '@angular/router';
import { SecondComponent }  from './second.component';
import { ThirdComponent }    from './third.component';
const appRoutes: Routes = [
  { path: 'second', component: SecondComponent },
  { path: 'third', component: ThirdComponent }
];
export const appRoutingProviders: any[] = [
];
export const routing = RouterModule.forRoot(appRoutes);
