import mongoose from "mongoose"

var Schema = mongoose.Schema;

var categorySchema = new Schema({

})

var Category = mongoose.model('Category', categorySchema);

export default Category;