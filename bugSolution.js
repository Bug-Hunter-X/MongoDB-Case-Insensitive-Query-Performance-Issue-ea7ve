```javascript
db.collection('users').createIndex( { name: 'text' } ); //creating a text index 

// Optimized query using $regex with case-insensitive flag
const myQuery = { name: { $regex: 'John', $options: 'i' } };

// For better performance in larger datasets, consider using aggregation framework or other optimization techniques.
db.collection('users').aggregate([
  { $match: { name: { $regex: 'John', $options: 'i' } } },
  // Add more aggregation stages as needed
]).toArray((err, result) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Result:', result);
  }
});
```