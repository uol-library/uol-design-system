import path from 'node:path';
import * as fs from 'node:fs';
const __dirname = import.meta.dirname;

let items = fs.readdirSync( path.resolve( __dirname, '../assets/data' ), { encoding: 'utf8' } );
let allItems = [];
items.forEach( filename => {
    if ( filename !== '.' && filename !== '..' ) {
        let data = fs.readFileSync( path.resolve( __dirname, '../assets/data', filename ) );
        let itemJSON = JSON.parse( data );
        allItems.push( itemJSON );
    }
} );
fs.writeFileSync( path.resolve( __dirname, '../assets/data/items.json' ), JSON.stringify( allItems ) );