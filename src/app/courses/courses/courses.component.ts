import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackServiceService } from 'src/app/shared/services/snack-service.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {


  courses$: Observable<Course[]>;

  displayedColumns: string[] = ['name', 'category', 'actions'];

  constructor(
    private snackBar: SnackServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) {
    this.courses$ = this.coursesService.list()
      .pipe(
        catchError(error => {
          snackBar.showMessage('erro ao carregar');
          return of([]);
        })

      );

  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });


  }

}
