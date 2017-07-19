import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import * as util from './lib/utilityFunctions';

function PrintBookInfo({title: booktitle, author: bookauthor}: Book): void {
    console.log(`${booktitle} was authored by ${bookauthor}`);
}

let [book1, book2] = util.GetAllBooks();

function LogFavoriteBooks([book1, book2, ...others]: Book[]) {
    PrintBookInfo(book1);
    PrintBookInfo(book2);
    console.log(others);
}

LogFavoriteBooks(util.GetAllBooks());
