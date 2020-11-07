import mongoose from "mongoose"

var Schema = mongoose.Schema;

var mainCategorySchema = new Schema({
    name: String,
})

var Category = mongoose.model('maincategories', mainCategorySchema);

export default Category;