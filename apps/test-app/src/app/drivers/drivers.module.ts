import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DriversComponent } from './components/drivers/drivers.component';
import { DriversRoutingModule } from './drivers-routing.module';
import { DriversService } from './services/drivers.service';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DriversComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    DriversRoutingModule,
  ],
  providers: [DriversService],
})
export class DriversModule {}
