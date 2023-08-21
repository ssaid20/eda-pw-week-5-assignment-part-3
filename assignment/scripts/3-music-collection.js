console.log('***** Music Collection *****')
// Create an empty array to store the collection
let collection = [];
// Define the addToCollection function
function addToCollection(title, artist, yearPublished) {
  // Create a new album object
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };
  // Add the new album object to the collection array
  collection.push(album);
  // Return the newly created album object
  return album;
}
// Test the addToCollection function
console.log(addToCollection('After Hours', 'The Weekend', 2020));
console.log(addToCollection('KOD', 'J. Cole', 2018));
console.log(addToCollection('Dawn FM', 'The Weekend', 2022));
console.log(addToCollection('Drip or Drown', 'Gunna', 2019));
console.log(addToCollection('Truly Yours', 'J. Cole', 2017));
console.log(addToCollection('Free Spirit', 'Khalid', 2019));

// Display the collection array
console.log(collection);
function showCollection(albums) {
    console.log(`Number of albums in collection: ${albums.length}`);
    for (let album of albums) {
      console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
    }
  }
  
  // Test the showCollection function
  console.log("---- Testing showCollection ----");
  showCollection(collection);
  function findByArtist(artist) {
    let results = [];
  
    // Loop through each album in the collection
    for (let album of collection) {
      // Check if the artist of the album matches the input artist
      if (album.artist === artist) {
        // If a match is found, add the album to the results array
        results.push(album);
      }
    }
  
    // Return the array containing matching albums
    return results;
  }
  
  // Test the `findByArtist` function.
  console.log('Testing findByArtist with "The Weekend":', findByArtist('The Weekend'));
  console.log('Testing findByArtist with "J. Cole":', findByArtist('J. Cole'));
  
  
  
  
  
  
  
  
