var app = angular.module('attendanceApp',['react']);
var AutoManager = React.createClass({
    render : function() {
        return React.DOM.span (null,
            <div>
                <ListShow />
            </div>
        );
    }
});

var ListShow = React.createClass({
   render : function() {
       var ListItems = this.props.data.map(function(item,i){
          return (
              <li key={i} data={item}>
                  {data}
              </li>
          )
       });
       return React.DOM.span (
            <datalist id="list">
                {ListItems}
            </datalist>
       );
   }
});
app.value('AutoManager',AutoManager);
angular.bootstrap(document,['attendanceApp']);

// app.directive('automanager', function(reactDirective){
//     return reactDirective('AutoManager');
// });
// ReactDOM.render(<automanager items={items} />,
//     document.getElementById('searchBox'));