import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ReviewDialog } from '../../domains/review-dialog';

@Component({
  selector: 'write-a-review',
  templateUrl: './write-a-review.component.html',
  styleUrls: ['./write-a-review.component.css']
})
export class WriteAReviewComponent implements OnInit {
  review: string;

  constructor(
    public dialogRef: MatDialogRef<WriteAReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public DialogData: ReviewDialog
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close({data: this.review});
    //console.log(this.review);
  }
}
