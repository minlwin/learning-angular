import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LegacyComponent } from "./legacy/legacy.component";

@NgModule({
    imports: [CommonModule],
    declarations: [LegacyComponent],
    exports: [LegacyComponent]
})
export class WidgetsModule {}
