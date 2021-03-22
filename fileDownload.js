const aws = require("aws-sdk");
var s3 = new aws.S3();

exports.handler = async (event, context,callback) => {
    var id = event["queryStringParameters"]['fileid'];
    
    await log(id, event);
    var response = getUrl(event,id);
    callback(null,response)

};

function getUrl(event,id){

    var getParams = {
        Bucket: 'filebucket-ictarch',
        Key: id
    };
    
    var ext = id.split(".")[1];

    var url = s3.getSignedUrl("getObject",getParams);
    
    var response = {
        "url": url,
        "fileextension": ext
    }
  
    return response
}

function log(id,event, context, callback){

    var docClient = new aws.DynamoDB.DocumentClient({region: 'us-east-1'});
    var user = event["queryStringParameters"]['user'];
    var tableName = "downloadlog";    
    var uuid = uuidv4();
    
    var date = new Date();
    
    var params = {
        TableName: tableName,
        Item : {
            logID: uuid,
            file: id,
            user: user,
            datum: date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + "-" + (date.getHours() + 1) + ":" + date.getMinutes() + ":" + date.getSeconds()
        }
    };
    
    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Cannot log download");
        } else {
            console.log("Download logged");
        }
    });
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
