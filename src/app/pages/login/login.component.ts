import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: any = {
    EmailId: '',
    Password: '',
  };
  //create instance of http client which we have added in app.config file
  //for this use the inject()
  //we will use gaurd for:- only those user can see dashboard who is logged in
  //we will see can activate gaurd
  http = inject(HttpClient);
  route = inject(Router);
  //call the post(apiurl,object).subscribe() api on login button click
  onLogin() {
    //created an proxy.config.json file to avoid cors error
    this.http.post('/api/User/Login', this.loginObj).subscribe((res: any) => {
      if (res.result) {
        alert('Login successful');
        this.route.navigateByUrl('dashboard');
      } else {
        alert('Check EmailId or Password');
      }
    });
  }
}
