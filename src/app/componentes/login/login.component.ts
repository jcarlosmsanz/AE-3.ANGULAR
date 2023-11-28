import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../servicios/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //Declaración de variables
  username: string = '';
  password: string = '';
  mostrarError: boolean = false;
  mensajeError: string = '';
  imagenUrl : string = '../../../assets/images/banner.jpeg';

  constructor(private router: Router, private userService: UserService) {}



 /**
 * Función que se llama al intentar iniciar sesión.
 * Verifica si el usuario y la contraseña son correctos.
 * Muestra un mensaje de error si la autenticación falla.
 */
  iniciarSesion() {

    this.mostrarError = false;

    console.log('Intento de inicio de sesión:', this.username, this.password);
    // Verificar si el usuario y la contraseña son correctos
    if (this.username === 'Juancar' && this.password === '1234') {
      // Lógica para iniciar sesión (puedes redirigir a otra página, etc.)
      console.log('Inicio de sesión exitoso');

            // Guardar el nombre de usuario en una variable local
            const nombreUsuario = this.username;
            
            // Establecer el nombre de usuario en el servicio
            this.userService.setUsername(this.username);
      
      this.router.navigateByUrl("/lista",  { replaceUrl: true });
    } else {
      // Mostrar mensaje de error
      this.mostrarError = true;
      this.mensajeError = 'Usuario o contraseña incorrectos';
      this.username = '';
      this.password = '';
    }
  } 


}
