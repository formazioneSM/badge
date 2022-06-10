import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-impostazioni',
  templateUrl: './impostazioni.component.html',
  styleUrls: ['./impostazioni.component.css'],
})
export class ImpostazioniComponent implements OnInit {
  settingsLinks: any = [
    {
      linkTitle: 'Modifica anagrafica',
      link: '',
    },
    {
      linkTitle: 'Modifica password',
      link: '',
    },
    {
      linkTitle: 'Termini e condizioni',
      link: '',
    },
    {
      linkTitle: 'FAQ',
      link: '',
    },
    {
      linkTitle: 'Suggerimenti',
      link: '',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.settingsLinks[0].icon);
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }
}
