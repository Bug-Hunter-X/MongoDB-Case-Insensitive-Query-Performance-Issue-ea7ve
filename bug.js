```javascript
const myQuery = { name: /John/i }; // Case-insensitive search

//This query is prone to errors if the name field is not indexed or if the query is complex.

db.collection('users').find(myQuery).toArray((err, result) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Result:', result);
  }
});
```