const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/templateDome', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log('mongoose success')).catch(err=>console.log(err));