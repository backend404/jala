import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Iproduct } from '../../Moduels/iproduct';
import { CommonModule, CurrencyPipe, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../Services/product.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  product!: Iproduct;
  expandedProductId: number | null = null;

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private productService: ProductsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    // استخراج المعامل id من الرابط
    const prdID = Number(this.route.snapshot.paramMap.get('id'));
    //const prdID = +(this.route.snapshot.paramMap.get('id') || 0) ;
    console.log(prdID);
    // جلب بيانات المنتج حسب المعرّف
    this.productService.getProductByID(prdID).subscribe({
      next: (data) => (this.product = data),
      error: (err) => console.error('Error loading product', err),
    });
  }

  getSafeYoutubeLink(link: string): SafeResourceUrl {
    const embedUrl = link.includes('embed')
      ? link
      : `https://www.youtube.com/embed/${this.extractYoutubeId(link)}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  extractYoutubeId(url: string): string {
    const videoIdMatch = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?t=\d+)?/);
    return videoIdMatch ? videoIdMatch[1] : '';
  }

  addtocart(item: any) {
    console.log('تمت الإضافة:', item);
  }

  toggleDescription(id: number) {
    this.expandedProductId = this.expandedProductId === id ? null : id;
  }
  goBack(): void {
    this.location.back();
  }
}
