import { Component, OnInit } from '@angular/core';
import { Currency } from './interfaces/currency';
import { CurrencyService } from './services/currency.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

    currencies: Currency[] = [];
    from: string;
    to: string;

    constructor(public currencieService: CurrencyService) { }

    ngOnInit() {
        this.from = 'USD';
        this.to = 'BTC';
        this.currencieService.getCurrencies().subscribe((response: any) => {
            console.log(response);
            this.currencies = response.response.currencies;
            this.setSearchLabel();
        });
    }

    setSearchLabel() {
        this.currencies.forEach(country => {
            country.searchLabel = `${country.id} ${country.currencyName} `;
        });
    }

}
