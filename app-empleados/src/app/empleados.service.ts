import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{
    constructor(private ServicioVentanaEmergente: ServicioEmpleadosService){

    }
    empleados:Empleado[]=[
        new Empleado("Juan", "Diaz", "Presidente", 7500),
        new Empleado("Ana", "Martinez", "Directora", 5500),
        new Empleado("Maria", "Fernandez", "Jefa seccion", 3500),
        new Empleado("Laura", "Lopez", "Administrativo", 2500),
      ];

      agregarEmpleadoService(empleado:Empleado){
        this.ServicioVentanaEmergente.mostrarMensaje("Persona que se va agregar: " + "\n" + empleado.nombre + "\n" + "Salario: " + empleado.salario );
        this.empleados.push(empleado); // array: el PUSH añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
      }

     /* agregarCaracteristicas(value:string){
        this.ServicioVentanaEmergente.mostrarMensaje(value);
        this.empleados.push(value);
      }*/
}