import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetTownComponent } from './getown.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports: [CommonModule,
    FormsModule],
    declarations: [GetTownComponent],
    exports: [GetTownComponent]
})

export class GetTownModule { }
