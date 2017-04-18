import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Links } from './links';
import { Database } from './../../providers/database/database.service';


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
		private location: Location,
		private database: Database
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
		let rows = this.database.getDatabase().executeQuery('urls');
		for (let i = 0; i < rows.length; i++ ) {
			this.urls.push(rows[i])
		}
	 }
}