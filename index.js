import express from 'express'
import cors from 'cors'
import fs from 'fs/promises'
import { getRooms, getMessages, checkExistRoom, checkExistUser }
    from './utility/__loadDataBase.js';
import { addUser, addMessage, addRoom, removeRoom }
    from './utility/_setDataBase.js';
import path from './utility/getPaths.js';
import routes from './utility/__getRoutes.js';
const [pathToUsers, pathToRooms, pathToMessages] = path;

const PORT = 7523;
const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST']
}));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Test server running on http://localhost:${PORT}`);
});