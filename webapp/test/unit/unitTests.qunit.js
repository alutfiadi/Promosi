/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ZAL/Promosi/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});