import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, MatTabsModule],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
