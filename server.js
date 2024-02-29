const express = require('express');
const Redis = require('ioredis');
const app = express();

const redis = new Redis({
  host: 'localhost', // default is localhost
  port: 6379 // default Redis port
  // password: 'your-redis-password', // if your Redis server requires authentication
});

app.get('/', (req, res) => {


   //let curVisitors= 0;

  // Sample operation: get the value for a key
  redis.get('myKey', (err, result) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Value for myKey:', result);

      curVisitors= parseInt(result);

      if(isNaN(curVisitors)){
  
  
        curVisitors=1;
        console.log('Value for myKey:', curVisitors);
  
      }
  
      redis.set('myKey',curVisitors+1);

    }

  res.send('Your visitors  =>  ' +curVisitors);
  
    // Close the Redis connection when done
    
  });

});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
