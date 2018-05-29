import * as ssh2 from 'ssh2'


let client = new ssh2.Client()


client.connect({
    // host: "203.151.27.183",
    host: "10.11.9.142",
    port: 22,
    username: "root",
    password: "p@ssw0rd"
})

client.on('ready', () => {
    client.sftp((err, _sftp) => {
        if (err)
            console.log(err)
        else
            _sftp.fastPut("package.json", "/home/jirawat.naewsuk", (err) => {
                console.log(err)
                client.end();
            })
    })
})