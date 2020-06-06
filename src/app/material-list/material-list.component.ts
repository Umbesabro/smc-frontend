import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../service/material.service';
import { Material } from '../model/material.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss'],
})
export class MaterialListComponent implements OnInit {
  materials: Material[] = [];
  isLoading = false;

  constructor(private materialService: MaterialService) {}

  ngOnInit(): void {
    this.isLoading = true;

    this.materialService
      .getMaterials()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((materials: Material[]) => {
        this.materials = materials;
      });
  }
}
