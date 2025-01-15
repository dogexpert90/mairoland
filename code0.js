gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDPlayObjects1= [];
gdjs.MenuCode.GDPlayObjects2= [];
gdjs.MenuCode.GDQuitObjects1= [];
gdjs.MenuCode.GDQuitObjects2= [];
gdjs.MenuCode.GDLeve1Objects1= [];
gdjs.MenuCode.GDLeve1Objects2= [];
gdjs.MenuCode.GDlveObjects1= [];
gdjs.MenuCode.GDlveObjects2= [];
gdjs.MenuCode.GDlve2Objects1= [];
gdjs.MenuCode.GDlve2Objects2= [];
gdjs.MenuCode.GDLeve2Objects1= [];
gdjs.MenuCode.GDLeve2Objects2= [];
gdjs.MenuCode.GDBlueButtonWithShadowObjects1= [];
gdjs.MenuCode.GDBlueButtonWithShadowObjects2= [];
gdjs.MenuCode.GDScreenOrientationCheckerObjects1= [];
gdjs.MenuCode.GDScreenOrientationCheckerObjects2= [];


gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MenuCode.GDPlayObjects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.MenuCode.GDQuitObjects1});
gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDLeve2Objects1Objects = Hashtable.newFrom({"Leve2": gdjs.MenuCode.GDLeve2Objects1});
gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", false);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDLeve1Objects1Objects = Hashtable.newFrom({"Leve1": gdjs.MenuCode.GDLeve1Objects1});
gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPlayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.MenuCode.GDQuitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDQuitObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16054636);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leve2"), gdjs.MenuCode.GDLeve2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDLeve2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leve1"), gdjs.MenuCode.GDLeve1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDLeve1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;
gdjs.MenuCode.GDQuitObjects1.length = 0;
gdjs.MenuCode.GDQuitObjects2.length = 0;
gdjs.MenuCode.GDLeve1Objects1.length = 0;
gdjs.MenuCode.GDLeve1Objects2.length = 0;
gdjs.MenuCode.GDlveObjects1.length = 0;
gdjs.MenuCode.GDlveObjects2.length = 0;
gdjs.MenuCode.GDlve2Objects1.length = 0;
gdjs.MenuCode.GDlve2Objects2.length = 0;
gdjs.MenuCode.GDLeve2Objects1.length = 0;
gdjs.MenuCode.GDLeve2Objects2.length = 0;
gdjs.MenuCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.MenuCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects2.length = 0;

gdjs.MenuCode.eventsList4(runtimeScene);
gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;
gdjs.MenuCode.GDQuitObjects1.length = 0;
gdjs.MenuCode.GDQuitObjects2.length = 0;
gdjs.MenuCode.GDLeve1Objects1.length = 0;
gdjs.MenuCode.GDLeve1Objects2.length = 0;
gdjs.MenuCode.GDlveObjects1.length = 0;
gdjs.MenuCode.GDlveObjects2.length = 0;
gdjs.MenuCode.GDlve2Objects1.length = 0;
gdjs.MenuCode.GDlve2Objects2.length = 0;
gdjs.MenuCode.GDLeve2Objects1.length = 0;
gdjs.MenuCode.GDLeve2Objects2.length = 0;
gdjs.MenuCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.MenuCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
