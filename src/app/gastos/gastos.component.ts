import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {
  
  

  ngOnInit(): void {
  }
  gasto =[
    {
      "titulo": "Salud",
      "descripcion": "Consumo final de bienes y servicios sanitarios que incluye la salud personal.",
      "info":"El gasto en salud mide el consumo final de bienes y servicios sanitarios (es decir, el gasto corriente en salud), que incluye la salud personal (curación, rehabilitación, cuidados de largo plazo, servicios y equipos médicos auxiliares) y los servicios colectivos (servicios de prevención y salud pública, así como la administración del sistema sanitario), pero se excluye el gasto en inversión."
    },
    {
      "titulo": "Educación",
      "descripcion": "Garantizar el acceso y calidad de la educación inicial, básica y bachillerato a los y las habitantes.",
      "info":"Garantizar el acceso y calidad de la educación inicial, básica y bachillerato a los y las habitantes del territorio nacional, mediante la formación integral, holística e inclusiva de niños, niñas, jóvenes y adultos, tomando en cuenta la interculturalidad, la plurinacionalidad, las lenguas ancestrales y género desde un enfoque de derechos y deberes para fortalecer el desarrollo social y el ejercicio de la ciudadanía."
    },
      {
        "titulo": "Vestimenta",
        "descripcion": "Se considera así a los realizados por cualquier tipo de prenda de vestir",
        "info":"Se considerarán gastos de vestimenta los realizados por cualquier tipo de prenda de vestir. Los gastos personales antes referidos, se podrán deducir siempre y cuando no hayan sido objeto de reembolso de cualquier forma."
      },
      {
        "titulo": "Vivienda",
        "descripcion": "Pagos por concepto de servicios básicos que incluyen agua, teléfono convencional.",
        "info":"SERVICIOS BÁSICOS Pagos por concepto de servicios básicos que incluyen agua, gas, electricidad, teléfono convencional y alícuota de condominio de un único inmueble usado para vivienda. IMPUESTO PREDIAL Impuestos prediales de un único bien inmueble usado para vivienda.."
    },
      {
        "titulo": "Turismo",
        "descripcion": "Gastos de alojamiento, acceso a parques de atracciones, pasajes de avión y otros",
        "info":"Se puede incluir los gastos de alojamiento, alimentación, transporte, la operación turística, pago de paquetes turísticos, acceso a parques de atracciones, pasajes de avión y otros."
      }
    ];

  
  

  informacion(gasto : string){
    alert(gasto);
  }

 

 borrarGasto (gasto:string){
    for (let i=0; i<this.gasto.length;i++)
    {
      if( gasto == this.gasto[i].titulo){
        this.gasto.splice(i,1);
      }
    }
  }
}


