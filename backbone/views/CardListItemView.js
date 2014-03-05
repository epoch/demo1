    App.CardListItemView = Backbone.View.extend({      
      className: 'column',
      template: _.template('<%= letter %>'),
      events: {
        'click': 'showCard' 
      },

      render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
      },

      showCard: function() {
        var view = new App.CardView({model: this.model, el: $('#content') });
        view.render();
      }
    })