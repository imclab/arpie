#pragma strict

function Awake() {
	var ratio = 1.0 * Screen.width / Screen.height;
	if (ratio < 1.48) {
		// Probably iPad.
		camera.orthographicSize = 6.0;
		transform.localPosition.y = 0.75;
	} else if (ratio > 1.58) {
		// iPhone 5 and wide screen devices.
		camera.orthographicSize = 5.0;
		transform.localPosition.y = -0.2;
	}
}
