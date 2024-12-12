Hosted Backend link :
https://user-auth-ivish-task-backend.onrender.com
# Steps for setup
1. Clone the repository
2. Run `npm install`
3. Create a `.env` file in the root directory and add the following variables:
```env
PORT=8000
MONGO_URI=<your_mongo_uri>
ACCESS_TOKEN_SECRET
REFRESH_TOKEN_SECRET
ACCESS_TOKEN_EXPIRY
REFRESH_TOKEN_EXPIRY
```
4. Run `npm run dev`
5. The server will start at `http://localhost:8000`

# Example API requests  
http://localhost:8000/api/v1/healthcheck/
