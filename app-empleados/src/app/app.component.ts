import { Component } from '@angular/core';
import { Empleado } from './empleado.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados'; 

  nombre: string="";
  apellido: string="";
  cargo: string="";
  salario: number=0;
 // se esta almecenado dentro de un arrglo
  empleados:Empleado[]=[
    new Empleado("Juan", "Diaz", "Presidente", 7500),
    new Empleado("Ana", "Martinez", "Directora", 5500),
    new Empleado("Maria", "Fernandez", "Jefa seccion", 3500),
    new Empleado("Laura", "Lopez", "Administrativo", 2500),
  ];
  
  // esta es la funcion que hace que se puedan agregar loes empleados a la lista
  agregarEmpleado(){
    let miEmpleado=new Empleado(this.nombre,this.apellido,this.cargo,this.salario);
    this.empleados.push(miEmpleado); // array: el PUSH añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
  }

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
