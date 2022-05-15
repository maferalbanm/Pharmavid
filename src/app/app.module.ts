import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FormularioComponent } from './formulario/formulario.component';
import { GastosComponent } from './gastos/gastos.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { ReporteComponent } from './reporte/reporte.component';
import { FormsModule } from '@angular/forms';
import { ContactosComponent } from './contactos/contactos.component';

const rutas: RouterModule[]=[
  {path:'index', component:GastosComponent},
  {path:'gestion', component:FormularioComponent},
  {path:'productos', component:ReporteComponent},
  {path:'menu', component:MenuComponent},
  {path:'contactos', component:ContactosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormularioComponent,
    GastosComponent,
    ReporteComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutas),
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
