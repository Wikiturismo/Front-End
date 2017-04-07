import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopPostComponent } from './topPost.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TopPostComponent],
    exports: [TopPostComponent]
})

export class TopPostModule { }
