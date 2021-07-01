function user(user) {
  console.log('user message');
}
user.prototype.username = (username) => {
  console.log('username:' + username);
};
user.prototype.password = (password) => {
  console.log('password:' + password);
};
user = new user();
user.username('dx');
user.password('123456');
