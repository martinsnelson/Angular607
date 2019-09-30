import { NgModule } from "@angular/core";

import { MessageComponent } from "./message.component";

@NgModule({
    declarations: [
        MessageComponent
    ],
    exports: [ 
        MessageComponent
    ]
})
export class MessageModule {
    
}