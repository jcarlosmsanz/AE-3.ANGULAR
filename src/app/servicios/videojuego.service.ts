import { Injectable } from '@angular/core';
import { Videojuego } from '../entidades/videojuego';

@Injectable({
  providedIn: 'root' //Hacemos que el servicio tenga un comportamiento 'singleton' (el objeto será único para toda la aplicación)
})
export class VideojuegoService {

  private contadorId: number=1;
  private listaVideojuegos: Videojuego[] = [
    new Videojuego("Baldur's Gate 3", "Larian Studios", "Sobresaliente", "../../../assets/images/bg3.jpg"),
    new Videojuego("Labyrinthine", "Valko Game", "Entretenido", "../../../assets/images/lab.jpg"),
    new Videojuego("Dead By Daylight", "Beheavour", "Muy bueno", "../../../assets/images/dbd.jpeg")
  ]

  constructor() { }


  /**
   * Método que inserta un videojuego en una lista generando su id.
   * @param videojuego a insertar.
   */
  public insertar(videojuego: Videojuego){
    videojuego.id = this.contadorId++
    this.listaVideojuegos.push(videojuego)
  }

/**
 * Método que devuelve todos los videojuegos en una lista.
 * @returns la lista de videojuegos.
 */
  listar(): Videojuego[] {
    return this.listaVideojuegos;
  }

  /**
   * Método que devuelve un videojuedo de la lista a partir de su id.
   * @param id 
   * @returns el videojuego en caso de que hayamos encontrado su id, null en cado de que no exista el id en la lista.
   */
  public acceder(id : number) : Videojuego | null{    
    for(let a=0; a<this.listaVideojuegos.length; a++){
      if( this.listaVideojuegos[a].id == id){
        return this.listaVideojuegos[a]
      }
    }
    return null//No debería darse nunca este caso
  }

  
 
}
