gdjs.MainOfficeCode = {};
gdjs.MainOfficeCode.GDMainOfficeObjects1= [];
gdjs.MainOfficeCode.GDMainOfficeObjects2= [];
gdjs.MainOfficeCode.GDNewBitmapTextObjects1= [];
gdjs.MainOfficeCode.GDNewBitmapTextObjects2= [];
gdjs.MainOfficeCode.GDFloor_9595MainBaseObjects1= [];
gdjs.MainOfficeCode.GDFloor_9595MainBaseObjects2= [];
gdjs.MainOfficeCode.GDWallBorderLeftObjects1= [];
gdjs.MainOfficeCode.GDWallBorderLeftObjects2= [];
gdjs.MainOfficeCode.GDWallBorderBottomObjects1= [];
gdjs.MainOfficeCode.GDWallBorderBottomObjects2= [];
gdjs.MainOfficeCode.GDWallBorderRightObjects1= [];
gdjs.MainOfficeCode.GDWallBorderRightObjects2= [];
gdjs.MainOfficeCode.GDWallBorderTopObjects1= [];
gdjs.MainOfficeCode.GDWallBorderTopObjects2= [];
gdjs.MainOfficeCode.GDPlayerSemiObjects1= [];
gdjs.MainOfficeCode.GDPlayerSemiObjects2= [];


gdjs.MainOfficeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerSemi"), gdjs.MainOfficeCode.GDPlayerSemiObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MainOfficeCode.GDPlayerSemiObjects1.length !== 0 ? gdjs.MainOfficeCode.GDPlayerSemiObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 4, "", 0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PlayerSemi"), gdjs.MainOfficeCode.GDPlayerSemiObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MainOfficeCode.GDPlayerSemiObjects1.length !== 0 ? gdjs.MainOfficeCode.GDPlayerSemiObjects1[0] : null), true, "", 0);
}}

}


};

gdjs.MainOfficeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainOfficeCode.GDMainOfficeObjects1.length = 0;
gdjs.MainOfficeCode.GDMainOfficeObjects2.length = 0;
gdjs.MainOfficeCode.GDNewBitmapTextObjects1.length = 0;
gdjs.MainOfficeCode.GDNewBitmapTextObjects2.length = 0;
gdjs.MainOfficeCode.GDFloor_9595MainBaseObjects1.length = 0;
gdjs.MainOfficeCode.GDFloor_9595MainBaseObjects2.length = 0;
gdjs.MainOfficeCode.GDWallBorderLeftObjects1.length = 0;
gdjs.MainOfficeCode.GDWallBorderLeftObjects2.length = 0;
gdjs.MainOfficeCode.GDWallBorderBottomObjects1.length = 0;
gdjs.MainOfficeCode.GDWallBorderBottomObjects2.length = 0;
gdjs.MainOfficeCode.GDWallBorderRightObjects1.length = 0;
gdjs.MainOfficeCode.GDWallBorderRightObjects2.length = 0;
gdjs.MainOfficeCode.GDWallBorderTopObjects1.length = 0;
gdjs.MainOfficeCode.GDWallBorderTopObjects2.length = 0;
gdjs.MainOfficeCode.GDPlayerSemiObjects1.length = 0;
gdjs.MainOfficeCode.GDPlayerSemiObjects2.length = 0;

gdjs.MainOfficeCode.eventsList0(runtimeScene);

return;

}

gdjs['MainOfficeCode'] = gdjs.MainOfficeCode;
