import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  currentImageIndex = 0;
  images = [
    'nirma.jpeg',
    'nirma2.png',
    'nirma3.jpeg',
    'bg.jpg',
    'bg2.jpg',
    'logo.png'
  ];

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  previousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  setCurrentImage(index: number) {
    this.currentImageIndex = index;
  }
}
