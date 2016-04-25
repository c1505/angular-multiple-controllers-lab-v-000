function ContactController() {
  var vm = this;
  this.name = "first"
  this.email = "email@gmail.com"
  this.phone = "8675309"

  this.changeName = function () {
    vm.name = 'Something else!'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)