import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AceEditorModule } from 'ng2-ace-editor';

import { AppRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import { CharterComponent } from './charter/charter.component';
import { EditorComponent } from './charter/editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    CharterComponent,
    EditorComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AceEditorModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
