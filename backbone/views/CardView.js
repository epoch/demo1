    App.CardView = Backbone.View.extend({
      template: _.template('<div id="show"><a href=""><%= letter %></a></div>'),

      events: {
        'click a': 'blink'
      },

      render: function() {
        var html = this.template(this.model.toJSON());
        this.$el.html(html);
        return this;
      },

      blink: function(e) {
        e.preventDefault();
        var $a = this.$el.find('a');
        $a.fadeOut(200, function() {
          $a.fadeIn(200);
        }); 
      }      
    })