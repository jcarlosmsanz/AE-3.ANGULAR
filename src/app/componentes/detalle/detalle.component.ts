import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videojuego } from '../../entidades/videojuego';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {

  @Input() videojuego : Videojuego;
 
  videojuegos: Videojuego[] = []; 
username: string|undefined;

  constructor() {}

  ngOnInit() {
    
    
  }

  private obtenerVideojuegoPorId(id: number): Videojuego | null {
    // Buscar el videojuego en tu lista o en tu fuente de datos
    // Retorna el objeto Videojuego correspondiente
    // Esto es solo un ejemplo, ajusta según tu implementación.
    return this.videojuego;
  }
}