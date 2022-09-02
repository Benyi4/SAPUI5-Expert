//eslint-disable-next-line no-undef
sap.ui.define([
    "sap/ui/core/ComponentContainer"
], 
/**
 * @param{typeof sap.ui.core.ComponentContainer} ComponentContainer
 */
    function(ComponentContainer) {
        // eslint-disable-next-line no-undef

        "use strict";
        
        new ComponentContainer({
            name: "dtt.SAPUI5",
            settings: {
                id: "SAPUI5"
            },
            async:true     
        }).placeAt("Contenido");
    });