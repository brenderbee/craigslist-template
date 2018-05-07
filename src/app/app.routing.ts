import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MissedConnectionsComponent } from './missed-connections/missed-connections.component';
import { FurnitureComponent } from './furniture/furniture.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'missed-connections',
    component: MissedConnectionsComponent
  },
  {
    path: 'furniture',
    component: FurnitureComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
