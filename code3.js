gdjs.DeathCode = {};
gdjs.DeathCode.localVariables = [];
gdjs.DeathCode.GDTryAgainObjects1= [];
gdjs.DeathCode.GDTryAgainObjects2= [];
gdjs.DeathCode.GDQuitObjects1= [];
gdjs.DeathCode.GDQuitObjects2= [];
gdjs.DeathCode.GDDeadObjects1= [];
gdjs.DeathCode.GDDeadObjects2= [];


gdjs.DeathCode.mapOfGDgdjs_9546DeathCode_9546GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.DeathCode.GDQuitObjects1});
gdjs.DeathCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.DeathCode.mapOfGDgdjs_9546DeathCode_9546GDTryAgainObjects1Objects = Hashtable.newFrom({"TryAgain": gdjs.DeathCode.GDTryAgainObjects1});
gdjs.DeathCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};gdjs.DeathCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.DeathCode.GDQuitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.DeathCode.mapOfGDgdjs_9546DeathCode_9546GDQuitObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.DeathCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TryAgain"), gdjs.DeathCode.GDTryAgainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.DeathCode.mapOfGDgdjs_9546DeathCode_9546GDTryAgainObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.DeathCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.DeathCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DeathCode.GDTryAgainObjects1.length = 0;
gdjs.DeathCode.GDTryAgainObjects2.length = 0;
gdjs.DeathCode.GDQuitObjects1.length = 0;
gdjs.DeathCode.GDQuitObjects2.length = 0;
gdjs.DeathCode.GDDeadObjects1.length = 0;
gdjs.DeathCode.GDDeadObjects2.length = 0;

gdjs.DeathCode.eventsList2(runtimeScene);
gdjs.DeathCode.GDTryAgainObjects1.length = 0;
gdjs.DeathCode.GDTryAgainObjects2.length = 0;
gdjs.DeathCode.GDQuitObjects1.length = 0;
gdjs.DeathCode.GDQuitObjects2.length = 0;
gdjs.DeathCode.GDDeadObjects1.length = 0;
gdjs.DeathCode.GDDeadObjects2.length = 0;


return;

}

gdjs['DeathCode'] = gdjs.DeathCode;
