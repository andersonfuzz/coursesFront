import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { SnackServiceService } from 'src/app/shared/services/snack-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  categorys = [
    { value: "front-end" },
    { value: "back-end" },
    { value: null },
  ];


  form: FormGroup;
  constructor(
    private location: Location,
    private snackService: SnackServiceService,
    private service: CoursesService,
    private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }
  onSubmit() {
    this.service.save(this.form.value).subscribe(result => {
      this.location.back();
      this.snackService.showMessage("Curso Salvo!");
    }

      , error => {
        this.snackService.showMessage('Erro ao salvar!');

      });
  }
  onCancel() {
    this.location.back();

  }
}
