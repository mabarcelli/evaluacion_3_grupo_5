import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.page.html',
  styleUrls: ['./lista-alumnos.page.scss'],
  standalone:false,
})
export class ListaAlumnosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clases ={
    clase : ''
  }

  nombreClase = '';

  ngAfterContentInit(){
    if(history.state?.clases){
      this.clases = history.state.clases;
      this.nombreClase = this.clases.clase;
    }
    
  }
 
 

 
    
  }


