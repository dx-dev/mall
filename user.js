function user(user) {
  console.log('username:' + user);
}
user.prototype.password = (password) => {
  console.log('password:' + password);
};
user = new user('dx');
user.password('123456');
