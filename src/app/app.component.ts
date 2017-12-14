import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
		{words: "365 days a week!", author: "Marshawn Lynch", rating: 100},
		{words: "God created the sun, the stars, the heavens and the earth, and then made Adam and Eve, The Bible never says anything about dinosaurs. You can't say there were dinosaurs when you never saw them. Someone actually saw Adam and Eve. No one ever saw a Tyrannosaurus Rex.", author: "Carl Everett", rating:99},
		{words: "E=mc^2", author: "Einstein",rating:2}
	];

	createQuote(quote){
		console.log(quote);
		this.quotes.push(quote);
	}

	deleteQuote(quote){
		const idx = this.quotes.indexOf(quote);
		this.quotes.splice(idx,1);
	}
}
