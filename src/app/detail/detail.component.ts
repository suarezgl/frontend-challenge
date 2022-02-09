import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StorageKey } from '../commons/enums';
import { IAgency } from '../commons/models/agency.interface';
import { DetailPresenter } from './detail.presenter';

@Component({
  selector: 'app-detail-ui',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Output() public updateAgencie: EventEmitter<void> = new EventEmitter<void>();

  public isLoading: boolean = true;
  public agencie!: IAgency;
  public showAlert: boolean = false;

  constructor(public router: Router, public presenter: DetailPresenter) {}

  public ngOnInit() {
    this.getAgencies();
  }
  public goBack() {
    this.router.navigate(['/home']);
  }

  public update() {
    const agencies: Array<IAgency> = JSON.parse(
      localStorage.getItem(StorageKey.AGENCY) as string
    );
    if (agencies) {
      let indexToUpdate = agencies.findIndex(
        (item) => item.agencia === this.agencie.agencia
      );

      if (indexToUpdate !== -1) {
        agencies[indexToUpdate] = this.presenter.getRawValues();
        localStorage.setItem(StorageKey.AGENCY, JSON.stringify(agencies));
        this.showAlert = true;
        this.updateAgencie.emit();
      }
    }
  }

  public async getAgencies() {
    try {
      this.isLoading = true;
      const agencies: Array<IAgency> = await JSON.parse(
        localStorage.getItem(StorageKey.AGENCY) as string
      );
      this.agencie = agencies.find(
        (item) => item.agencia === localStorage.getItem(StorageKey.NAME)
      ) as IAgency;
      this.presenter.form.patchValue(this.agencie);
    } catch (error) {
    } finally {
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    }
  }
}
