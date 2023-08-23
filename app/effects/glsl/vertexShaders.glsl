attribute vec2 position;
attribute vec2 uv;

uniform mat4 projection;
uniform float time;

uniform float speed;

varying vec2 vUv;
varying float intensity;

float parabola( float x, float k ) {
return pow( 4.0*x*(1.0-x), k );
}

void main() {
vUv = uv;

vec4 pos = vec4(position, 0.0, 1.0);

vec4 pp = projection * vec4(position, 0.0, 1.0);
float yy = ((pp / pp.w).y + 1.0) / 2.0;
pos.z += parabola(clamp(yy, 0.0, 1.0), 0.8) * speed;

intensity = pos.z;

gl_Position = projection * pos;
}