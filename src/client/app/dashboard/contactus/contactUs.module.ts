import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ContactUSComponent } from './contactUs.component';

@NgModule({
    imports: [FormsModule],
    declarations: [ContactUSComponent],
    exports: [ContactUSComponent]
})

export class ContactUSModule { }
