import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  userToken: any;
  baseUrl: any = 'https://bookmyaqua.com/api/provider/';
  cat_id: any;
  lat: number;
  long: number;
  name: any;
  deviceToken: any;
  withoutauth: any;
  shop_id: any;
  km: any;
  mobile: any = '';
  qty: any;
  total: any;
  price: any;
  newLogin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  dataUp: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public profileUpdate = new BehaviorSubject(true);
  select_fuel: any;
  date: string;
  time: string;
  pro_id: string;
  proOrderId: any;
  veId: any;
  vehicleObj: any;
  phone_no: any;
  constructor(private http: HttpClient) { }

  setNewLogin(val) {
    this.newLogin.next(val);
  }

  isNewLogin() {
    return this.newLogin.asObservable();
  }
  getData(url) {
    return this.http.get(this.baseUrl + url);
  }
  postData(url, data) {
    return this.http.post(this.baseUrl + url, data);
  }

  getDataWithToken(url) {
    let header = new HttpHeaders();
    header = header.set("Authorization", "Bearer " + localStorage.getItem('empToken'));
    header = header.set("Accept", "application/json");
    return this.http.get(this.baseUrl + url, { headers: header });
  }

  deleteData(url) {
    let headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('empToken')
    });
    return this.http.delete(this.baseUrl + url, { headers: headers });
  }
  postDataWithToken(url, data) {
    let header = new HttpHeaders();
    header = header.set("Authorization", "Bearer " + localStorage.getItem('empToken'));
    header = header.set("Accept", "application/json");
    return this.http.post(this.baseUrl + url, data, { headers: header });
  }
}
