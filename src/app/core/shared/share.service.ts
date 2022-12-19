import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private router:Router) { }

  handleError(error: any) {
    if (error.code == 401) {
      localStorage.removeItem('QualityToken');
      this.router.navigate(['/login']);
    }

    if (error.code == 404) {
      console.log(error)
    }

  }

  toastErrorHandler(error: any): Object {
    return {
      severity: 'error',
      summary: 'خطأ في البيانات',
      detail: error,
    };
  }

  toastSuccessRequest(message: any): Object {
    return {
      severity: 'success',
      summary: message,
    };
  }
}
