import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  calcular (){
    
    var vivienda = document.querySelector("#vivienda") as HTMLInputElement;
    var educacion = document.querySelector("#educacion") as HTMLInputElement;
    var alimentacion = document.querySelector("#alimentacion") as HTMLInputElement;
    var vestimenta = document.querySelector("#vestimenta") as HTMLInputElement;
    var turismo = document.querySelector("#turismo") as HTMLInputElement;
    var salud = document.querySelector("#salud") as HTMLInputElement;
    var personal = document.querySelector("#personal") as HTMLInputElement;
    var ingreso = document.querySelector("#ingreso") as HTMLInputElement;
    this.validar_vacios(vivienda.valueAsNumber,educacion.valueAsNumber,alimentacion.valueAsNumber,vestimenta.valueAsNumber,turismo.valueAsNumber,salud.valueAsNumber,personal.valueAsNumber,ingreso.valueAsNumber);
  }
 
  tags = [
    {
      "campos":"Ingresos: ",
      "id":"ingreso"
    },
    {
      "campos":"Vivienda: ",
      "id":"vivienda"
    },
    {
      "campos":"Educación: ",
      "id":"educacion"
    },
    {
      "campos":"Alimentación: ",
      "id":"alimentacion"
    },
    {
      "campos":"Vestimenta: ",
      "id":"vestimenta"
    },
    {
      "campos":"Turismo: ",
      "id":"turismo"
    },
    {
      "campos":"Salud: ",
      "id":"salud"
    },
    {
      "campos":"Gastos personales: ",
      "id":"personal"
    }
  ]

  validar_vacios(dato1:number, dato2:number,dato3:number, dato4:number,dato5:number, dato6:number,dato7:number, dato8:number ) :void{
    if ( (isNaN(dato1)) || (isNaN(dato2))|| (isNaN(dato3))|| (isNaN(dato4))|| (isNaN(dato5)) || (isNaN(dato6))|| (isNaN(dato7))|| (isNaN(dato8))) {
      var respuesta = document.querySelector("#respuesta") as HTMLDivElement;
      this.resetear ();
      var text = document.createElement('p');
      alert("Debe llenar todos los datos.");
    }
    else if( dato1 <0 || dato2 <0 || dato3 <0 || dato4 <0 || dato5 <0 || dato6 <0 || dato7 <0 || dato8 <0  ){
      var respuesta = document.querySelector("#respuesta") as HTMLDivElement;
      this.resetear ();
      var text = document.createElement('p');
      alert("No puede ingresar valores negativos.");
    }
    else{
      var gastos = dato1+dato2+dato3+dato4+dato5+dato6+dato7;
      if( gastos > dato8){
        var respuesta = document.querySelector("#respuesta") as HTMLDivElement;
        this.resetear ();
        var text = document.createElement('p');
        alert("Los gastos no pueden ser superiores al valor del ingreso. ");
      }else{
        var impuesto =[0,0,154,511,941,4156,8440,13798,22366];
        var impuestoFraccionBasica=0;
        var excedente=0;
        var porcentajeExcedente=0;
        var impuestoV=0;
        var fraccionBasica = [0,11212,14285,17854,21442,42874,64297,85729,114288];
        var impuestrofrac = [0.00,0.05,0.10,0.12,0.15,0.20,0.25,0.30,0.35];
        var ingresos = dato8; 
        var baseDisponible =ingresos - gastos;
        var index = fraccionBasica.length-1
                  if (baseDisponible > fraccionBasica[index]){
                    impuestoFraccionBasica = impuesto[index];
                    excedente = baseDisponible - fraccionBasica[index];
                    porcentajeExcedente = excedente * impuestrofrac[index];
                  }
                else{
                for ( var i=0 ; i < fraccionBasica.length; i++){
                    if (baseDisponible > fraccionBasica[i] && baseDisponible< fraccionBasica[i+1]){
                        impuestoFraccionBasica = impuesto[i];
                        excedente = baseDisponible - fraccionBasica[i];
                        porcentajeExcedente = excedente * impuestrofrac[i];
                        break;
                    }
                }
            }
            var respuesta = document.querySelector("#respuesta") as HTMLDivElement;
            this.resetear ();
            var text = document.createElement('p');
            var text2 = document.createElement('p');
            var text3 = document.createElement('p');
            var text4 = document.createElement('p');
            impuestoV=impuestoFraccionBasica+porcentajeExcedente;
            text.textContent = `Ingresos: `+ingresos.toFixed(2);
            text2.textContent=`Gastos Totales: `+gastos.toFixed(2);
            text3.textContent= `Base Imponible: `+(baseDisponible).toFixed(2);
            text4.textContent=`Valor Impuesto a la Renta `+impuestoV.toFixed(2);
            respuesta.appendChild(text);
            respuesta.appendChild(text2);
            respuesta.appendChild(text3);
            respuesta.appendChild(text4);
            respuesta.style.backgroundColor="#d2f7c6";
      }
    }
  }
  change () : void{
    const datos: any = document.querySelector('#vivienda');
    datos.style.color="red";
  }
  resetear () : void{
    var respuesta = document.querySelector("#respuesta") as HTMLDivElement;
   
    respuesta.firstElementChild?.remove()
    respuesta.firstElementChild?.remove()
    respuesta.firstElementChild?.remove()
    respuesta.firstElementChild?.remove()
    respuesta.style.backgroundColor="#fffff";
  }
}