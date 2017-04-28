import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTownComponent } from './createtown.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [	CommonModule,
        FormsModule
  ],
    declarations: [CreateTownComponent],
    exports: [CreateTownComponent]
})

export class CreateTownModule { }
