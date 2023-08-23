attribute vec2 position;
attribute vec2 uv;

uniform mat4 projection;
uniform float time;
uniform vec2 viewport;
uniform vec2 pointer;

varying vec2 vUv;
varying float vDist;

void main() {
vUv = uv;

float aspect = viewport.x / viewport.y;
vec4 pos = vec4(position, 0.0, 1.0);

vec4 pp = projection * vec4(position, 0.0, 1.0);
pp /= pp.w;

pp.y /= aspect;

float dist = distance(pointer, pp.xy);

float v = smoothstep(0.3, 0.1, dist) ;
vDist = v;

pos.xyz *= 1.0 + (v * 0.14);
pos.z += sin(uv.x + uv.y * 5.0 + time * 0.002 ) * 0.2;

gl_Position = projection * pos;
}