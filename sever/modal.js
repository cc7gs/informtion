const mongoose=require('mongoose');
// 链接mongo 并且使用mashroom这个集合
const DB_URL='mongodb://localhost:27017/mashroom'
mongoose.connect(DB_URL);