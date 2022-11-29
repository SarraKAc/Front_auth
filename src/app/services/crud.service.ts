import { Servicesoff } from './../models/servicesoff';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicesdem } from '../models/servicesdem';

const URL=environment.apiUrl;
 
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

//Get All Users
  public getAllUsers():Observable <User[]  > {
    return this.http.get<User[]>(URL+'/utilisateur')
  }
//Get All Service Offert
  public getAllServicesOff():Observable <Servicesoff[]  > {
    return this.http.get<Servicesoff[]>(URL+'/serviceOff')
  }
//Get All Service Demandé
  public getAllServicesDem():Observable <Servicesdem[]  > {
    return this.http.get<Servicesdem[]>(URL+'/serviceDem')
  }
//Ajouter Service Demandé
  addServiceDem(service:Servicesoff):Observable<Servicesoff>{
    return this.http.post<Servicesoff>(URL+'/addServiceDem', service);
    }

//Ajouter Service Offert
    addServiceOffert(service:Servicesoff):Observable<Servicesoff>{
      return this.http.post<Servicesoff>(URL+'/addServiceOff', service);
      }

//supprimer Service
    deleteService(id:string):Observable<Servicesoff>{
      return this.http.delete<Servicesoff>(URL+'/deleteServiceOff/'+id);
      }
 //Modier Profile
 EditProfile(user:User):Observable<User>{
  return this.http.put<User>(URL+'/utilisateur/637921ddabeaf0ae2b177b11', user);
  }      

  
}
