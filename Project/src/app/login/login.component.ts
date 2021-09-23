import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/extra/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  found=false;
  emails: string[] = ['nouran@gmail.com', 'youssry@yahoo.com', 'anyone@sumerge.com']; 
  emailValue ='';
  public emailNotFound = "Email incorrect, try again";

  constructor(private formBuilder: FormBuilder, private router: Router, private authService:AuthService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  notFound ()
  {
    alert(this.emailNotFound);
  }

  Login(): void {
    this.submitted = true;
    for(var i = 0; i < this.emails.length; i++)
    { 
      if(this.emails[i]===this.emailValue)
      {
        console.log("Email found!");
        this.found = true;
      }      
    }
    console.log("Email entered" + this.emailValue);

    if (this.form.invalid) {
      return;
    }

    if (this.found) {
      console.log("Login Success!");
      this.authService.login()
      this.router.navigate(['/home']);

    } else {
      console.log("Email incorrect");
      this.notFound();
    }
    
  }
}
