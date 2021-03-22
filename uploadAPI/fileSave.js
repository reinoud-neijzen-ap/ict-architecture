const aws = require('aws-sdk');
var s3 = new aws.S3();

exports.handler = async (event, context, callback) => {
    //return await saveFile(event);
    var res = await saveFile(event);
    callback(null,res)
};

function saveFile(event) {
  var uuid = uuidv4();
  var filetype = event["queryStringParameters"]['filetype']
  var contenttype = event["queryStringParameters"]['contenttype']
  
console.log(filetype + "\n" + contenttype)

  var url = s3.getSignedUrl("putObject", {
    Bucket:"filebucket-ictarch", 
    Key: uuid + "." + filetype,
    ContentType: contenttype
  });
  
  var response = {
      "url": url,
      "uuid": uuid + "." + filetype
  }
  
  return response
  
  function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
    });
  }

}
