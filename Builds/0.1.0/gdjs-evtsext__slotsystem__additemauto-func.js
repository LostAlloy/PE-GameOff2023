
if (typeof gdjs.evtsExt__SlotSystem__AddItemAuto !== "undefined") {
  gdjs.evtsExt__SlotSystem__AddItemAuto.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SlotSystem__AddItemAuto = {};


gdjs.evtsExt__SlotSystem__AddItemAuto.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Maximum")) || 0 : 0) == 0);
}
if (isConditionTrue_0) {
{gdjs.evtsExt__SlotSystem__SetSlotCount.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpQty")), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SpaceName") : ""), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpQty").sub(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Maximum")) || 0 : 0) > 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.debuggerTools.log("found " + gdjs.evtTools.common.toString(Math.min(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpQty")), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Maximum")) || 0 : 0))) + "/" + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal")), "", "");
}{gdjs.evtsExt__SlotSystem__SetSlotCount.func(runtimeScene, Math.min(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpQty")), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Maximum")) || 0 : 0)), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SpaceName") : ""), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpQty").sub((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Maximum")) || 0 : 0));
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal").setNumber(-(1));
}}

}


};gdjs.evtsExt__SlotSystem__AddItemAuto.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal")) == -(1);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpQty").setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal")) > -(1);
if (isConditionTrue_0) {
{gdjs.evtsExt__SlotSystem__SetSlotItem.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SpaceName") : ""), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal")), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Item") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__SlotSystem__SetSlotMax.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Maximum")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SpaceName") : ""), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.evtsExt__SlotSystem__AddItemAuto.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__SlotSystem__AddItemAuto.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__SlotSystem__IsSlotUnlimited.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SpaceName") : ""), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Maximum")) || 0 : 0) == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpQty").setNumber(0);
}{gdjs.evtsExt__SlotSystem__SetSlotCount.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Quantity")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SpaceName") : ""), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__SlotSystem__SetSlotMax.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Maximum")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SpaceName") : ""), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__SlotSystem__IsSlotUnlimited.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SpaceName") : ""), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_Diff").setNumber(Math.min(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpQty")), gdjs.evtsExt__SlotSystem__SlotMax.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SpaceName") : ""), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - gdjs.evtsExt__SlotSystem__SlotCount.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SpaceName") : ""), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtsExt__SlotSystem__SetSlotCount.func(runtimeScene, gdjs.evtsExt__SlotSystem__SlotCount.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SpaceName") : ""), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_Diff"))), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SpaceName") : ""), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__SlotSystem__SetSlotMax.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Maximum")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SpaceName") : ""), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpQty").sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_Diff")));
}}

}


};gdjs.evtsExt__SlotSystem__AddItemAuto.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("FloodAuto") : false);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal").setNumber(gdjs.evtsExt__SlotSystem__FirstItemSlotAvailable.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SpaceName") : ""), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Item") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("FloodAuto") : false);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpQty").setNumber(0);
}}

}


};gdjs.evtsExt__SlotSystem__AddItemAuto.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal")) == -(1);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal").setNumber(gdjs.evtsExt__SlotSystem__FirstEmptySlot.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SpaceName") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
{ //Subevents
gdjs.evtsExt__SlotSystem__AddItemAuto.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal")) > -(1);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SlotSystem__AddItemAuto.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpQty")) > 0;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SlotSystem__AddItemAuto.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__SlotSystem__AddItemAuto.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let stopDoWhile_0 = false;
do {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpQty")) > 0;
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__SlotSystem__AddItemAuto.eventsList4(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


};gdjs.evtsExt__SlotSystem__AddItemAuto.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SlotSystem__DoesSpaceExists.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SpaceName") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal").setNumber(gdjs.evtsExt__SlotSystem__FirstItemSlotAvailable.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SpaceName") : ""), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Item") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpQty").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Quantity")) || 0 : 0));
}
{ //Subevents
gdjs.evtsExt__SlotSystem__AddItemAuto.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SlotSystem__AddItemAuto.func = function(runtimeScene, SpaceName, Item, Quantity, Maximum, FloodAuto, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "SpaceName") return SpaceName;
if (argName === "Item") return Item;
if (argName === "Quantity") return Quantity;
if (argName === "Maximum") return Maximum;
if (argName === "FloodAuto") return FloodAuto;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SlotSystem__AddItemAuto.eventsList6(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__SlotSystem__AddItemAuto.registeredGdjsCallbacks = [];