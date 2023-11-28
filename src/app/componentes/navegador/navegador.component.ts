import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../servicios/user.service';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrl: './navegador.component.css'
})
export class NavegadorComponent implements OnInit {
  nombreUsuario: string = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsername().subscribe(username => {
      console.log('Nombre de usuario actualizado:', username);
      this.nombreUsuario = username;
    });
  }
}
