# MongoDB Case-Insensitive Query Performance Issue
This repository demonstrates a potential performance issue with MongoDB case-insensitive queries and offers a solution.

## Bug Description
The original code uses a case-insensitive regular expression to search for user names. This can lead to performance degradation if the `name` field isn't indexed, or for very complex queries.  Unindexed queries cause full collection scans, leading to slow response times and scalability challenges for large collections.

## Solution
To address this, ensure an index on the `name` field is created with a case-insensitive option. This allows for efficient searches using the `$regex` operator.  Also, consider rewriting the query for better performance.  Simplifying the query or using alternative operators is advised. 
