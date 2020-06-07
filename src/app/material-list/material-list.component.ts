import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialService } from '../service/material.service';
import { Material } from '../model/material.model';
import { finalize } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss'],
})
export class MaterialListComponent implements OnInit {
  dataSource = new MatTableDataSource<Material>([]);
  isLoading = false;
  displayedColumns: string[] = [
    'Code',
    'Description',
    'Stock',
    'Avgerage usage',
    'Safety stock',
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private materialService: MaterialService) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.isLoading = true;
    this.materialService
      .getMaterials()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((materials: Material[]) => {
        this.dataSource.data = materials;
      });
  }
}
