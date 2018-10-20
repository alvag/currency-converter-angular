import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { CurrencyService } from './services/currency.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NgSelectModule
    ],
    providers: [CurrencyService],
    bootstrap: [AppComponent]
})
export class AppModule { }
