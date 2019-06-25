import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';

// import { PhotoComponent } from './photo/photo.component';
// import { PhotoListComponent } from './photo-list/photo-list.component';
// import { PhotoFormComponent } from './photo-form/photo-form.component';
// import { PhotosComponent } from './photo-list/photos/photos.component';
// import { FilterByDescription } from './photo-list/filter-by-description.pipe';

@NgModule({
  imports: [ 
      PhotoModule,
      PhotoFormModule,
      PhotoListModule,
      DarkenOnHoverModule
  ]
})
export class PhotosModule {}

// @NgModule({
//   declarations: [
//     PhotoComponent,
//     PhotoListComponent,
//     PhotoFormComponent,
//     PhotosComponent,
//     FilterByDescription
//   ],
//   imports: [
//     CommonModule,
//     HttpClientModule
//   ]
// })
// export class PhotosModule { }
