Company = new Mongo.Collection('company');

Company.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Наименование",
    min: 3,
    max: 200
  },
  descriotion: {
    type: String,
    label: "Краткое описание",
    min: 20,
    max: 1000,
    autoform: {
      rows: 5
    }
  },
  userId: {
    type: String,
    label: "Владелец"
  }
}));
