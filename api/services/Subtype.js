var schema = new Schema({
    name:String,
    brand:{
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        index: true
    }
    
});

schema.plugin(deepPopulate, {
    populate: {
        "brand": {
            select: '_id name logo'
        }
    }    
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);

module.exports = mongoose.model('Subtype', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema,'brand','brand'));
var model = {
    getAll : function(data,callback){
        Subtype.find().lean().deepPopulate("brand").exec(function (err, found) {
                        if(err){
                            callback(err,null);
                        }else{
                            if(_.isEmpty(found)){
                                callback(null,[]);
                            }else{
                                callback(null,found);
                            }
                        }
                    });
    },
    
};

    
module.exports = _.assign(module.exports, exports, model);