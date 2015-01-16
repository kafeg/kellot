// AutoForm.addHooks(null, {
//   onError: function (name, error, template) {
//     console.log(name + " error:", error);
//   }
// });
//
// AutoForm.hooks({
//   registerNewCompanyForm: {
//     before: {
//       insert: function(doc, template) {
//         //return doc; (synchronous)
//         //return false; (synchronous, cancel)
//         //this.result(doc); (asynchronous)
//         //this.result(false); (asynchronous, cancel)
//         console.log('before insert', doc, template);
//       },
//       update: function(docId, modifier, template) {
//         //return modifier; (synchronous)
//         //return false; (synchronous, cancel)
//         //this.result(modifier); (asynchronous)
//         //this.result(false); (asynchronous, cancel)
//         console.log('before update');
//       },
//       // "methodName": function(doc, template) {
//       //   //return doc; (synchronous)
//       //   //return false; (synchronous, cancel)
//       //   //this.result(doc); (asynchronous)
//       //   //this.result(false); (asynchronous, cancel)
//       // }
//     },
//
//     // The same as the callbacks you would normally provide when calling
//     // collection.insert, collection.update, or Meteor.call
//     after: {
//       insert: function(error, result, template) { console.log('after insert'); },
//       update: function(error, result, template) { console.log('after update'); },
//       //"methodName": function(error, result, template) {}
//     },
//
//     // Called when form does not have a `type` attribute
//     onSubmit: function(insertDoc, updateDoc, currentDoc) {
//       // You must call this.done()!
//       //this.done(); // submitted successfully, call onSuccess
//       //this.done(new Error('foo')); // failed to submit, call onError with the provided error
//       //this.done(null, "foo"); // submitted successfully, call onSuccess with `result` arg set to "foo"
//       console.log('onSubmit', insertDoc, updateDoc, currentDoc);
//     },
//
//     // Called when any operation succeeds, where operation will be
//     // "insert", "update", "submit", or the method name.
//     onSuccess: function(operation, result, template) { console.log('onSuccess', result); },
//
//     // Called when any operation fails, where operation will be
//     // "validation", "insert", "update", "submit", or the method name.
//     onError: function(operation, error, template) { console.log('onError', error); },
//
//     // Called every time the form is revalidated, which can be often if keyup
//     // validation is used.
//     formToDoc: function(doc, ss, formId) { console.log('formToDoc', doc, ss, formId); },
//
//     // Called whenever `doc` attribute reactively changes, before values
//     // are set in the form fields.
//     docToForm: function(doc, ss, formId) { console.log('docToForm'); },
//
//     // Called at the beginning and end of submission, respectively.
//     // This is the place to disable/enable buttons or the form,
//     // show/hide a "Please wait" message, etc. If these hooks are
//     // not defined, then by default the submit button is disabled
//     // during submission.
//     beginSubmit: function(formId, template) { console.log('beginSubmit', formId, template); },
//     endSubmit: function(formId, template) { console.log('endSubmit', formId, template); }
//   }
// });
