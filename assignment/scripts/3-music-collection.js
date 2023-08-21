console.log('***** Music Collection *****')
// Create an empty array to store the collection
let collection = [];
// Define the addToCollection function
function addToCollection(title, artist, yearPublished, tracks) {
  // Create a new album object
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks
  };
  // Add the new album object to the collection array
  collection.push(album);
  // Return the newly created album object
  return album;
};
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
  };
  
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
  };
  
  // Test the `findByArtist` function.
  console.log('Testing findByArtist with "The Weekend":', findByArtist('The Weekend'));
  console.log('Testing findByArtist with "J. Cole":', findByArtist('J. Cole'));
  
  //the search function
  const searchCriteria = { artist: 'The Weekend', yearPublished: 2020 };
  function search(searchCriteria) {
    // Check if searchCriteria is not provided or is an empty object
    if (!searchCriteria || Object.keys(searchCriteria).length === 0) {
      // Return the entire collection if no specific search criteria provided
      return collection;
    }
    // Created an array to store search results
    const searchResults = [];
    // Loop through each album in the collection
    for (let album of collection) {
      // Initialize a flag to track if the album matches all criteria
      let matchesAllCriteria = true;
      // Loop through each property in the searchCriteria object
      for (let key in searchCriteria) {
        // Compare album's property value with searchCriteria's property value
        if (album[key] !== searchCriteria[key]) {
          // If values don't match, set the flag to false and exit loop
          matchesAllCriteria = false;
          break;
        }
      }
      // If the album matches all criteria, push it to searchResults array
      if (matchesAllCriteria) {
        searchResults.push(album);
      }
    }
    // Return the array of albums that match the search criteria
    return searchResults;
  }
const results = search(searchCriteria);
console.log('Search results:', results);


  

  
  
  
  
  
