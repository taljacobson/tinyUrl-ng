import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'links',
	moduleId: module.id,
	templateUrl: './links/links.component.html',
	styleUrls: ['./links/links.component.css']
})

export class LinksComponent implements OnInit {

	public urls: any[]

	constructor() {
		this.urls = []
	 }

	ngOnInit() {
		this.loadData()
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