/*
 * Tyler Deans
 * May 16, 2016
 */



function SubtypeModel(_simModel) {
    // save a link to the model
    this.simModel = _simModel;
}

function getQuestionType() {
    var randNum = getRandomInt(1, 3); // random number between 1 and 2

    if (randNum === 1) {
        return "subtype";
    } else {
        return "runtime";
    }
}

function getFunction() {
    var randIndex = getRandomInt(0, 3) // random number between 0 and 2
    var functions = [
        'fun makeGreen (p:{color:string}) = p.color = "green"',
        'fun setX (p:{x:real}) = x = 4.0',
        'fun setY (p:{y:real}) = y = 4.0'
    ];
    return functions[randIndex];
}

function getStatment(questionType) {
    var randIndex = getRandomInt(0, 7) // random number between 0 and 7
    var statements = [
        'val c:{x:real, y:real} = {x=3.0, y=4.0}',
        'val c:{color:string} = {color = "brown"}',
        'val c:{x:real, y:real, color:string} = {x=3.0, y=4.0, color="brown"}',
        'val _ = c.x',
        'val _ = c.y',
        'val _ = c.f' // runtime error
    ];

}

function getType() {
    var types = [
        '{x:real, y:real, color:string}', // subtype of {x:real, y:real}
        '{y:real, x:real}', // subtype of {x:real, y:real}
        '{x:real}', // not a subtype
        '{x:string, y:string, color:string}', // not a subtype
        '{x:int, y:int, z:bool}', // subtype of {x:real, y:real}
        '{x:int, y:int} ' // A type is a subtype of itself ({x:real, y:real})
    ];
}

function getSubtypeExpression() {
    var subtypeString = "";
}

/*
 * Generates the code snippet which will bw displayed on the web page
 * Also calculates the answer to the question based on the question type
*/
SubtypeModel.prototype.evalSubtypeExpression = function() {
    this.subtypeExpression = "<pre>" + "\n";
    var questionType = getQuestionType();
    this.subtypeExpression += "</pre>"

    if (questionType === "subtype") {
        this.subtypeExpression += "<label id=\"subtypeQuestion\"> Is this a subtype of {x:real, y:real}? True or false?</label>";
    } else {
        this.subtypeExpression += "<label id=\"subtypeQuestion\"> Will this code run? True or false?</label>";
    }

}

