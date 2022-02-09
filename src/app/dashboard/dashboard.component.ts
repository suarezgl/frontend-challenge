import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageKey } from '../commons/enums';
import { IAgency } from '../commons/models/agency.interface';

@Component({
  selector: 'app-dashboard-ui',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public agencies: Array<IAgency> = new Array<IAgency>();
  public isLoading: boolean = true;

  constructor(public readonly router: Router) {}

  ngOnInit() {
    this.getAgencies();
  }

  public logOut() {
    this.router.navigate(['/login']);
  }

  public viewDetail(agencie: string) {
    localStorage.setItem(StorageKey.NAME, agencie);
    this.router.navigate(['detail']);
  }

  public async getAgencies() {
    try {
      if (!localStorage.getItem(StorageKey.AGENCY)) {
        this.agencies = await (
          await fetch('assets/data/agencies.json', {
            method: 'GET',
          })
        ).json();

        localStorage.setItem(StorageKey.AGENCY, JSON.stringify(this.agencies));
      } else {
        this.agencies = await JSON.parse(
          localStorage.getItem(StorageKey.AGENCY) as string
        );
      }
    } catch (error) {
    } finally {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    }
  }
}
