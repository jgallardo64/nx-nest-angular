import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const DRIVERS_URL = 'drivers';

@Injectable({
  providedIn: 'root',
})
export class DriversService {
  constructor(private readonly http: HttpClient) {}

  getDrivers(): Observable<any[]> {
    return this.http.get<any[]>(environment.apiUrl);
  }

  createDriver(driver: any) {
    return this.http
      .post(`${environment.apiUrl}/${DRIVERS_URL}`, driver)
      .subscribe((res) => {
        console.log('Driver created');
      });
  }
}
