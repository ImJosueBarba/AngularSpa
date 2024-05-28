import { Component } from '@angular/core';


interface IRegistreform{
  name: string;
  email: string;
  password: string;
  repeatPass:  string;
}

@Component({
  selector: 'app-formtemplate',
  templateUrl: './formtemplate.component.html',
  styleUrl: './formtemplate.component.css'
})
export class FormtemplateComponent {
  register:IRegistreform = {
    name: "",
    email: "",
    password: "",
    repeatPass: ""
};
constructor() { }
submit(){
  if(this.register.password !== this.register.repeatPass){
    console.error("Las contraseñas no coinciden");

    return;
  }
  console.log("Formulario enviado");
  console.log(this.register);
}
}
