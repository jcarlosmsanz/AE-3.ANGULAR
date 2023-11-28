import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './componentes/lista/lista.component';
import { NavegadorComponent } from './componentes/navegador/navegador.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { UserService } from './servicios/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaComponent,
    NavegadorComponent,
    ContactoComponent,
    NosotrosComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
