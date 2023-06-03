// keys.js

module.exports = {
    TREFLE_API_KEY: process.env.TREFLE_API_KEY || 'your_default_trefle_api_key',
    JWT_SECRET: process.env.JWT_SECRET || 'your_default_jwt_secret',
    DB_URI: process.env.DB_URI || 'your_default_db_uri',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost/your_default_db_name',
};
