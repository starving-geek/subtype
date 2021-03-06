/*
 * Tyler Deans
 * May 25, 2016
 */



function SubtypeModel(_simModel) {
    // save a link to the model
    this.simModel = _simModel;
}

// randomly generates the type of question to ask
function getQuestionType() {
    var randNum = getRandomInt(1, 3); // random number between 1 and 2

    if (randNum === 1) {
        return "subtype";
    } else {
        return "runtime";
    }
}

/*
 * One of the questions ask the student if the code will run. In the code snippet
 * there can be a function definition
 * There are different functions that can be called depending on the subtype.
 *
*/
function getFunction() {
    var randIndex = getRandomInt(0, 3) // random number between 0 and 2
    var functions = [
        'fun makeGreen (p:{color:string}) = p.color = "green"',
        'val distToOrigin:(p{x:real, y:real}) = Math.sqrt(p.x * p.x + p.y * p.y)', // complete def
        'fun setX (p:{x:real}) = x = 4.0',
        'fun setY (p:{y:real}) = y = 4.0'
    ];
    return functions[randIndex];
}

/*
 * Only called when the question is will this code run?
 * Depending on the if the there is a function used or is there only a
 * variable a particular statment is returned.
*/
function getStatment() {
    var randIndex = getRandomInt(0, 3) // random number between 0 and 3
    var statements = [

        'val _ = makeGreen(c)',
        'val _ = c.x',
        'val _ = c.y',
        'val _ = c.f' // runtime error
    ];


    return statements[randIndex];
}

/*
 * For will this code run question.
 * The string carrying the variable definition
*/
function getVariable() {
    var randIndex = getRandomInt(0, 3);
    var variables = [
        'val c:{x:real, y:real} = {x=3.0, y=4.0}',
        'val c:{color:string} = {color = "brown"}',
        'val c:{x:real, y:real, color:string} = {x=3.0, y=4.0, color="brown"}'
    ];

    return variables[randIndex];
}
// For the type question, this method randomly generates a type which could be a subtype of {x:real, y:real}.
function getType() {
    var randIndex = getRandomInt(0, 6);
    var types = [
        '{x:real, y:real, color:string}', // subtype of {x:real, y:real}
        '{y:real, x:real}', // subtype of {x:real, y:real}
        '{x:real}', // not a subtype
        '{x:string, y:string, color:string}', // not a subtype
        '{x:real, y:real, z:bool}', // subtype of {x:real, y:real}
        '{x:real, y:real} ' // A type is a subtype of itself ({x:real, y:real})
    ];

    return types[randIndex];
}

/*
 * Create the subtype expression based on the question type and the statements involved
 * If there is a function definition you must include the call to that function.
*/

function getSubtypeExpression(questionType) {
    var subtypeString = "";

    if (questionType === "runtime") {
        var variableType = getType();
        var statement = getStatment();
        var variableFunction = getFunction();
    } else {
        var type = getType();
        subtypeString = type;
    }

    return subtypeString;
}

// Calculates the answer based on the question type
function getAnswer(questionType) {
    var boolValue; // a boolean variable (true or false)
}

/*
 * Generates the code snippet which will bw displayed on the web page
 * Also returns the answer to the question based on the question type
*/
SubtypeModel.prototype.evalSubtypeExpression = function() {
    var questionType = getQuestionType();
    //this.subtypeExpression = "<pre>" + getSubtypeExpression(questionType) + "\n" + "</pre>";

    if (questionType === "subtype") {
        this.subtypeExpression += "<label id=\"subtypeQuestion\"> Is that a subtype of {x:real, y:real}?</label>";
        //return getAnswer(questionType);
    } else {
        this.subtypeExpression += "<label id=\"subtypeQuestion\"> Will this code run?</label>";
        //return getAnswer(questionType);
    }

}

