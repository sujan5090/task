import { Injectable  } from '@angular/core';  
import {  Company } from './company';  
import {  Model } from './model';  
import{Details} from './details';

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
            new Model(4, 2, 'Mdx')
             
        ];  
    }
    
    getDetails()
    {
        return[

               new Details(1,1,"The 2018 Ford Edge earns a spot in the middle of our rankings. While it matches up well against the competition in many areas, it doesn't stand out from the crowd.",'app/components/images/ford-edge.jpg'),
               new Details(2,2,"With athletic looks and a quiet, stylish interior, the Escape distinguishes itself in a crowd of small crossovers. The base engine is a 168-hp four-cylinder, but we recommend the 179-hp turbo four or the 245-hp turbo four. All have front-wheel drive; all-wheel drive is optional on turbos. Handling is precise and predictable, but the steering feels rubbery. Ford’s Sync 3 is controlled by an 8.0-inch touchscreen with voice recognition. A properly equipped Escape can tow 3500 pounds.",'app/components/images/ford-escapse.jpeg'),
               new Details(3,3,"The ILX became Acura's first compact model in the United States since the RSX was discontinued after the 2006 model year, and their first compact sedan in the United States since the Integra was last produced in 2001. The ILX was also Acura's first gasoline-electric hybrid vehicle.",'app/components/images/acura-Ilx.jpg'),
               new Details(4,4,"The Acura MDX, or Honda MDX as known in Japan and Australia (only the first generation was imported), is a mid-size three-row luxury crossover,[3][4][5] produced by the Japanese automaker Honda under its Acura luxury nameplate since 2000. The alphanumeric moniker stands for Multi-Dimensional luxury According to Honda, the MDX is the best-selling three-row luxury crossover of all time, with cumulative U.S. sales expected to surpass 700,000 units before the end of 2014.[6] It has ranked as the second-best selling luxury crossover after the Lexus RX,[7] which offers only two rows of seats.","app/components/images/acura-Mdx.jpg")
        ]


    }
}   