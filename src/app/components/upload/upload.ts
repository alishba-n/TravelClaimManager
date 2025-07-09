// frontend/src/app/components/upload/upload.component.ts
import { Component } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Needed for *ngIf

@Component({
  selector: 'app-upload',
  standalone: true,                  // ✅ Mark as standalone
  imports: [CommonModule],          // ✅ So you can use *ngIf in the template
  templateUrl: './upload.html'
})
export class UploadComponent {
  selectedFile: File | null = null;
  uploadStatus = '';

  constructor(private uploadService: UploadService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.uploadStatus = '';
  }

  onUpload() {
    if (!this.selectedFile) return;

    this.uploadService.uploadFile(this.selectedFile).subscribe({
      next: (event: HttpEvent<any>) => {
        if (event.type === HttpEventType.Response) {
          this.uploadStatus = '✅ Upload Successful';
        }
      },
      error: (err) => {
        console.error(err);
        this.uploadStatus = '❌ Upload Failed';
      }
    });
  }
}
