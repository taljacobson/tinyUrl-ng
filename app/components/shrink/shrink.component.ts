import { Component, OnInit } from '@angular/core';
import { Http, Headers, ResponseOptions } from '@angular/http';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Database } from './../../providers/database/database.service';
import { Toast, makeText } from 'nativescript-toast';


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
		private location: Location,
		private database: Database
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
        .subscribe(short => {
					this.database.getDatabase().createDocument({
						type: 'url',
						long: this.longUrl,
						short
					})
					this.location.back();
        }, error => {
          console.log("ero",error)
        })
		} else {
			makeText('a valid long URl us required').show();
    	}
	}
}