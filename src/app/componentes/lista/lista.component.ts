import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../../entidades/videojuego';
import { Router } from '@angular/router';
import { VideojuegoService } from '../../servicios/videojuego.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit{

  videojuegoSeleccionado: Videojuego | null = null;  // Cambiado el tipo de la variable
  nombreDeUsuario: string | undefined; // Agrega esta línea
  username: string = '';

  listaVideojuegos: Videojuego[] = [

  ]; //Lista donde guardar todos los videojuegos
  titulo: string;
  compania: string;
  imagen: string;
  id: number;
  router: any;


  
  constructor(private _videojuegoService: VideojuegoService) {
    //this._videojuegoService = _videojuegoService
    this.listaVideojuegos = _videojuegoService.listar();

    this.titulo = '';
    this.compania = '';
    this.imagen = '';
    this.id= 0;

    this.nombreDeUsuario = '';
  }

/**
 * Método para ver los detalles de un videojuego.
 * @param videojuego - El videojuego del cual se quieren ver los detalles.
 * @returns void
 */
  verDetalle(videojuego: Videojuego): void{
    // Utilizamos el router para navegar a la página de detalles con el ID como parámetro
    this.videojuegoSeleccionado = videojuego;
  }

  /**
   * Este método deja el valor del videojuego seleccionado en 'null'.
   */
  limpiar(){
    this.videojuegoSeleccionado = null
  }


  ngOnInit() {
  }

}
