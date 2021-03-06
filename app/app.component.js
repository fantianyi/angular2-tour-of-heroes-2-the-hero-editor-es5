(function(app) {
  class Hero {
    constructor(param) {
      this.id = param.id;
      this.name = param.name;
    }
  }

  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: `
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="hero.name" placeholder="name">
        </div>
      `
    })
    .Class({
      constructor: function() {
        this.title = 'Tour of Heroes';
        this.hero = new Hero({id: 1, name: "Windstorm"});
      }
    });
})(window.app || (window.app = {}));