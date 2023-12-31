precision highp float;

uniform vec2 size;

uniform vec2 sizeImage;
uniform sampler2D image;

varying vec2 vUv;
varying float vDist;

vec4 coverTexture(sampler2D tex, vec2 imgSize, vec2 ouv) {
vec2 s = size;
vec2 i = imgSize;

float rs = s.x / s.y;
float ri = i.x / i.y;
vec2 new = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
vec2 offset = (rs < ri ? vec2((new.x - s.x) / 2.0, 0.0) : vec2(0.0, (new.y - s.y) / 2.0)) / new;
vec2 uv = ouv * s / new + offset;

return texture2D(tex, uv);
}

void main() {
vec3 j = vec3(1.0, 0.580392, 0.619607);
vec3 k = vec3(0.9411764, 0.517647, 0.552941);
vec3 l = vec3(1.0, 0.729411, 0.749019);
vec3 m = vec3(0.949019, 0.949019, 0.949019);

vec3 color = vec3(0.0);

float z = vDist;
color = mix(j, k, smoothstep(0.0, 0.23, z));
color = mix(color, j, smoothstep(0.13, 0.6, z));
color = mix(color, l, smoothstep(0.5, 1.0, z));

vec4 img = coverTexture(image, sizeImage, vUv);
const vec3 W = vec3(0.2125, 0.7154, 0.0721);
float luma = dot(img.rgb, W);

gl_FragColor = mix(
img,
vec4(color, 1.0)
, 0.0);
}