import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { MessageModule } from "../shared/Components/message/message.module";

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        MessageModule
    ]
})
export class AuthModule {
}