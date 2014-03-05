    App.NewCardFormView = Backbone.View.extend({
      template: _.template($('#new-card-template').html()),

      events: {
        'click #add-card': 'addCard'
      },

      render: function() {
        var html = this.template();
        this.$el.html(html);
        return this;
      },

      addCard: function() {
        var userInputletter = this.$el.find('#letter').val();
        var newCard = new App.Card({letter: userInputletter});
        App.cards.push(newCard);
        App.renderCardList(App.cards);
      }
    })