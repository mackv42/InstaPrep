import cheerio from 'cheerio';
import axios from 'axios'
import fs from 'fs'
//import got from 'got'

let baseUrl = "https://www.therecipedepository.com";
/*
function getRecipesByCategory( category ){
	axios.get(baseUrl+"/category/"+category).then(
			(res) => {
				let $ = cheerio.load(res.data);
				let recipeUrls = $('.recipe-item a');
				let recipeLinks = [];

				recipeUrls.each((index, value) => {
					let link = $(value).attr('href');
					console.log(link);
					recipeLinks.push(link);
				});

				// grabs each recipe page 
				recipeLinks.map( (x, index) => {
					console.log(baseUrl + x);
					axios.get(baseUrl+x).then ( x => {
						console.log(x);
					})
				});

				console.log($('title').text())
			}
	);
}
*/
/*got.get('https://jsonplaceholder.typicode.com/users', {responseType: 'json'}).then ((res) => {
	console.log(res);
});*/
// for loop grabs all pages


function getRecipesByCategory(category){
	for( let i=0; i<10; i++){
		setTimeout( () => {
			axios.post( 
				"https://www.therecipedepository.com/direct/ajax-recipes.php?page=" +i+"&category="+category+"&term=&user=&sort=featured"
				).then( (res) => {
						let $ = cheerio.load(res.data);

						let recipeUrls = $('.recipe-item a');
						let recipeLinks = [];

						recipeUrls.each((index, value) => {
							let link = $(value).attr('href');
							recipeLinks.push(link);
						});

						// grabs each recipe page 
						recipeLinks.map( (x, index) => {
							setTimeout( () => {
								console.log(baseUrl + x);
								axios.get(baseUrl+x).then ( x => {
									fs.writeFileSync("./"+String(i) + ";" + String(index) + ".html", x.data);
								})
							}, index*1000);
						});

					});
		}, i*15000);
	}
}

getRecipesByCategory("mexican")