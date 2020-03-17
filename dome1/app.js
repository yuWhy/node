const http = require('http');
const url = require('url');
const queryString = require('querystring');
const User = require('./model/User');

// 连接数据库， 27017是默认端口
require('./model/server');

const app = http.createServer();

app.on('request', async (req, res) => {
    console.log('-----');
    const method = req.method;
    const { pathname } = url.parse(req.url);
    console.log(pathname + method)
    if (method === 'GET') {
        if (['/', '/list'].includes(pathname) ) {
            let listHtml = `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>用户列表</title>
                </head>
                <body>
                    <div>
                        <a type="button" href="/add">添加用户</a>
                        <table>
                            <thead>
                                <tr>
                                    <th>用户名</th>
                                    <th>年龄</th>
                                    <th>爱好</th>
                                    <th>邮箱</th>
                                    <th>操作</th>
                                <tr/>
                            </thead>
                            <tbody>`;
            let listUser = await User.find();
            listUser.forEach(item => {
                // let likeS = item.;
                // item.like.forEack(item => {
                //     likeS += item
                // })
                let likes = item.like.join('');
                listHtml += `<tr>
                        <td>${item.name}</td>
                        <td>${item.age}</td>
                        <td>${likes}</td>
                        <td>${item.email}</td>
                        <td>
                            <a href="/dele?id=${item._id}">删除</a>
                            <a href="/add?id=${item._id}">修改</a>
                        </td>
                    </tr>`
            });
            listHtml += `</tbody>
                        </table>
                    </div>
                </body>
                </html>`;
            res.end(listHtml);
        } else if (pathname === '/add') {
            let oQuery = queryString.parse(url.parse(req.url).query);
            let currItem = {};
            if (oQuery && oQuery.id) { // 修改
                currItem = await User.find({_id: oQuery.id});
            }
            console.log(currItem);
            let sHtml = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>用户列表</title>
                </head>
                <body>
                <form action="/add" method="post">
                    <span>用户名</span>
                    <input type="text" name="name" value="${currItem[0].name || ''}"/>
                    <span>年龄</span>
                    <input type="number" name="age" value="${currItem[0].age || ''}"/>
                    <span>邮箱</span>
                    <input type="text" name="email" value="${currItem[0].email || ''}"/>
                    <span>爱好</span>
                    <div>
                        <label>
                            <span>抽烟</span>
                            <input type="checkbox" name="like" value="抽烟"/>
                        </label>
                        <label>
                            <span>喝酒</span>
                            <input type="checkbox" name="like" value="喝酒" />
                        </label>
                        <label>
                            <span>烫头</span>
                            <input type="checkbox" name="like" value="烫头" />
                        </label>
                        <label>
                            <span>学习</span>
                            <input type="checkbox" name="like" value="学习" />
                        </label>
                        <label>
                            <span>看书</span>
                            <input type="checkbox" name="like" value="看书" />
                        </label>
                    </div>
                    <input type="submit" value="保存" />
                </form>
            </body>
        </html>
            `;
            res.end(sHtml);
        } else if (pathname === '/dele') {
            let id = queryString.parse(url.parse(req.url).query).id;
            User.findOneAndDelete({_id: id}).then(() => {
                res.writeHead(301, {
                    Location: '/list'
                });
                res.end();
            });
        }
    } else if (method === 'POST') {
        if(pathname === '/add') {
            let params = ''
            req.on('data', param => params += param);
            req.on('end', async () => {
                console.log(queryString.parse(params));
                await User.create(queryString.parse(params));
                res.writeHead(301, {
                    Location: '/list'
                });
                res.end();
            })
        } else if (pathname === '/updata') {

        }
    }
})

app.listen('3000');