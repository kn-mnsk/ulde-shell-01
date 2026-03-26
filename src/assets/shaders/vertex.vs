#version 300 es

layout(std140) uniform;
layout(location = 0) in vec3 position;
layout(location = 1) in vec3 normal;
layout(location = 2) in vec2 uv;

uniform mat4 worldViewProjection;
out vec3 v_position;
out vec3 v_normal;
out vec2 v_uv;

void main() {
  v_position = position;
  v_normal = normal;
  v_uv = uv;
  gl_Position = worldViewProjection * vec4(position, 1.0);
}
