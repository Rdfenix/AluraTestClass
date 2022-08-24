import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LikeWidgetComponent } from './like-widget.component';

@NgModule({
  declarations: [LikeWidgetComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [LikeWidgetComponent],
})
export class LikeWidgetModule {}
