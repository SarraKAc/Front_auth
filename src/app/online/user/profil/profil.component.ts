import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Servicesdem } from 'src/app/models/servicesdem';
import { Servicesoff } from 'src/app/models/servicesoff';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit,OnDestroy {

  constructor( private crud:CrudService ) { }
  getServiceDem!: Subscription;
  getServiceOffert!: Subscription;
  hideOff:boolean=false
  hideDem:boolean=true
  listServiceDem : Servicesdem[]=[]
  listServiceOffert : Servicesoff[]=[]

  deleteService(id:string)
{
  this.crud.deleteService(id)
}

hidden()
{


if((<HTMLInputElement>document.getElementById("hidden1")).checked==false)
{
  this.hideDem=true 
  this.hideOff=false

}
else 
{
  this.hideDem=false
  this.hideOff=true

}
}


  ngOnInit(): void {

//hidden elements 
    this.getServiceDem=this.crud.getAllServicesDem()
    .subscribe( data => {
      this.listServiceDem = data;
    });

   this.getServiceOffert=this.crud.getAllServicesOff()
    .subscribe( data => {
      this.listServiceOffert = data;
    });
  }

  
  ngOnDestroy(): void {
    this.getServiceDem.unsubscribe();
    this.getServiceOffert.unsubscribe();

  }

}

function hidden() {
  throw new Error('Function not implemented.');
}
