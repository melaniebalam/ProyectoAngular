import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  titulo = 'Listado de Empleados'; 
  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService){
    //this.empleados=this.empleadosService.empleados;
  }

  ngOnInit(): void {
    //this.empleados=this.empleadosService.empleados;
    this.empleadosService.obtenerEmpleados().subscribe(misEmpleados=>{
      console.log(misEmpleados);

      // para que se muestren los empleados
      this.empleados=Object.values(misEmpleados);
      this.empleadosService.setEmpleados(this.empleados);
    });
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
  }

}
