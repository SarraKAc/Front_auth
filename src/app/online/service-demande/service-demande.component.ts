import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { Servicesdem } from 'src/app/models/servicesdem';

@Component({
  selector: 'app-service-demande',
  templateUrl: './service-demande.component.html',
  styleUrls: ['./service-demande.component.css']
})
export class ServiceDemandeComponent implements OnInit {

  constructor( private crud:CrudService ) { }

  listService : Servicesdem[]=[]
  ngOnInit(): void {
    this.crud.getAllServicesDem()
    .subscribe( data => {this.listService = data;
    });
  }

}
