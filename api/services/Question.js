var schema = new Schema({
    name:String,
    option:[{
        name:String,
        icon:String
    }]    
});

schema.plugin(deepPopulate, {
    
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);

module.exports = mongoose.model('Question', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    get:function(data,callback){

    },
    

    

};

    
module.exports = _.assign(module.exports, exports, model);