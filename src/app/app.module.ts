import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'getting-started', component: StartComponent },
  { path: 'welcome',             component: WelcomeComponent },
  { path: '',  redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**',                  component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
