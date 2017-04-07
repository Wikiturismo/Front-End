import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';

@NgModule({
    imports: [CommonModule],
    declarations: [CommentsComponent],
    exports: [CommentsComponent]
})

export class CommentsModule { }
