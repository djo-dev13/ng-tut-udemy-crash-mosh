import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';

import { AuthorsService } from './authors.service';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component'; 

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
