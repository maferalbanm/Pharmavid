import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from './User';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient: HttpClient) { 
    console.log('El servicio Http esta funcionando...')
}
obtenerDatos(){
  return this.httpclient.get<User[]>('../assets/json/medicamentos.json');
  }
}
