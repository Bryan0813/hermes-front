import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentModel } from '../models/payment';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private apiUrl = 'http://localhost:3000/payments'; // Cambia esta URL según tu backend

  constructor(private http: HttpClient) {}

  // Obtener todos los pagos
  getAll(): Observable<PaymentModel[]> {
    return this.http.get<PaymentModel[]>(this.apiUrl);
  }

  // Crear un nuevo pago
  create(payment: PaymentModel): Observable<PaymentModel> {
    return this.http.post<PaymentModel>(this.apiUrl, payment);
  }

  // Actualizar un pago existente
  update(payment: PaymentModel): Observable<PaymentModel> {
    return this.http.put<PaymentModel>(`${this.apiUrl}/${payment.id}`, payment);
  }

  // Cambiar el estado de un pago
  changeStatus(id: number): Observable<PaymentModel> {
    return this.http.patch<PaymentModel>(`${this.apiUrl}/${id}/status`, {});
  }
}