import { Component, Input } from "@angular/core";

@Component({
    templateUrl: './message.component.html',
    selector:'app-message'
    // ,styleUrls:['']
})
export class MessageComponent {

    @Input() text ='';
}