import app from './src/app.js';
import cors from "cors";

const PORT = process.env.PORT || 5000;

app.use(cors())

app.get("/",(request,response)=>{
  return response.status(234).send("Welcome to AbhiHunt Backend");
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});