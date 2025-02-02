import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScannerPlugin } from '@capacitor-mlkit/barcode-scanning';
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { HttpClient } from '@angular/common/http';
import { APIService } from '../Servicios/api.service';
@Component({
  selector: 'app-lector',
  templateUrl: './lector.page.html',
  styleUrls: ['./lector.page.scss'],
  standalone: false,
})
export class LectorPage implements OnInit {

  constructor(private router: Router, private http: HttpClient, private api:APIService) { }

  ngOnInit() {
  }
  
  obtenerusuario(id:number){
    this.api.obtenerUsuarioDesdeAPI(id).subscribe(
      (usuarios:any) =>{
        if(usuarios){
          console.log('Usuario encontrado', usuarios)

          const encodeuser = encodeURIComponent(JSON.stringify(usuarios));
          this.router.navigate(['/lista-alumnos', {usuarios:encodeuser}]);

        }else{
          console.error('Usuario no encontrado en la API');
        }
        

      }
    );
  }

  /*async QR(){
    try{
      const status = await BarcodeScanner.requestPermissions();
      if(!status.camera){
        console.log('Permiso de la camara denegado');
        return;
      }


      const result = await BarcodeScanner.startScan();
      console.log('Resultado del escaneo:', result);

      if(result && result.content){
        console.log('QR escaneado:', result.content);

        const id = parseInt(result.content,10);
        if(!isNaN(id)){
          this.obtenerusuario(id);
        }else{
          console.error('El QR no conitene ID valido')
        }
      }else{
        console.error('El QR escaneado esta vacio')
      }
    }catch(error){
      console.error('Error al escanear', error)
    }
  }*/

      
    
  }
  








