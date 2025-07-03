const pool = new Pool({
  user: 'myuser', 
  host: 'localhost',
  database: 'Card-Game-db',
  password: 'user', 
  port: 5432,
}); 

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Database connected! Time:', res.rows[0].now);
  }
});