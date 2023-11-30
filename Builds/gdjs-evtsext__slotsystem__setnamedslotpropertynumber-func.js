
if (typeof gdjs.evtsExt__SlotSystem__SetNamedSlotPropertyNumber !== "undefined") {
  gdjs.evtsExt__SlotSystem__SetNamedSlotPropertyNumber.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SlotSystem__SetNamedSlotPropertyNumber = {};


gdjs.evtsExt__SlotSystem__SetNamedSlotPropertyNumber.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SlotSystem__IsNamedSlotFilled.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SpaceName") : ""), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SlotName") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtsExt__SlotSystem__SetNamedSlotContent.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SpaceName") : ""), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SlotName") : ""), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Property") : ""), "Properties", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__SlotSystem__SetNamedSlotPropertyNumber.func = function(runtimeScene, Value, SpaceName, SlotName, Property, parentEventsFunctionContext) {
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
if (argName === "Value") return Value;
if (argName === "SpaceName") return SpaceName;
if (argName === "SlotName") return SlotName;
if (argName === "Property") return Property;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SlotSystem__SetNamedSlotPropertyNumber.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__SlotSystem__SetNamedSlotPropertyNumber.registeredGdjsCallbacks = [];