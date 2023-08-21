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
console.log(addToCollection('Album 1', 'Artist A', 2020));
console.log(addToCollection('Album 2', 'Artist B', 2018));
console.log(addToCollection('Album 3', 'Artist A', 2022));
console.log(addToCollection('Album 4', 'Artist C', 2015));
console.log(addToCollection('Album 5', 'Artist B', 2017));
console.log(addToCollection('Album 6', 'Artist D', 2019));

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
  console.log('Testing findByArtist with "Artist A":', findByArtist('Artist A'));
  console.log('Testing findByArtist with "Artist B":', findByArtist('Artist B'));
  
  
  
  
  
  
  
  
