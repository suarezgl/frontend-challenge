import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IAgency } from '../commons/models/agency.interface';

@Injectable({ providedIn: 'root' })
export class DetailPresenter {
  public agencia!: FormControl;
  public direccion!: FormControl;
  public distrito!: FormControl;
  public lat!: FormControl;
  public lon!: FormControl;

  public form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  public initValidateControls() {
    this.agencia = new FormControl();
    this.direccion = new FormControl();
    this.distrito = new FormControl();
    this.lat = new FormControl();
    this.lon = new FormControl();
  }

  public createForm() {
    this.initValidateControls();
    this.form = this.fb.group({
      agencia: this.agencia,
      direccion: this.direccion,
      distrito: this.distrito,
      lat: this.lat,
      lon: this.lon,
    });
  }

  public getRawValues() {
    return this.form.value;
  }
}
