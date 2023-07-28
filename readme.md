In the beginning God created the project and the repo. Now the repo was bugless and clean, silence was over the surface of the deep, and the Spirit of God was hovering over the code. And God said, 'Let there be bugs' and there was bugs

## A book app 

Install node dependencies by running `npm i` 

Start server and client by cd'ing into each and running `npm start` 

Make sure you don't have any other servers running on 8080. 


// normalization 

-> flat file database - (denormalized) eg, row, card they own 
eg
Sam : car1
Sam :card2

Normalized is when we're referencing (avoiding duplication) some data from example from a different table, we may have an intermediary table that allows us to relate the two other tables to each other. 
EI = user_id from table1 owns (table2) card3(table3)
primary key and foriegn key (in a different table)

1 2 many
many 2 1 
many 2 many (pivot table) Sam can own many cards, any card can be owned by many

denormalized we just duplicate info. 

UserDoc - usernames ect
tweetDoc - stores the usernames again to show the username

In SQL, you have to define what each column of that table is. Every single row must follow this scheme. Bad data fucks us. 
In a document database - not guaranteed for each document to have the same data. We write a schema with mongoose. 


