#pragma strict

var mainCam : Camera;

var topWall : BoxCollider2D;
var bottomWall : BoxCollider2D;
var leftWall : BoxCollider2D;
var rightWall : BoxCollider2D;

var Player01 : Transform;
var Player02 : Transform;

function Update () {

	//Move each wall to its edge location
	topWall.size = new Vector2 (mainCam.ScreenToWorldPoint, 1f);

}