function StaffController() {
  var vm = this;
  this.name = "second"
  this.email = "second@gmail.com"
  this.phone = "2222222"

  this.changeName = function() {
    vm.name = "second changed name"
  }
}

angular
  .module('app')
  .controller('StaffController', StaffController)
