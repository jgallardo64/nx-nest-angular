import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { DriversService } from '../../services/drivers.service';

@Component({
  selector: 'test-app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DriversComponent implements OnInit {
  drivers$!: Observable<any[]>;
  testForm!: FormGroup;

  constructor(
    private driversService: DriversService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.drivers$ = this.driversService.getDrivers();

    this.testForm = this.fb.group({
      name: [''],
      image: [''],
      teamId: [''],
    });
  }

  saveDriver(data: any) {
    console.log('save', data);
    this.driversService.createDriver(data);
  }
}
