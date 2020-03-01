import { NgModule } from '@angular/core';
//import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule, MatSnackBarModule, MatListModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
      MatButtonModule, 
      MatToolbarModule
    ],
  exports: [
      MatButtonModule, 
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatInputModule,
      MatSnackBarModule,
      MatListModule
    ],
})
export class MaterialModule { }
