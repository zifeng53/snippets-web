// This snippet file was generated by processing the source file:
// ./firestore-next/test.firestore.js
//
// To make edits to the snippets in this file, please edit the source

// [START example_filters_modular]
const q1 =  query(citiesRef, where("state", "==", "CA"));
const q2 =  query(citiesRef, where("population", "<", 100000));
const q3 =  query(citiesRef, where("name", ">=", "San Francisco"));
// [END example_filters_modular]