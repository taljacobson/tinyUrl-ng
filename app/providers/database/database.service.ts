import { Injectable } from '@angular/core';
import { Couchbase } from 'nativescript-couchbase';

@Injectable()
export class Database {

    private isInstatiated: boolean;
    private storage: Couchbase;

    constructor() {
        if(this.isInstatiated) {
            this.storage = new Couchbase('tinyurl');
            this.storage.createView('urls', '1', (document, emitter) =>  {
                if (document.type == 'url') {
                    emitter.emit(document._id, document);
                }
            });
            this.isInstatiated = true;
        }
    }

    /**
     * getDatabase
     */
    public getDatabase(): Couchbase {
        return this.storage;
    }
}