#pragma strict

private static var colors = [
	Color(0.7, 0.7, 0.8),
	Color(0.8, 0.8, 0.8)
];

static var counter = 0;

private var vibe = 0.0;
private var initialScale = 1.0;

function Start() {
	renderer.material.color = colors[counter];
	if (++counter == colors.Length) counter = 0;

	initialScale = transform.localScale.x;
}

function Update() {
	transform.localScale = Vector3.one * initialScale * (1.0 + 0.2 * vibe * Mathf.Sin(40.0 * Time.time));
	vibe = ExpEase.Out(vibe, 0.0, -8.0);
}

function KeyOn() {
	vibe = 1.0;
}