import { Component } from '@angular/core';
import { CompanyService } from './components/companyService';
import { Company } from './components/company';
import { Model } from './components/model';
import {Details} from './components/details';

@Component({
    selector: 'company-component',
    templateUrl: './companycomponent.html',
    styleUrls:['./css/styles.css'],
    providers: [CompanyService]
})
export class CompanyComponent {
    selectedCompany: Company = new Company(0, 'Ford');
    selectedModel:Model=new Model(1, 1, 'Edge');
    companies: Company[];
    models: Model[];
    details:Details[];
    show:boolean=false;
    
    constructor(private _companyService: CompanyService) {
        this.companies= this._companyService.getCountries();
    }

    onSelect(companyid) 
    {
        this.models = this._companyService.getStates().filter((item) => item.companyid == companyid);
    }

    onDisplay(modelId)
    {
       
       this.details=this._companyService.getDetails().filter((item) => item.modelId ==modelId);
       console.log(this.details[0].image);
        this.show=true;
    }


}
