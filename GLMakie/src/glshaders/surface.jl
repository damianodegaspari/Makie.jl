function light_calc(x::Makie.MakieCore.ShadingAlgorithm)
    if x === NoShading
        return "#define NO_SHADING"
    elseif x === FastShading
        return "#define FAST_SHADING"
    elseif x === MultiLightShading
        return "#define MULTI_LIGHT_SHADING"
    # elseif x === :PBR # TODO?
    else
        @warn "Did not recognize shading value :$x. Defaulting to FastShading."
        return "#define FAST_SHADING"
    end
end

@nospecialize
# surface(::Matrix, ::Matrix, ::Matrix)
function draw_surface(screen, main::Tuple{MatTypes{T}, MatTypes{T}, MatTypes{T}}, data::Dict) where T <: AbstractFloat
    @gen_defaults! data begin
        position_x = main[1] => (Texture, "x position, must be a `Matrix{Float}`")
        position_y = main[2] => (Texture, "y position, must be a `Matrix{Float}`")
        position_z = main[3] => (Texture, "z position, must be a `Matrix{Float}`")
        scale = Vec3f(0) => "scale must be 0, for a surfacemesh"
    end
    return draw_surface(screen, position_z, data)
end

# surface(Vector or Range, Vector or Range, ::Matrix)
function draw_surface(screen, main::Tuple{VectorTypes{T}, VectorTypes{T}, MatTypes{T}}, data::Dict) where T <: AbstractFloat
    @gen_defaults! data begin
        position_x = main[1] => (Texture, "x position, must be a `Vector{Float}`")
        position_y = main[2] => (Texture, "y position, must be a `Vector{Float}`")
        position_z = main[3] => (Texture, "z position, must be a `Matrix{Float}`")
        scale = Vec3f(0) => "scale must be 0, for a surfacemesh"
    end
    return draw_surface(screen, position_z, data)
end

function draw_surface(screen, main, data::Dict)
    primitive = triangle_mesh(Rect2(0f0,0f0,1f0,1f0))
    to_opengl_mesh!(screen.glscreen, data, primitive)
    shading = pop!(data, :shading, FastShading)::Makie.MakieCore.ShadingAlgorithm
    @gen_defaults! data begin
        scale = nothing
        position = nothing
        position_x = nothing => Texture
        position_y = nothing => Texture
        position_z = nothing => Texture
        image = nothing => Texture
        normal = shading != NoShading
        invert_normals = false
        backlight = 0f0
    end
    @gen_defaults! data begin
        color = nothing => Texture
        color_map = nothing => Texture
        color_norm = nothing
        fetch_pixel = false
        matcap = nothing => Texture

        nan_color = RGBAf(1, 0, 0, 1)
        highclip = RGBAf(0, 0, 0, 0)
        lowclip = RGBAf(0, 0, 0, 0)

        uv_transform = Mat{2,3,Float32}(1, 0, 0, -1, 0, 1)
        instances = const_lift(x->(size(x,1)-1) * (size(x,2)-1), main) => "number of planes used to render the surface"
        transparency = false
        shader = GLVisualizeShader(
            screen,
            "util.vert", "surface.vert",
            "fragment_output.frag", "lighting.frag", "mesh.frag",
            view = Dict(
                "shading" => light_calc(shading),
                "picking_mode" => "#define PICKING_INDEX_FROM_UV",
                "MAX_LIGHTS" => "#define MAX_LIGHTS $(screen.config.max_lights)",
                "MAX_LIGHT_PARAMETERS" => "#define MAX_LIGHT_PARAMETERS $(screen.config.max_light_parameters)",
                "buffers" => output_buffers(screen, to_value(transparency)),
                "buffer_writes" => output_buffer_writes(screen, to_value(transparency))
            )
        )
    end
    return assemble_shader(data)
end
@specialize
