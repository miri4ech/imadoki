const express = require('express')
const app = express()
const portNo = 3000

//activated body parser -> npm install --save multer
const multer = require('multer')
const path = require('path')
//どこにアップするか指定
const tmpDir = path.join(__dirname, 'tmp')
const pubDir = path.join(__dirname, 'pub')
const uploader = multer({dest: tmpDir})

//up server
app.listen(portNo, () => {
  console.log('its up', `http://localhost:${portNo}`)
})

//upload form
app.get('/', (req, res) => {
  res.send(
    '<form method="POST" action="/" enctype="multipart/form-data">' +
    '<br /><input type="file" name="aFile">' +
    '<br /><input type="submit" value="UPLOAD">' +
    '</form>'
  )
})

//静的ファイルは勝手に返すようにする
app.use('/pub', express.static(pubDir))

//アップロードを受け付ける
app.post('/',uploader.single('aFile'), (req, res) => {
  console.log('ファイルうけつけました')
  console.log('オリジナルファイル名：', req.file.originalname)
  console.log('保存したパス：', req.file.path)

  //MIMEでファイル形式チェック
  if (req.file.mimetype !== 'image/png') {
    res.send('PNG画像以外はアップロードしません')
    return
  }
  //TODO ここでバイナリレベルでチェックするといい
  //fileを移動する
  const fname = req.file.filename + '.png'
  const des = pubDir + '/' + fname
  const fs = require('fs')
  fs.rename(req.file.path, des)
  //HTMLを出力
  res.send('ファイルを受信しました<br />' +
    `<img src="/pub/${fname}" />`
  )

})