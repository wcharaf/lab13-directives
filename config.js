var app=angular.module('dir',[]);

app.directive('hi', function(){
  return {
    restrict: 'EA',
    template: "<h1>what's up</h1>",
    replace: false
  };
});

app.controller('myController', [function($scope){
console.log($scope);
var n = $scope.menu.length;
for (var i = 0; i < n; i++) {
  app.directive('nav', function(){
    return {
      restrict: 'EA',
      template: '<button type="button" class="btn btn-primary"> {{menu[i]}} </button>',
      replace: false
      };
    });
};
}]);

app.directive('pics', function(){
  return {
    restrict: 'EA',
    template: " <figure><img src='http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg' alt='The Pulpit Rock' width='304' height='228'></figure>",
    replace: false
  };
});
