import {Component, OnInit} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {CdkOverlayOrigin} from "@angular/cdk/overlay";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CdkOverlayOrigin],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fashion-app';
  todaysDate = new Date();
  protected readonly DatePipe = DatePipe;

}
