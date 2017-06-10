import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './createpost.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [	CommonModule,
        FormsModule
  ],
    declarations: [CreatePostComponent],
    exports: [CreatePostComponent]
})

export class CreatePostModule { }
