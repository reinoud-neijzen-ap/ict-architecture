const AWS = require('aws-sdk');

AWS.config.update({ region: "us-east-1"});

exports.handler = function (event, context, callback) {
    const ddb = new AWS.DynamoDB({ apiVerson: "2012-10-08 "});
    
    let data = JSON.stringify(event)
    data = JSON.parse(data);

    let dataI = data.body;
    let buff = new Buffer(dataI, 'base64');
    let text = buff.toString('ascii');

    text = JSON.parse(text);

    let userLogin = text.key1;
    let userPassword = text.key2;
    
    const params = {
        TableName: "Users",
        Key: {
            id: {
                S: userLogin
            }
        }
    }
    
    ddb.getItem(params, (err, data) => {
        if(err) {
            console.log(err);
        }
        let username = data.Item.id.S;
        let password = data.Item.password.S;
        
        if(userLogin == username && userPassword == password) {
            callback(null, true)
        }
        callback(null, false)
    })

}







