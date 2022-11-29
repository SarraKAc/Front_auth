import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-post-service-dem',
  templateUrl: './post-service-dem.component.html',
  styleUrls: ['./post-service-dem.component.css']
})
export class PostServiceDemComponent implements OnInit {


  constructor( private crud:CrudService ,private formBuilder:FormBuilder ) { }


  serviceDemForm=new FormGroup(
    { 
    description:new FormControl(''),
    titre:new FormControl(''),
    prix:new FormControl(''),
    domaine:new FormControl(''),
    tempsService:new FormControl(''),
    });
  
  onAjouter(){
    this.crud.addServiceDem(this.serviceDemForm.value)
    .subscribe(data => console.log(data));
    }

  ngOnInit(): void {
    this.serviceDemForm = this.formBuilder.group(
      {description:[''],
      titre:[''],
      prix:[],
      domaine:[''],
      tempsService:[''],
      }
      )
  }


}
