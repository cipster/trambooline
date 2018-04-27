-- Create a default schema
CREATE SCHEMA main;
ALTER SCHEMA main
OWNER TO raindrop;

-- Create webuser user and grant privileges for all tables (and views)
-- subsequently created in the main schema
CREATE USER raindropuser WITH PASSWORD 'raindrop';
ALTER DEFAULT PRIVILEGES IN SCHEMA main
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES
TO raindropuser;