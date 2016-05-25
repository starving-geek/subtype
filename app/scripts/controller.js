 /* Rich Simpson
  * Tyler Deans
  * May 25, 2016
  * controller.js
  */

 /*
  * Create the sim controller
  */
 function SimController() {
   // create a data model that exposes parameters to smart sparrow
   this.simModel = new SimModel(this, {
     mastery: 'false',
     numerator: 7,
     denominator: 10,
     firstQuestion: 0,
     lastQuestion: 0,
   });

   // expose model data to Smart Sparrow
   pipit.CapiAdapter.expose('mastery', this.simModel);
   pipit.CapiAdapter.expose('numerator', this.simModel);
   pipit.CapiAdapter.expose('denominator', this.simModel);
   pipit.CapiAdapter.expose('firstQuestion', this.simModel);
   pipit.CapiAdapter.expose('lastQuestion', this.simModel);


   // let smart sparrow know that the sim is ready to accept values
   pipit.Controller.notifyOnReady();
   // create the view controller
   this.simView = new SimView(this);
 }

 SimController.prototype.initializeController = function() {
   // initialize the model
   this.simModel.initializeModel();
   // initialize the view
   this.setupDisplay();
 }


 SimController.prototype.setModelValue = function(_name, _newValue) {
   this.simModel.set(_name, _newValue);
 }


 SimController.prototype.getModelValue = function(_name) {
   return this.simModel.get(_name);
 }


 SimController.prototype.triggerCheck = function() {
   pipit.Controller.triggerCheck();
 }


 SimController.prototype.setupDisplay = function() {
   this.simModel.subtypeExpression.evalSubtypeExpression();
   // choose a question randomly
   var question = this.simModel.questionBank.chooseQuestion(this.getModelValue('firstQuestion'), this.getModelValue('lastQuestion'));
   // store the answer(s) to the question we chose in the last step
   this.simModel.questionBank.setAnswers(this.simModel.subtypeExpression);
   // draw the results for the last five questions
   this.simView.questionBankView.drawAnswerHistory(this.simModel.questionBank.answerHistory);
   // draw the expressions on the screen
   this.simView.subtypeView.drawSubtypeExpression(this.simModel.subtypeExpression);
   // display the next question
   this.simView.questionBankView.presentQuestion(question);
 }

 // Create a new Controller for sim
 // The controller interacts with the model and the view
 var simController = new SimController();


 $(document).ready(function() {
   // let smart sparrow know that the sim is ready to accept values
   //pipit.Controller.notifyOnReady();
 });