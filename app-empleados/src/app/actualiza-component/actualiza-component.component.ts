import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) {}

  ngOnInit(): void {

    /**Esta accion esta haciendo que dependiendo que lo queramos se almacene 1 o 2 */
    this.accion=parseInt(this.route.snapshot.queryParams['accion']);
    this.empleados=this.empleadosService.empleados;

    // para poder modificar
    this.indice=this.route.snapshot.params['id']; // con esto andamos rescantando el indice de cada empleado 

    let empleado:Empleado=this.empleadosService.encontrarEmpleado(this.indice);

  /*esto hace que en los cuadros del formulario para actualizar, nos pueda mostrar lo mismo que teniamos*/
    this.nombre=empleado.nombre; 
    this.apellido=empleado.apellido; 
    this.cargo=empleado.cargo; 
    this.salario=empleado.salario; 
  }

  volverHome(){
    this.router.navigate(['']);
  }
  nombre: string="";
  apellido: string="";
  cargo: string="";
  salario: number=0;
  indice:number;
  accion:number;
 // se esta almecenado dentro de un arrglo
 empleados:Empleado[]=[]
  // esta es la funcion que hace que se puedan agregar loes empleados a la lista
  /*actualizaEmpleado(){
    let miEmpleado=new Empleado(this.nombre,this.apellido,this.cargo,this.salario);
    //this.miServicio.mostrarMensaje("Nombre del empleado:" + miEmpleado.nombre);
    this.empleadosService.actualizarEmpleado(this.indice,miEmpleado);
    this.router.navigate(['']);
  }

  eliminaEmpleado(){
    this.empleadosService.eliminarEmpleado(this.indice);
    this.router.navigate(['']);
  }*/
  

  accionEmpleado(){

    if(this.accion==1){
      let miEmpleado=new Empleado(this.nombre,this.apellido,this.cargo,this.salario);
      //this.miServicio.mostrarMensaje("Nombre del empleado:" + miEmpleado.nombre);
      this.empleadosService.actualizarEmpleado(this.indice,miEmpleado);
      this.router.navigate(['']);
    }else{
      this.empleadosService.eliminarEmpleado(this.indice);
      this.router.navigate(['']);
    }
    
  }
}
