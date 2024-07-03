const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let totalCount = 0;

app.use(bodyParser.json());
app.use(express.static('public')); // クライアント側のファイルを配置するディレクトリ

app.post('/count', (req, res) => {
    const count = req.body.count;
    if (typeof count === 'number') {
        totalCount += count;
        res.json({ totalCount });
    } else {
        res.status(400).json({ error: 'Invalid count' });
    }
});

// クリック数を取得するエンドポイント
app.get('/total-count', (req, res) => {
    res.json({ totalCount });
});

app.listen(port, () => {
    console.log(`サーバがポート${port}で起動しました`);
});
