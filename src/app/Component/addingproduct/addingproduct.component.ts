import { Component } from '@angular/core';
import { AddService } from '../../Services/add.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addingproduct',
  standalone: true,
  imports: [FormsModule ,HttpClientModule ,CommonModule],
  templateUrl: './addingproduct.component.html',
  styleUrl: './addingproduct.component.css'
})
export class AddingproductComponent {
  product: any = {
    Name: '',
    Price: 0,
    YoutubeLink: '',
    Description: '',
    Content: '',
    Category_Id: 1,
    Supplier_Id: 1,
    Colors: [],
    Images: []
  };

  newColor: string = '';
  selectedFiles: File[] = [];

  constructor(
    private productService: AddService,
    private router: Router
  ) { }

  addColor(): void {
    if (this.newColor && !this.product.Colors.includes(this.newColor)) {
      this.product.Colors.push(this.newColor);
      this.newColor = '';
    }
  }

  removeColor(color: string): void {
  this.product.Colors = this.product.Colors.filter((c: string) => c !== color);
}

  onFileSelected(event: any): void {
    this.selectedFiles = Array.from(event.target.files);
    this.product.Images = this.selectedFiles;
  }

  removeImage(index: number): void {
    this.selectedFiles.splice(index, 1);
    this.product.Images = this.selectedFiles; 
  }

  onSubmit(): void {
    console.log(this.product);
    this.productService.createProduct(this.product).subscribe({
      next: (response) => {

        alert('Product added successfully!');
        this.router.navigate(['/master']);
      },
      error: (err) => {
        console.error('Error adding product:', err);
        alert('Error adding product. Please try again.');
      }
    });
  }
}