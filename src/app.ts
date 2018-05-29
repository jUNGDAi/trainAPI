import * as express from 'express'
import * as bodyParser from 'body-parser'
import { Server } from 'http'
import * as cors from 'cors'
import { UserController } from './controller/user'
import * as config from 'config'
import { LoginController } from './controller/login'
import { jwt } from './shared/auth'
import { IssueController } from './controller/issue'
import * as io from 'socket.io'
import { PicController } from './controller/pic'

const app = express();
const server = new Server(app);
const port: number = config.get("port");
server.listen(port);
const socketio = io(server)

console.log(`server start on port ${port}`)

socketio.on("connection", (_socket) => {
    _socket.on("newPic", (payload) => {
        socketio.emit("updatePic", 1)
    })

    _socket.on("deletePic", (payload) => {
        socketio.emit("updatePic", -1)
    })
    // _socket.emit("xxx", "payload data")
})

app.use(jwt.initialize())
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use("/api/v1/user", UserController)
app.use("/api/v1/login", LoginController)
app.use("/api/v1/issue", IssueController)
app.use("/api/v1/pic", PicController)