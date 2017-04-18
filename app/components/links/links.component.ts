import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Links } from './links';


@Component({
	selector: 'links',
	moduleId: module.id,
	templateUrl: 'links.component.html',
	styleUrls: ['links.component.css']
})

export class LinksComponent implements OnInit {

	public urls: Links[]

	constructor(
		private router: Router,
		private location: Location
	) {
		this.urls = []
	 }

	ngOnInit() {
		this.location.subscribe(() => {
			this.urls = []
			this.loadData()
		})
		this.loadData()
		
	 }

	 /**
	  * goToShrink
	  */
	 public goToShrink() {
		 this.router.navigate(['shrink']);
	 }

	 private loadData() {
		 this.urls.push(
			 { 
				 long: "http://www.thepolyglotdeveloper.com",
				 short: "http://tinyurl.com/h9knhdk"
			 }
		 )
	 }
}