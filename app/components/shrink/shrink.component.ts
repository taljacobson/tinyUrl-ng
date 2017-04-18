import { Component, OnInit } from '@angular/core';
import { Http, Headers, ResponseOptions } from '@angular/http';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
	selector: 'shrink',
	moduleId: module.id,
	templateUrl: 'shrink.component.html',
	styleUrls: ['shrink.component.css']
})

export class ShrinkComponent implements OnInit {

	public longUrl: string;

	constructor(
		private http: Http,
		private location: Location
	) { 
		this.longUrl = '';
	}

	ngOnInit() { }


	/**
	 * shrink
	 */
	public shrink() {
		if(this.longUrl) {
			let Url: string = "http://tinyurl.com/api-create.php?url=" + this.longUrl;
			this.http.get(Url)
				.map(result => result.text())
        .do(result => console.log(`result: `, result))
        .subscribe(suc => {
          console.log('suc',suc)
					this.location.back();
        }, error => {
          console.log("ero",error)
        })
		} else {
      console.log("there needs to be a value")
    }
	}
}