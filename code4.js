gdjs.FinishCode = {};
gdjs.FinishCode.localVariables = [];
gdjs.FinishCode.GDPlayObjects1= [];
gdjs.FinishCode.GDPlayObjects2= [];
gdjs.FinishCode.GDQuitObjects1= [];
gdjs.FinishCode.GDQuitObjects2= [];
gdjs.FinishCode.GDPlay2Objects1= [];
gdjs.FinishCode.GDPlay2Objects2= [];
gdjs.FinishCode.GDQuit2Objects1= [];
gdjs.FinishCode.GDQuit2Objects2= [];


gdjs.FinishCode.mapOfGDgdjs_9546FinishCode_9546GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.FinishCode.GDQuitObjects1});
gdjs.FinishCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.FinishCode.mapOfGDgdjs_9546FinishCode_9546GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.FinishCode.GDPlayObjects1});
gdjs.FinishCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};gdjs.FinishCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.FinishCode.GDQuitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.FinishCode.mapOfGDgdjs_9546FinishCode_9546GDQuitObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.FinishCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.FinishCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.FinishCode.mapOfGDgdjs_9546FinishCode_9546GDPlayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.FinishCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.FinishCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FinishCode.GDPlayObjects1.length = 0;
gdjs.FinishCode.GDPlayObjects2.length = 0;
gdjs.FinishCode.GDQuitObjects1.length = 0;
gdjs.FinishCode.GDQuitObjects2.length = 0;
gdjs.FinishCode.GDPlay2Objects1.length = 0;
gdjs.FinishCode.GDPlay2Objects2.length = 0;
gdjs.FinishCode.GDQuit2Objects1.length = 0;
gdjs.FinishCode.GDQuit2Objects2.length = 0;

gdjs.FinishCode.eventsList2(runtimeScene);
gdjs.FinishCode.GDPlayObjects1.length = 0;
gdjs.FinishCode.GDPlayObjects2.length = 0;
gdjs.FinishCode.GDQuitObjects1.length = 0;
gdjs.FinishCode.GDQuitObjects2.length = 0;
gdjs.FinishCode.GDPlay2Objects1.length = 0;
gdjs.FinishCode.GDPlay2Objects2.length = 0;
gdjs.FinishCode.GDQuit2Objects1.length = 0;
gdjs.FinishCode.GDQuit2Objects2.length = 0;


return;

}

gdjs['FinishCode'] = gdjs.FinishCode;
