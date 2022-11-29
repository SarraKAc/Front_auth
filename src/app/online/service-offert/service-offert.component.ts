import { Component, OnInit } from '@angular/core';
import { Servicesdem } from '../../models/servicesdem';
import { Servicesoff } from '../../models/servicesoff';
import { Observable } from 'rxjs';
import { CrudService } from '../../services/crud.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-service-offert',
  templateUrl: './service-offert.component.html',
  styleUrls: ['./service-offert.component.css']
})
export class ServiceOffertComponent implements OnInit {

  constructor( private crud:CrudService ) { }
  listService : Servicesoff[]=[]

  ngOnInit(): void {
    this.crud.getAllServicesOff()
    .subscribe( data => {this.listService = data;
    });
  }

}
