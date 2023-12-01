gdjs.MainOfficeCode = {};
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
gdjs.MainOfficeCode.GDNewTileMapMaskObjects1= [];
gdjs.MainOfficeCode.GDNewTileMapMaskObjects2= [];
gdjs.MainOfficeCode.GDFloorBaseObjects1= [];
gdjs.MainOfficeCode.GDFloorBaseObjects2= [];
gdjs.MainOfficeCode.GDCollisionBaseObjects1= [];
gdjs.MainOfficeCode.GDCollisionBaseObjects2= [];


gdjs.MainOfficeCode.mapOfGDgdjs_9546MainOfficeCode_9546GDCollisionBaseObjects1Objects = Hashtable.newFrom({"CollisionBase": gdjs.MainOfficeCode.GDCollisionBaseObjects1});
gdjs.MainOfficeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerSemi"), gdjs.MainOfficeCode.GDPlayerSemiObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MainOfficeCode.GDPlayerSemiObjects1.length !== 0 ? gdjs.MainOfficeCode.GDPlayerSemiObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "", 0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PlayerSemi"), gdjs.MainOfficeCode.GDPlayerSemiObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MainOfficeCode.GDPlayerSemiObjects1.length !== 0 ? gdjs.MainOfficeCode.GDPlayerSemiObjects1[0] : null), true, "", 0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CollisionBase"), gdjs.MainOfficeCode.GDCollisionBaseObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerSemi"), gdjs.MainOfficeCode.GDPlayerSemiObjects1);
{for(var i = 0, len = gdjs.MainOfficeCode.GDPlayerSemiObjects1.length ;i < len;++i) {
    gdjs.MainOfficeCode.GDPlayerSemiObjects1[i].separateFromObjectsList(gdjs.MainOfficeCode.mapOfGDgdjs_9546MainOfficeCode_9546GDCollisionBaseObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.MainOfficeCode.GDCollisionBaseObjects1.length ;i < len;++i) {
    gdjs.MainOfficeCode.GDCollisionBaseObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerSemi"), gdjs.MainOfficeCode.GDPlayerSemiObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainOfficeCode.GDPlayerSemiObjects1.length;i<l;++i) {
    if ( gdjs.MainOfficeCode.GDPlayerSemiObjects1[i].getBehavior("TopDownMovement").isUsingControl("Down") ) {
        isConditionTrue_0 = true;
        gdjs.MainOfficeCode.GDPlayerSemiObjects1[k] = gdjs.MainOfficeCode.GDPlayerSemiObjects1[i];
        ++k;
    }
}
gdjs.MainOfficeCode.GDPlayerSemiObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainOfficeCode.GDPlayerSemiObjects1 */
{for(var i = 0, len = gdjs.MainOfficeCode.GDPlayerSemiObjects1.length ;i < len;++i) {
    gdjs.MainOfficeCode.GDPlayerSemiObjects1[i].getBehavior("Animation").setAnimationName("PlayerSemi_WalkDown");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerSemi"), gdjs.MainOfficeCode.GDPlayerSemiObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainOfficeCode.GDPlayerSemiObjects1.length;i<l;++i) {
    if ( gdjs.MainOfficeCode.GDPlayerSemiObjects1[i].getBehavior("TopDownMovement").isUsingControl("Up") ) {
        isConditionTrue_0 = true;
        gdjs.MainOfficeCode.GDPlayerSemiObjects1[k] = gdjs.MainOfficeCode.GDPlayerSemiObjects1[i];
        ++k;
    }
}
gdjs.MainOfficeCode.GDPlayerSemiObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainOfficeCode.GDPlayerSemiObjects1 */
{for(var i = 0, len = gdjs.MainOfficeCode.GDPlayerSemiObjects1.length ;i < len;++i) {
    gdjs.MainOfficeCode.GDPlayerSemiObjects1[i].getBehavior("Animation").setAnimationName("PlayerSemi_WalkUp");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerSemi"), gdjs.MainOfficeCode.GDPlayerSemiObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainOfficeCode.GDPlayerSemiObjects1.length;i<l;++i) {
    if ( gdjs.MainOfficeCode.GDPlayerSemiObjects1[i].getBehavior("TopDownMovement").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.MainOfficeCode.GDPlayerSemiObjects1[k] = gdjs.MainOfficeCode.GDPlayerSemiObjects1[i];
        ++k;
    }
}
gdjs.MainOfficeCode.GDPlayerSemiObjects1.length = k;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerSemi"), gdjs.MainOfficeCode.GDPlayerSemiObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainOfficeCode.GDPlayerSemiObjects1.length;i<l;++i) {
    if ( gdjs.MainOfficeCode.GDPlayerSemiObjects1[i].getBehavior("TopDownMovement").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.MainOfficeCode.GDPlayerSemiObjects1[k] = gdjs.MainOfficeCode.GDPlayerSemiObjects1[i];
        ++k;
    }
}
gdjs.MainOfficeCode.GDPlayerSemiObjects1.length = k;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerSemi"), gdjs.MainOfficeCode.GDPlayerSemiObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainOfficeCode.GDPlayerSemiObjects1.length;i<l;++i) {
    if ( gdjs.MainOfficeCode.GDPlayerSemiObjects1[i].getBehavior("TopDownMovement").getSpeed() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MainOfficeCode.GDPlayerSemiObjects1[k] = gdjs.MainOfficeCode.GDPlayerSemiObjects1[i];
        ++k;
    }
}
gdjs.MainOfficeCode.GDPlayerSemiObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainOfficeCode.GDPlayerSemiObjects1 */
{for(var i = 0, len = gdjs.MainOfficeCode.GDPlayerSemiObjects1.length ;i < len;++i) {
    gdjs.MainOfficeCode.GDPlayerSemiObjects1[i].getBehavior("Animation").setAnimationName("PlayerSemi_Idle");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerSemi"), gdjs.MainOfficeCode.GDPlayerSemiObjects1);
{for(var i = 0, len = gdjs.MainOfficeCode.GDPlayerSemiObjects1.length ;i < len;++i) {
    gdjs.MainOfficeCode.GDPlayerSemiObjects1[i].getBehavior("Animation").setAnimationName("PlayerSemi_Idle");
}
}}

}


};

gdjs.MainOfficeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

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
gdjs.MainOfficeCode.GDNewTileMapMaskObjects1.length = 0;
gdjs.MainOfficeCode.GDNewTileMapMaskObjects2.length = 0;
gdjs.MainOfficeCode.GDFloorBaseObjects1.length = 0;
gdjs.MainOfficeCode.GDFloorBaseObjects2.length = 0;
gdjs.MainOfficeCode.GDCollisionBaseObjects1.length = 0;
gdjs.MainOfficeCode.GDCollisionBaseObjects2.length = 0;

gdjs.MainOfficeCode.eventsList0(runtimeScene);

return;

}

gdjs['MainOfficeCode'] = gdjs.MainOfficeCode;
