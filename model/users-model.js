const db =  [
{name : 'joe'},
{name : 'frank'}
]




function get() {
    return db('users');
}

module.exports = {
    get}