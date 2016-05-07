/*
 * Tyler Deans
 * May 6, 2016
 */


function SubtypeView(_simView) {
    // keep a link to the view
    this.simView = _simView;
}


/*
	draws expressions for the subtype view
*/

SubtypeView.prototype.drawSubtypeExpression = function(_subtype) {

    $('#subtypeDiv').append(_subtype.subtypeExpression);
}