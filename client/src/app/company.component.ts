import { Component } from '@angular/core';
import { CompanyService } from './components/companyService';
import { Company } from './components/company';
import { Model } from './components/model';


@Component({
    selector: 'company-component',
    templateUrl: './companycomponent.html',
    styleUrls:['./css/styles.css'],
    providers: [CompanyService]
})
export class CompanyComponent {
    selectedCompany: Company = new Company(0, 'India');
    companies: Company[];
    models: Model[];

    constructor(private _companyService: CompanyService) {
        this.companies= this._companyService.getCountries();
    }

    onSelect(companyid) {
        this.models = this._companyService.getStates().filter((item) => item.companyid == companyid);
    }
}
