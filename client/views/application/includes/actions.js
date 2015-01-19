Template.tableActions.events({
  'click #confirm-delete' : function(e, t) {
    function lookup(obj) {
      var ref = window, arr;
      if (typeof obj === "string") {
        arr = obj.split(".");
        while(arr.length && (ref = ref[arr.shift()]));
        if (!ref) {
          throw new Error(obj + " is not in the window scope");
        }
        return ref;
      }
      return obj;
    }

    //console.log($(e.currentTarget).data('id'), $(e.currentTarget).data('collection'))
    bootbox.dialog({
      message: "Вы действительно желаете удалить выбранную запись?",
      //title: "Custom title",
      buttons: {
        success: {
          label: "Отмена",
          className: "btn-default",
          callback: function() {
            //Example.show("great success");
          }
        },
        main: {
          label: "Удалить",
          className: "btn-primary",
          callback: function() {
            var collection = lookup($(e.currentTarget).data('collection'));
            collection.remove($(e.currentTarget).data('id'));
          }
        }
      }
    });
  }
});

Template.afCheckbox_bootstrap3Full.replaces("afCheckbox_bootstrap3");
