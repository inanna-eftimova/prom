import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/core/service/auth-service/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthServiceService) { }

  ngOnInit(): void {
    
  }

}
