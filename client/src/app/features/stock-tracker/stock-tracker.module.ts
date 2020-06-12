import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './view/page-dashboard/dashboard/dashboard.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import { DashboardChartContainerComponent } from './view/page-dashboard/container/dashboard-chart-container/dashboard-chart-container.component';
import { TopTableComponent } from './components/top-table/top-table.component';
import { DashboardTopTableContainerComponent } from './view/page-dashboard/container/dashboard-top-table-container/dashboard-top-table-container.component';
import { MarketArticleComponent } from './components/market-article/market-article.component';
import {StoreModule} from '@ngrx/store';

import * as fromStockTracker from './store/stockWatchlist.reducer';
import {EffectsModule} from '@ngrx/effects';
import {StockTrackerEffects} from './store/stockWatchlist.effects';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardChartContainerComponent,
    TopTableComponent,
    DashboardTopTableContainerComponent,
    MarketArticleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([StockTrackerEffects]),
    StoreModule.forFeature('stockTracker', fromStockTracker.reducer)
  ]
})
export class StockTrackerModule { }
