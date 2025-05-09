#version 450

#include "../frag_spec_const.glsl"
#include "tex.common.glsl"

layout(set = 0, binding = 0) uniform sampler2D tex;
layout(location = 0) in vec2 tex_pos;
layout(location = 0) out vec4 out_color;

void main() {
	vec4 c = textureLod(tex, tex_pos, 0);
	if (has_alpha_multiplier) {
		if (src_has_alpha) {
			c *= data.mul;
		} else {
			c = vec4(c.rgb * data.mul, data.mul);
		}
	}
	out_color = c;
}
