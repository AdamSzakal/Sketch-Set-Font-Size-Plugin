var onRun = function (context) {
  var doc = context.document;
  var selection = context.selection;

  // Sets the line height as multiple of the font size (cmd l)

  var textLayers = [];

  if (selection.count() > 0) {

  	// Loop through selected layers
  	for (var i = 0; i < selection.count(); i++) {

  		var s = selection[i];

  		// Check if the layer is a text layer
  		if (s.className() == "MSTextLayer"){
  			textLayers.push(s);
  	  	}
  	}

  	if (textLayers.length > 0) {

  		// get first text layer
  		var firstTextLayer = textLayers[0];

  		// Calculate initial font size
  		var fontSize = firstTextLayer.fontSize();

  		// Show a dialog, asking for the desired font size
  		var newFontSize = parseFloat([doc askForUserInput:"Set new font size, yo. 👇" initialValue:fontSize]);

      //Loop through all selected text layers and  
  		for (var j = 0; j < textLayers.length; j++) {
  			var textLayer = textLayers[j];
        textLayer.setFontSize(newFontSize);
  		}

  	} else {
  		doc.showMessage("Uhh... you kinda have to select one more text layers there, buddy.");
  	}
  } else {
  	doc.showMessage("Uhh... you kinda have to select one more text layers.")
  }

}
