import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetPlacesComponent } from './getplaces.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports: [CommonModule,
    FormsModule],
    declarations: [GetPlacesComponent],
    exports: [GetPlacesComponent]
})

export class GetPlacesModule { }
