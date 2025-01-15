
if (typeof gdjs.evtsExt__SpriteMultitouchJoystick__AcceleratedSpeed !== "undefined") {
  gdjs.evtsExt__SpriteMultitouchJoystick__AcceleratedSpeed.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SpriteMultitouchJoystick__AcceleratedSpeed = {};


gdjs.evtsExt__SpriteMultitouchJoystick__AcceleratedSpeed.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CurrentSpeed")) || 0 : 0) < eventsFunctionContext.getArgument("TargetedSpeed"));
}
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CurrentSpeed")) || 0 : 0) > eventsFunctionContext.getArgument("TargetedSpeed"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CurrentSpeed")) || 0 : 0) < 0);
}
}
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CurrentSpeed")) || 0 : 0) >= 0);
}
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}}

}


};gdjs.evtsExt__SpriteMultitouchJoystick__AcceleratedSpeed.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CurrentSpeed")) || 0 : 0) > eventsFunctionContext.getArgument("TargetedSpeed"));
}
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CurrentSpeed")) || 0 : 0) < eventsFunctionContext.getArgument("TargetedSpeed"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CurrentSpeed")) || 0 : 0) > 0);
}
}
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CurrentSpeed")) || 0 : 0) <= 0);
}
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}}

}


};gdjs.evtsExt__SpriteMultitouchJoystick__AcceleratedSpeed.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CurrentSpeed")) || 0 : 0) < 0);
}
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CurrentSpeed")) || 0 : 0) > 0);
}
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}}

}


};gdjs.evtsExt__SpriteMultitouchJoystick__AcceleratedSpeed.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TargetedSpeed")) || 0 : 0) < 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SpriteMultitouchJoystick__AcceleratedSpeed.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TargetedSpeed")) || 0 : 0) > 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SpriteMultitouchJoystick__AcceleratedSpeed.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TargetedSpeed")) || 0 : 0) == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SpriteMultitouchJoystick__AcceleratedSpeed.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = 0; }}}

}


};gdjs.evtsExt__SpriteMultitouchJoystick__AcceleratedSpeed.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{/* Unknown instruction - skipped. */}
{ //Subevents
gdjs.evtsExt__SpriteMultitouchJoystick__AcceleratedSpeed.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__AcceleratedSpeed.func = function(runtimeScene, CurrentSpeed, TargetedSpeed, SpeedMax, Acceleration, Deceleration, parentEventsFunctionContext) {
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
if (argName === "CurrentSpeed") return CurrentSpeed;
if (argName === "TargetedSpeed") return TargetedSpeed;
if (argName === "SpeedMax") return SpeedMax;
if (argName === "Acceleration") return Acceleration;
if (argName === "Deceleration") return Deceleration;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SpriteMultitouchJoystick__AcceleratedSpeed.eventsList4(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__SpriteMultitouchJoystick__AcceleratedSpeed.registeredGdjsCallbacks = [];