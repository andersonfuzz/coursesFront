import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {


  courses$: Observable<Course[]>;

  displayedColumns: string[] = ['name', 'category', 'actions'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) {
    this.courses$ = this.coursesService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar cursos');
          return of([]);
        })

      );

  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });


  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

}
