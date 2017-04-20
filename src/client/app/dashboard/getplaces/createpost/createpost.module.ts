import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './createpost.component';

@NgModule({
    imports: [CommonModule],
    declarations: [CreatePostComponent],
    exports: [CreatePostComponent]
})

export class CreatePostModule { }
