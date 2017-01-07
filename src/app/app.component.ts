import {Component} from '@angular/core';
import {List, Record} from 'immutable';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';
    demoRecord = Record({
        property:'defaultValue',
        index:0,
        works:true,
        valueList:List([])
    });

    data = this.demoRecord();
}

