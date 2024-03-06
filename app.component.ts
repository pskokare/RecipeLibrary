// import { Component } from '@angular/core';
// import { SpoonacularService } from './spoonacular.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'Get the search result';
//   constructor(private apikey : SpoonacularService)
//   {

//   }

//   ngOnInit()
//   {
//     this.apikey.getSearchResult().subscribe((data)=>{
//       console.log("Your daily points limit of 150 has been reached. Please upgrade your plan to continue using the API.",data)
//     })
//   }
// }



import { Component } from '@angular/core';
import { SpoonacularService } from './spoonacular.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Get the search result';
  
}
