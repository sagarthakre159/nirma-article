import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
}

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit {
  allBlogs: Blog[] = [];
  displayedBlogs: Blog[] = [];
  currentPage = 1;
  itemsPerPage = 8;
  hasMoreBlogs = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadBlogData();
  }

  loadBlogData() {
    this.http.get<{ blogs: Blog[] }>('assets/data/blogs.json').subscribe(data => {
      this.allBlogs = data.blogs;
      this.updateDisplayedBlogs();
    });
  }

  updateDisplayedBlogs() {
    const startIndex = 0;
    const endIndex = this.currentPage * this.itemsPerPage;
    this.displayedBlogs = this.allBlogs.slice(startIndex, endIndex);
    this.hasMoreBlogs = endIndex < this.allBlogs.length;
  }

  loadMore() {
    this.currentPage++;
    this.updateDisplayedBlogs();
  }
}
