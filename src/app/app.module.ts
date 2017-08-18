import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './-core/-core.module';
import { NgModule } from '@angular/core';
import { ProveedorComponent } from './proveedor/proveedor.component';


@NgModule({
  declarations: [
    AppComponent,
    ProveedorComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
