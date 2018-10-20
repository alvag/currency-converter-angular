import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../constants/app.costants';

@Injectable({
    providedIn: 'root'
})
export class CurrencyService {

    constructor(private http: HttpClient) { }

    /**
     * Retorna un Observable de tipo Object del body de la respuesta.
     */
    getCurrencies() {
        let url = `${AppConstants.API_URL}/getCurrencies`;
        return this.http.get(url);
    }

    getFlag(flag): string {
        return `${AppConstants.API_URL_IMAGES}/${flag}`;
    }
}
