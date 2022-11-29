import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { environment } from 'src/environments/environment';

const URL=environment.apiUrl;

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {
 

  constructor(private crud: CrudService, private formBuilder: FormBuilder,private http :HttpClient) { }

  // userModifier : FormGroup
selectedFile : any 
  


    // upload Image
    onFileChanged(event: any){
      console.log(event);
      this.selectedFile = event.target.files[0];
      
    }
    nom:string ="" 
    prenom:string ="" 
    profession:string =""
    email:string ="" 
    password:string ="" 
    ville:string ="" 

    getName(nom: string | any) {
      this.nom = nom;
      console.log(nom);
      
    }
    getPrenom(prenom: string | any) {
      this.prenom = prenom;
      console.log(prenom);

    }
    getProfession(profession: string | any) {
      this.profession = profession;
      console.log(profession);
    }
    getEmail(email: string | any ) {
      this.email = email;
      console.log(email);
      
    }
    getVille(ville: string | any) {
      this.ville = ville;
      console.log(ville);
      
    }
    getPassword(password: string | any) {
      this.password = password;
      console.log(password);
    }



//Apres la soumission du formulaire
  OnEditProfile() {
    let formData = new FormData();
    formData.set('nom', this.nom)
    formData.set('prenom', this.prenom)
    formData.set('email', this.email)
    formData.set('ville', this.ville)
    formData.set('password', this.password)
    formData.set('profession', this.profession)
    formData.set('image',this.selectedFile)

    console.log(formData);

    this.http.put(URL+'/utilisateur/637921ddabeaf0ae2b177b11',formData)
    .subscribe(data => console.log(data))
    // this.crud.EditProfile(this.userModifier.value)
    //   .subscribe(data => console.log(data));
  }



  ngOnInit(): void {
    
  }


}
