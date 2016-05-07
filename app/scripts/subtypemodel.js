/*
 * Tyler Deans
 * May 6, 2016
 */



function SubtypeModel(_simModel) {
    // save a link to the model
    this.simModel = _simModel;
}

function getQuestionType() {
    var randNum = getRandomInt(1, 4); // random number between 1 and 3

    if (randNum === 1) {
        return "integer";
    } else if (randNum === 2) {
        return "string";
    } else {
        return "boolean";
    }
}

function getSubtypeExpressionString() {

}
/*
 * Generates the code snippet which will bw displayed on the web page
 * Also calculates the answer to the question based on the question type
*/
SubtypeModel.prototype.evalSubtypeExpression = function() {
    this.subtypeExpression = "<pre>" + getSubtypeExpressionString() + "\n";
    var questionType = getQuestionType();
    this.subtypeExpression += "</pre>"

}

