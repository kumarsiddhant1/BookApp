import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { BookListComponent } from './container/book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    HeaderComponent,
    ContainerComponent,
    SearchComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
