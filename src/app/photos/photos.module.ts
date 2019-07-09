import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
  imports: [ 
      HttpClientModule,
      CommonModule,
      PhotoModule,
      PhotoFormModule,
      PhotoListModule,
      DarkenOnHoverModule
  ]
})
export class PhotosModule {}