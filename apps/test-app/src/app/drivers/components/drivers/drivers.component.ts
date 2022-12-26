import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Driver } from '@prisma/client';
import { Observable } from 'rxjs';
import { DriversService } from '../../services/drivers.service';

@Component({
  selector: 'test-app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DriversComponent implements OnInit {
  drivers$!: Observable<Driver[]>;
  testForm!: FormGroup;

  constructor(private driversService: DriversService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.drivers$ = this.driversService.getDrivers();

    this.testForm = this.fb.group({
      name: [''],
      image: ['']
    })
  }

  saveDriver(data: any) {
    this.driversService.createDriver(data);
  }

}
