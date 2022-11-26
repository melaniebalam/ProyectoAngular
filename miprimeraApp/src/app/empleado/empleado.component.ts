import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aqui ira un empleado!</p>",
  styleUrls: ['./empleado.component.css']
  //styles:["p {background-color: red;}"]
})
export class EmpleadoComponent implements OnInit {

  nombre = "Melanie";
  apellido = "Balam";
  edad = 17;
  empresa = "Pildoras Informaticas";
  constructor() { }

  /*cambiaEmpresa(event:Event){
    this.empresa=(<HTMLInputElement>event.target).value;
  }*/
  /*getEdad(){
    return this.edad;
  }*/

  /*Esta es una propiedad data binding, luego en el archivo html mandamos a llmar el objeto*/ 
  habilitacionCuadro=false;
  usuRegistrado=false;
  textoRegistrado="No hay nadie registrado";

  getRegistroUsuario(){
    this.usuRegistrado=false;
  }

  setUsuarioRegistrado(event:Event){
   // this.textoRegistrado="El usuario esta registrado";
    //alert("El usuario se acaba de registrar");
    if((<HTMLInputElement>event.target).value=="si"){
      this.textoRegistrado="El usuario esta registrado";
    } else{
      this.textoRegistrado="No hay nadie registrado";
    }
  }
  ngOnInit(): void {
  }

}
