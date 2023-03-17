import { ProductService } from '../product.service';
import { ThisReceiver } from '@angular/compiler';
import { Component, Inject, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../review';
@Component({
   selector: 'app-product',
   templateUrl: './product.component.html',
   styleUrls: ['./product.component.css'],
})
export class ProductComponent {
   constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService, public dialog: MatDialog) {}

   name: String = '';

   price: String = '';

   url: String = '';

   id: String = '';

   ngOnInit(): void {
      this.route.queryParams.subscribe((params) => {
         if (params['id']) {
            this.getProductById(params['id']);
         }
      });
   }
   getProductById(id: String) {
      this.productService.getById(id).subscribe((res) => {
         console.log(res);

         res.price = !res.price.includes('€') ? res.price.replace('–', '€') : res.price.replace('–', '');
         res.price = !res.price.includes('€') ? res.price.replace('.', '€') : res.price.replace('.', '');

         this.price = res.price;
         this.name = res.name;
         this.url = res.url;
      });
   }

   openDialog(): void {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
         id: this.id,
         width: '800px',
         height: '600px',
      };
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, dialogConfig);

      dialogRef.afterClosed().subscribe(() => {
         console.log('The dialog was closed');
      });
   }
}

@Component({
   selector: 'dialog-overview-example-dialog',
   templateUrl: '../reviewForm.html',
})
export class DialogOverviewExampleDialog {
   form: FormGroup;
   bodyReview = '';
   headline = '';
   id = '';

   review: Review = {
      body: undefined,
      movieID: undefined,
      score: undefined,
      headline: undefined,
   };

   constructor(
      private route: ActivatedRoute,
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private fb: FormBuilder
   ) {
      this.id = data.id;
      this.form = this.fb.group({
         rating: ['', Validators.required],
      });
   }

   onNoClick(): void {
      this.dialogRef.close();
   }

   submitReview(): void {
      if (this.bodyReview != '') {
         if (!this.form.value.rating) {
            this.review.score = 0;
         } else {
            this.review.score = this.form.value.rating;
         }

         this.review.body = this.bodyReview;
         this.review.movieID = this.id;
         this.review.headline = this.headline;

         //this.service.submitReview(this.review);
      }

      this.onNoClick();
   }
}
