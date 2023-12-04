import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'nosotros', component: NosotrosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
