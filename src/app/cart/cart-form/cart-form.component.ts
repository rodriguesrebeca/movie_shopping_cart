import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { ShoppingToCartService } from 'src/app/services/shopping-to-cart.service';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {

  dataForm: FormGroup;
  user: User = new User('','','');

  constructor( private shoppingToCartService : ShoppingToCartService) { 

    //recebe um objeto que tenha as mesmas entradas do formulário (models)
    //Array de validadores
    this.dataForm = new FormGroup({
      'name': new FormControl(this.user.name, 
        [Validators.required,
        Validators.minLength(2)]
        ),
      'email': new FormControl(this.user.email,
        [Validators.required,
        Validators.minLength(4)]
        ),
      'tel': new FormControl(this.user.tel,
        [Validators.required,
        Validators.minLength(8)]
        )
    })
  }

  get name() {return this.dataForm.get('name')}
  get email() {return this.dataForm.get('email')}
  get tel() {return this.dataForm.get('tel')}

  submit(){
    const name = this.dataForm.get('name')?.value;
    const email = this.dataForm.get('email')?.value;
    const tel = this.dataForm.get('tel')?.value

    const dataUpdate = new User(name, email, tel);
    console.log("dataUpdate")
    window.alert("Você finalizou sua compra com sucesso!")
    location.replace('/')
    this.shoppingToCartService.clear()
  }

  ngOnInit(): void {
  }

}
