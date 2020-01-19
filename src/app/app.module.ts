import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet'
import { HttpClientModule } from '@angular/common/http';
import { NgxMasonryModule } from 'ng-masonry-layout';
import { AvatarModule } from 'ngx-avatar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { AppUserModalComponent } from './components/app-user-modal-component/app-user-modal-component.component';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoListComponent,
    AppUserModalComponent,
    TodoComponent,
  ],
  imports: [
    MatToolbarModule,
    NgxMasonryModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatBottomSheetModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AvatarModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    AppUserModalComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
