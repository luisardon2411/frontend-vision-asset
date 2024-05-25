import { Component, Input } from "@angular/core";



@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
    standalone: true,
    imports: [],
})
export class IconComponent{


    @Input() icon: string | undefined = '';

    constructor(){}
}