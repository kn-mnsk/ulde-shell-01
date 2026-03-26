#version 300 es

#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

in vec3 v_position;
in vec3 v_normal;
in vec2 v_uv;

uniform sampler2D textureSampler;

out vec4 FragColor;

float PI = 3.1415926;
float PI2 = 6.283185;

// vec2 sphereToTexcord(const vec3 pos) {
//   // https://www.mathforengineers.com/math-calculators/spherical-to-rectangular-coordinates.html

//   vec3 r = normalize(pos);
//   float v = (PI - acos(r.y)) / PI;
//   float u =abs(PI - atan(r.x / r.z)) / PI2;
//   vec2 texcoord = vec2(u, v);
//   return texcoord;
// }

void main() {
  // vec2 texcoord = sphereToTexcord(v_position);

  // vec4 color = texture(textureSampler, v_uv);

  // vec2 flippedUV = vec2(v_uv.x, 1.0 - v_uv.y); // Flip vertically
  // vec2 flippedUV = vec2(1.0 - v_uv.x, 1.0 - v_uv.y); // Flip vertically
  vec2 flippedUV = 1.0 - v_uv;
  vec4 color = texture(textureSampler, flippedUV);

  FragColor = vec4(color.rgb, 1.0); //

}
