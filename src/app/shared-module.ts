import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonToggleGroup, MatButtonToggleModule } from '@angular/material/button-toggle';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatMenuModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatTooltipModule,
        MatCardModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatCardModule,
        MatSortModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatSnackBarModule,
        MatDialogModule,
        MatRadioModule,
        MatProgressBarModule,
        MatTabsModule,
        MatExpansionModule,
        MatStepperModule,
        MatButtonToggleModule,

    ],
    declarations: [],
    providers: [
        MatDatepickerModule,
        MatNativeDateModule,
        MatSnackBarModule],
    exports: [
        CommonModule,
        FormsModule,
        MatToolbarModule,
        MatMenuModule,
        MatListModule,
        MatSidenavModule,
        MatIconModule,
        MatTooltipModule,
        MatCardModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatCardModule,
        MatSortModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatSnackBarModule,
        MatDialogModule,
        MatRadioModule,
        MatChipsModule,
        MatSlideToggleModule,
        MatExpansionModule,
        MatProgressBarModule,
        MatTabsModule,
        MatExpansionModule,
        MatStepperModule,
        MatProgressSpinnerModule,
        MatButtonToggleModule,
        RouterModule
]
})
export class SharedModule { }