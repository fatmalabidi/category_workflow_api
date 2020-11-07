import mongoose from "mongoose"

var Schema = mongoose.Schema;

var mainCategorySchema = new Schema({
    name: String,
})

var Category = mongoose.model('MainCategory', mainCategorySchema);

export default Category;