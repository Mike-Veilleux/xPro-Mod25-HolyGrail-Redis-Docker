const express = require('express');
const app = express();
app.use(express.static('public'));
const redis = require('redis')
const client = redis.createClient();
client.connect();

async function initialiseData() {
    await client.set('header', 0)
    await client.set('left', 0)
    await client.set('article', 0)
    await client.set('right', 0)
    await client.set('footer', 0)
}
initialiseData();

//-------------------------------------------------------
//             Original Code
//-------------------------------------------------------
// client.mSet('header', '0', 'left', '0', 'article', '0', 'right', '0', 'footer', '0');
// client.mGet(['header', 'left', 'article', 'right', 'footer'],
//     function (err, value) {
//         console.log(value)
//     })


//async function getByKey(key)

// function data() {
//     return new Promise((reject, resolve) => {
//         console.log('In PROMISE!')
//         client.mGet(['header', 'left', 'article', 'right', 'footer'],
//             function (err, value) {
//                 console.log('In Callback')
//                 const data = {
//                     'header': Number(value[0]),
//                     'left': Number(value[1]),
//                     'article': Number(value[2]),
//                     'right': Number(value[3]),
//                     'footer': Number(value[4]),
//                 };
//                 console.log(data)
//                 err ? reject(null) : resolve(data)
//             })
//     })
// }



async function setByKey(key, value) {
    await client.set(key, value)
    return await client.get(key)
}

async function getData() {
    let [header, left, article, right, footer] = await Promise.all([
        client.get('header'),
        client.get('left'),
        client.get('article'),
        client.get('right'),
        client.get('footer')
    ])
    return {
        header: header,
        left: left,
        article: article,
        right: right,
        footer: footer
    }
}


app.get('/', function (req, res) { });


app.get('/data', async (req, res) => {
    res.send(await getData())
})


app.get('/update/:section/:value', async (req, res) => {
    const key = req.params.section;
    const value = Number(req.params.value);

    let data = await getData();
    data = { ...data, [key]: Number(data[key]) + value }
    await setByKey(key, data[key])

    res.send(data)
})


app.listen(3000, function () {
    console.log('Running on port: 3000');
});