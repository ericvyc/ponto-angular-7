import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  sair() {
    delete localStorage['token'];
    this.router.navigate(['/']);
    this.snackBar.open("Obrigado pela visita!", "Sucesso", { duration : 5000 });
  }

  autenticado(): boolean {
    return localStorage['token'];
  }

}
