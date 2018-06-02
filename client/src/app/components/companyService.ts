import { Injectable  } from '@angular/core';  
import {  Company } from './company';  
import {  Model } from './model';  


@Injectable()  
export class CompanyService {  
    getCountries() {  
        return [  
            new Company(1, 'Ford'),  
            new Company(2, 'Acura')
        ];  
    }  
    getStates() {  
        return [  
            new Model(1, 1, 'Edge'),  
            new Model(2, 1, 'Escape'),  
            new Model(3, 2, 'Ilx'),  
            new Model(5, 2, 'Mdx')
             
        ];  
    }  
}   