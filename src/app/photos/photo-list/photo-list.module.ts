import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhotoListComponent } from "./photo-list.component";
import { PhotosComponent } from "./photos/photos.component";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { FilterByDescription } from "./filter-by-description.pipe";
import { SearchComponent } from "./search/search.component";
import { PhotoModule } from "../photo/photo.module";
import { CardModule } from "src/app/shared/card/card.module";
import { DarkenOnHoverModule } from "src/app/shared/directives/darken-on-hover/darken-on-hover.module";

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent
    ],
    imports: [ 
        CommonModule,
        PhotoModule,
        CardModule, 
        DarkenOnHoverModule
    ]
})
export class PhotoListModule {}