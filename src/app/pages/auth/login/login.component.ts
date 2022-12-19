import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import {MessageService} from 'primeng/api';
import { ShareService } from 'src/app/core/shared/share.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login_form=new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required])
  })
  constructor(private _authenticationService:AuthenticationService ,
    private shareService:ShareService,
     private messageService: MessageService, private _router:Router) { }

  ngOnInit(): void {
    
  }

  login(){
    if(this.login_form.invalid){
      this.messageService.add(
        this.shareService.toastErrorHandler('  يجب ادخال البيانات بشكل صحيح')
      );
    }else{
      this._authenticationService.login(this.login_form.value.email,this.login_form.value.password).subscribe(user=>{
        localStorage.setItem('currentUser', JSON.stringify(user));
      },(error)=>{
        this.messageService.add(this.shareService.toastErrorHandler(error))
      },()=>{
        this.messageService.add(
          this.shareService.toastSuccessRequest('تم تسجيل الدخول بنجاح')
        );
  
        setTimeout(()=>{
        this._router.navigate(['dashboard'])
        },1000)
      })
    }
    
  }


}