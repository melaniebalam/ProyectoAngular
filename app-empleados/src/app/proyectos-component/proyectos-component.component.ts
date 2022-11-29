import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {

  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) {}

  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
  }

  volverHome(){
    this.router.navigate(['']);
  }
  nombre: string="";
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
    this.router.navigate(['']);
  }
}
