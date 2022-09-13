import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sso-root',
  templateUrl: './sso-root.component.html',
  styleUrls: ['./sso-root.component.css']
})
export class SsoRootComponent implements OnInit {

  constructor(private router: ActivatedRoute,
    private r:Router) { }

  ngOnInit(): void {
    const returnurl =  this.router.snapshot.queryParamMap.get('returnURL')
    const publickey = this.router.snapshot.queryParamMap.get('publickey')
    if (!returnurl || !publickey) {
      console.log('false')
    } else {
      this.r.navigate(['/login'])
    }
  }



}
