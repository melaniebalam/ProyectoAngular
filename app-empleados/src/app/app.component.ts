import { Component, OnInit } from '@angular/core';
/*import { Empleado } from './empleado.model';
import { EmpleadosService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';*/
import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //titulo = 'Listado de Empleados'; 

  //constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService){
    //this.empleados=this.empleadosService.empleados;
  //}

  constructor(private loginService:LoginService){}
  ngOnInit(): void {

    firebase.initializeApp({

      apiKey: "AIzaSyBTljWXfBv4HA33K0l4dYxlW0Ke5u6OMXI",
      authDomain: "mis-clientes-45502.firebaseapp.com",
      
    });
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logout(){
    this.loginService.logout();
  }
  /*ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
  }*/
  /*nombre: string="";
  apellido: string="";
  cargo: string="";
  salario: number=0;
 // se esta almecenado dentro de un arrglo
 empleados:Empleado[]=[]
  // esta es la funcion que hace que se puedan agregar loes empleados a la lista
  agregarEmpleado(){
    let miEmpleado=new Empleado(this.nombre,this.apellido,this.cargo,this.salario);
    //this.miServicio.mostrarMensaje("Nombre del empleado:" + miEmpleado.nombre);
    this.empleadosService.agregarEmpleadoService(miEmpleado);
  }*/

  // PARTE DEL VIDEO HECHO POR EL
    /*agregarEmpleados(){
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.empleados.push(miEmpleado); // array: el PUSH añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;*/
}
