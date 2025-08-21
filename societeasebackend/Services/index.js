const Member = require('./member')
const society= require('./society')
const Incident=require('./Incident');
const notices = require('./notices');
const donations = require('./donations');
const maintainance = require('./maintainance');
const records = require('./records');
const Poll = require('./poll');
const Users = require('./users')

module.exports=function(app){
    app.use('/socity/',society);
    app.use('/member/',Member);
    app.use('/Incident/', Incident );
    app.use('/notices/', notices );
    app.use('/donations/', donations);
    app.use('/maintainance/',maintainance);
    app.use('/records/',records);
    app.use('/poll/',Poll);
    app.use('/users/',Users);

}