
if (typeof gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition !== "undefined") {
  gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition = {};
gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PositionX")) || 0 : 0) > gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.GDObjectObjects1[0].getLayer()), 0) + 0.75 * (( gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.GDObjectObjects1[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PositionX")) || 0 : 0) < gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.GDObjectObjects1[0].getLayer()), 0) - 0.75 * (( gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.GDObjectObjects1[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PositionY")) || 0 : 0) > gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.GDObjectObjects1[0].getLayer()), 0) + 0.75 * (( gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.GDObjectObjects1[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PositionY")) || 0 : 0) < gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.GDObjectObjects1[0].getLayer()), 0) - 0.75 * (( gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.GDObjectObjects1[0].getWidth()));
}
}
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.func = function(runtimeScene, Object, PositionX, PositionY, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
  localVariables: [],
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
if (argName === "PositionX") return PositionX;
if (argName === "PositionY") return PositionY;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__SpriteMultitouchJoystick__IsValidJoystickPosition.registeredGdjsCallbacks = [];