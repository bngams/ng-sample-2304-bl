import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, MY_TITLE } from './app.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/layout/header/header.component';
import { InlineSampleComponent } from './components/inline-sample.component';
import {MatToolbarModuleù} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

// Array<Modules>
const MATERIAL_MODULES = [  
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
    //...
]

@NgModule({
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    HeaderComponent,
    InlineSampleComponent
  ],
  // module ng imports
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...MATERIAL_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log(MY_TITLE);
  }
 }
