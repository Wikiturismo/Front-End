import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomPostComponent } from './randompost.component';

@NgModule({
    imports: [CommonModule],
    declarations: [RandomPostComponent],
    exports: [RandomPostComponent]
})

export class RandomPostModule { }
