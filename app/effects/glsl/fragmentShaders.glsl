
precision highp float;

uniform vec2 size;
uniform vec2 sizeImage;
uniform sampler2D image;
varying float intensity;

varying vec2 vUv;

vec4 coverTexture(vec2 ruv) {
vec2 s = size;
vec2 i = sizeImage;

float rs = s.x / s.y;
float ri = i.x / i.y;
vec2 new = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
vec2 offset = (rs < ri ? vec2((new.x - s.x) / 2.0, 0.0) : vec2(0.0, (new.y - s.y) / 2.0)) / new;
vec2 uv = ruv * s / new + offset;

return texture2D(image, uv);
}



void main() {
vec2 coords = vUv;

coords -= 0.5;
coords *= 0.8 + (intensity * 0.05);
coords += 0.5;

gl_FragColor = coverTexture(coords);
}