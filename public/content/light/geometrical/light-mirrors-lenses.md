## Geometrical Optics: Analysis of Mirrors and Lenses

### Theoretical Foundations

Geometrical optics provides a framework for analyzing the behavior of light through ray approximation, particularly applicable when the wavelength is significantly smaller than the optical elements under consideration. This section examines the mathematical principles governing spherical mirrors and thin lenses, their optical properties, and quantitative relationships.

### Spherical Mirrors: Mathematical Formulation

Spherical mirrors are optical elements characterized by a reflecting surface conforming to a segment of a sphere. These elements are categorized according to their curvature orientation:

1. **Concave Mirrors**: Reflecting surface with inward curvature (positive optical power)
2. **Convex Mirrors**: Reflecting surface with outward curvature (negative optical power)

#### Geometric Parameters

The optical behavior of spherical mirrors is defined by specific geometric parameters:

- **Center of Curvature ($C$)**: The geometric center of the sphere from which the mirror surface is derived
- **Radius of Curvature ($R$)**: The distance from the mirror vertex to $C$
- **Principal Axis**: The line connecting the center of curvature and the vertex
- **Focal Point ($F$)**: The point at which incident rays parallel to the principal axis converge after reflection (concave) or from which they appear to diverge (convex)
- **Focal Length ($f$)**: The distance from the mirror vertex to the focal point, related to the radius of curvature by:

  $$
  f = \frac{R}{2}
  $$

#### Mirror Equation

The quantitative relationship between object position, image position, and focal length is expressed by the mirror equation:

$$
\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}
$$

where $d_o$ represents the object distance from the vertex, $d_i$ represents the image distance from the vertex, and $f$ represents the focal length.

#### Sign Convention

To maintain consistency in optical calculations, the following sign conventions are employed:

| Parameter | Sign Convention |
|-----------|----------------|
| $d_o$ (object distance) | Positive for real objects |
| $d_i$ (image distance) | Positive for real images (in front of mirror), negative for virtual images (behind mirror) |
| $f$ (focal length) | Positive for concave mirrors, negative for convex mirrors |
| $R$ (radius of curvature) | Positive for concave mirrors, negative for convex mirrors |

#### Linear Magnification

The ratio of image height to object height defines the linear magnification:

$$
m = -\frac{d_i}{d_o}
$$

The negative sign in this expression has physical significance:
- $m > 0$ indicates an upright image
- $m < 0$ indicates an inverted image
- $|m| > 1$ indicates a magnified image
- $|m| < 1$ indicates a diminished image

### Optical Behavior of Concave Mirrors

![Concave Mirror](/content/light/geometrical/images/concave-mirror.svg)

Concave mirrors exhibit convergent behavior for incident light. The image formation characteristics vary systematically with object position:

1. **Object at Infinity**: Parallel rays converge at the focal point, forming a real, inverted, point-sized image.

2. **Object Beyond $C$**: Rays converge between $F$ and $C$, forming a real, inverted, diminished image.

3. **Object at $C$**: Rays converge at $C$, forming a real, inverted image with unit magnification.

4. **Object Between $C$ and $F$**: Rays converge beyond $C$, forming a real, inverted, magnified image.

5. **Object at $F$**: Rays emerge parallel to the principal axis, resulting in no image formation at a finite distance.

6. **Object Between $F$ and Vertex**: Rays diverge after reflection but appear to converge behind the mirror, forming a virtual, upright, magnified image.

This systematic variation in image characteristics with object position enables precise optical design for specific applications, including astronomical telescopes, solar concentrators, and medical devices.

### Optical Behavior of Convex Mirrors

![Convex Mirror](/content/light/geometrical/images/convex-mirror.svg)

Convex mirrors produce virtual images for all positions of real objects. Key optical characteristics include:

1. **Virtual Image Formation**: All images form behind the mirror surface.
2. **Upright Orientation**: Images maintain the same orientation as the object.
3. **Diminished Size**: Images appear smaller than the corresponding objects.
4. **Expanded Field of View**: The curved surface provides a wider angular field compared to planar mirrors.

These properties make convex mirrors particularly suitable for applications requiring expanded visual fields, such as traffic safety and security monitoring systems.

### Ray Tracing Methodology

![Ray Diagram](/content/light/geometrical/images/mirror-ray-diagram.svg)

The systematic determination of image position and characteristics employs ray tracing techniques using specific rays with predictable behaviors:

1. **Principal Ray**: Travels parallel to the principal axis and reflects through (concave) or appears to originate from (convex) the focal point.

2. **Focal Ray**: Passes through or is directed toward the focal point and reflects parallel to the principal axis.

3. **Central Ray**: Passes through or is directed toward the center of curvature and reflects back along the same path due to normal incidence.

The intersection of these rays (or their extensions) determines the image position, while their relative orientation establishes the image characteristics.

### Thin Lenses: Mathematical Formulation

Thin lenses are optical elements characterized by refractive surfaces with negligible thickness compared to their radii of curvature. This approximation simplifies the analysis while maintaining adequate accuracy for most applications. Thin lenses are classified according to their surface curvatures:

1. **Convex (Positive) Lenses**: Thicker at the center than at the periphery, producing convergent behavior
2. **Concave (Negative) Lenses**: Thinner at the center than at the periphery, producing divergent behavior

#### Optical Parameters

The optical behavior of thin lenses is determined by several key parameters:

- **Focal Points ($F$)**: Points at which incident rays parallel to the principal axis converge (convex) or from which they appear to diverge (concave)
- **Focal Length ($f$)**: The distance from the lens center to a focal point
- **Principal Axis**: The line passing through the centers of curvature of both lens surfaces
- **Optical Center**: The point within the lens through which rays pass without angular deviation

#### Lensmaker's Equation

The focal length of a thin lens is determined by its geometry and material properties, as expressed by the lensmaker's equation:

$$
\frac{1}{f} = (n - 1) \left( \frac{1}{R_1} - \frac{1}{R_2} \right)
$$

where $n$ represents the refractive index of the lens material relative to the surrounding medium, $R_1$ represents the radius of curvature of the first surface encountered by incident light, and $R_2$ represents the radius of curvature of the second surface.

**Sign Convention for Radii:**
- $R$ is positive if the surface is convex toward the incident light
- $R$ is negative if the surface is concave toward the incident light

#### Thin Lens Equation

The relationship between object distance, image distance, and focal length for thin lenses follows the same mathematical form as the mirror equation:

$$
\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}
$$

This equation applies to both converging and diverging lenses when the appropriate sign conventions are implemented.

#### Sign Convention

The following sign conventions are employed for lens calculations:

| Parameter | Sign Convention |
|-----------|----------------|
| $d_o$ (object distance) | Positive for real objects |
| $d_i$ (image distance) | Positive for real images (opposite side from object), negative for virtual images (same side as object) |
| $f$ (focal length) | Positive for converging lenses, negative for diverging lenses |

#### Linear Magnification

The linear magnification for thin lenses follows the same relationship as for mirrors:

$$
m = -\frac{d_i}{d_o}
$$

with identical implications regarding image orientation and size.

### Ray Tracing for Optical Systems

The systematic analysis of image formation in optical systems employs ray tracing techniques with specific rays that follow predictable paths:

#### For Converging Systems (Concave Mirrors / Convex Lenses):

1. A ray parallel to the principal axis passes through the focal point after reflection/refraction.
2. A ray passing through the focal point (or directed toward it) emerges parallel to the principal axis after reflection/refraction.
3. A ray passing through the optical center (lens) or center of curvature (mirror) continues without angular deviation.

#### For Diverging Systems (Convex Mirrors / Concave Lenses):

1. A ray parallel to the principal axis diverges in a direction appearing to originate from the focal point.
2. A ray directed toward the focal point emerges parallel to the principal axis.
3. A ray passing through the optical center (lens) or directed toward the center of curvature (mirror) continues without angular deviation.

### Image Classification

Images formed by optical systems are classified according to their formation mechanism and properties:

1. **Real Images**: Formed by the actual convergence of light rays; can be projected onto screens.
2. **Virtual Images**: Formed by the apparent divergence of light rays; cannot be projected onto screens.

Additional characteristics include:
- **Orientation**: Upright or inverted relative to the object
- **Size**: Magnified, diminished, or equal to the object
- **Position**: Location relative to the optical element

### Optical Aberrations

![Optical Aberrations](/content/light/geometrical/images/aberrations.svg)

Optical systems deviate from ideal behavior due to various aberrations, which limit image quality and resolution. The primary aberrations include:

#### Spherical Aberration

Spherical aberration arises from the spherical geometry of optical surfaces. Rays incident at different distances from the optical axis converge at different points along the axis, resulting in a blur circle rather than a point image. The severity of spherical aberration increases with the fourth power of the aperture diameter and inversely with the third power of the focal length.

Mathematically, for a spherical mirror, the longitudinal spherical aberration (LSA) can be approximated as:

$$
LSA \approx \frac{h^2}{2f} \left(\frac{h^2}{f^2} + \frac{1}{2}\right)
$$

where $h$ is the height of the incident ray from the optical axis and $f$ is the focal length.

Correction methods include:
- Utilization of aspheric surfaces
- Implementation of multiple-element designs with compensating aberrations
- Aperture limitation

#### Chromatic Aberration

Chromatic aberration occurs in refractive elements due to the wavelength dependence of the refractive index (dispersion). This results in different focal lengths for different wavelengths, producing color fringing at high-contrast boundaries.

The variation in focal length with wavelength is characterized by the Abbe number ($V_d$):

$$
V_d = \frac{n_d - 1}{n_F - n_C}
$$

where $n_d$, $n_F$, and $n_C$ are the refractive indices at the Fraunhofer d, F, and C spectral lines.

Correction methods include:
- Achromatic doublets combining positive and negative elements with different dispersion characteristics
- Apochromatic designs correcting for three or more wavelengths
- Diffractive-refractive hybrid elements

#### Other Aberrations

1. **Coma**: Off-axis point sources produce asymmetric, comet-shaped images. The aberration varies with the cube of the field angle and linearly with aperture.

2. **Astigmatism**: Different focal lengths for rays in different planes, resulting in line images rather than points for off-axis objects.

3. **Field Curvature**: The image surface forms a curved rather than planar surface, causing peripheral defocus in flat-field applications.

4. **Distortion**: Variation in magnification with field position, resulting in geometric distortion of the image.

### Applications in Optical Instrumentation

The principles of mirrors and lenses find application in numerous optical instruments and systems:

1. **Astronomical Telescopes**: Employ either concave mirrors (reflecting designs) or convex lenses (refracting designs) to collect and focus electromagnetic radiation from distant celestial objects. Modern telescopes often incorporate multiple mirrors in compound configurations to minimize aberrations and maximize light-gathering capacity.

2. **Microscopic Systems**: Utilize convex lenses in series to achieve high magnification of microscopic specimens. Compound microscopes typically employ objective and eyepiece lenses with precise focal lengths to optimize resolution and magnification.

3. **Imaging Systems**: Cameras and projection devices employ convex lenses to form real images on sensors or projection surfaces. The focal length and aperture determine key imaging parameters such as field of view and depth of field.

4. **Corrective Optics**: Eyeglasses and contact lenses compensate for refractive errors in the human visual system:
   - Convex lenses correct hyperopia (farsightedness) by providing additional convergence
   - Concave lenses correct myopia (nearsightedness) by reducing excessive convergence
   - Cylindrical lenses correct astigmatism by providing different refractive powers along different axes

5. **Thermal Applications**: Large concave mirrors concentrate electromagnetic radiation for applications requiring high energy density, such as solar furnaces and thermal power generation. The concentration ratio is proportional to the mirror's surface area and inversely proportional to the focal spot size.

### Quantitative Problem Analysis

#### Problem 1: Astronomical Telescope Design
An astronomer is designing a reflecting telescope with a primary mirror of focal length 2.0 meters.

**Problem**: If a distant galaxy forms an image 2.4 meters from the mirror, determine:
a) The object distance
b) The magnification produced
c) The percentage of focal length represented by a 0.1mm spherical aberration blur

**Solution**:
a) Using the mirror equation:
   $$\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}$$
   $$\frac{1}{2.0} = \frac{1}{d_o} + \frac{1}{2.4}$$
   $$d_o = 12.0 \text{ meters}$$

b) Magnification:
   $$m = -\frac{d_i}{d_o} = -\frac{2.4}{12.0} = -0.2$$
   The negative sign indicates an inverted image with 1/5 the linear dimensions of the object.

c) Blur percentage:
   $$\text{Percentage} = \frac{0.1 \text{ mm}}{2000 \text{ mm}} \times 100\% = 0.005\%$$

#### Problem 2: Chromatic Aberration Analysis
A lens designer is working on a high-end camera lens that needs to minimize both spherical and chromatic aberration.

**Problem**: For a lens with focal length 100mm at f/2.0:
a) Calculate the entrance pupil diameter
b) Design a two-element achromatic doublet using crown glass ($n_1 = 1.52$, $V_1 = 59.5$) and flint glass ($n_2 = 1.62$, $V_2 = 36.3$)

**Solution**:
a) Entrance pupil diameter:
   $$\text{Diameter} = \frac{\text{focal length}}{f\text{-number}} = \frac{100 \text{ mm}}{2.0} = 50 \text{ mm}$$

b) For an achromatic doublet, two conditions must be satisfied:
   1. The net optical power equals the design value
   2. The chromatic aberration is minimized
   
   These conditions yield the equations:
   $$\phi_1 + \phi_2 = \frac{1}{100}$$
   $$\frac{\phi_1}{V_1} + \frac{\phi_2}{V_2} = 0$$
   
   where $\phi$ represents optical power (reciprocal of focal length).
   
   Solving these equations:
   $$\phi_1 = \frac{V_1}{V_1 - V_2} \cdot \frac{1}{100} = \frac{59.5}{59.5 - 36.3} \cdot \frac{1}{100} = 0.0162 \text{ mm}^{-1}$$
   $$\phi_2 = -\frac{V_2}{V_1 - V_2} \cdot \frac{1}{100} = -\frac{36.3}{59.5 - 36.3} \cdot \frac{1}{100} = -0.0062 \text{ mm}^{-1}$$

   This combination minimizes chromatic aberration because:
   - The crown glass element (positive power) has low dispersion (high V-number)
   - The flint glass element (negative power) has high dispersion (low V-number)
   - Their opposite powers create opposite chromatic effects that cancel at two wavelengths

#### Problem 3: Security Mirror Analysis
A convex security mirror with radius of curvature 2.0 meters is installed to monitor a retail space.

**Problem**: Calculate:
a) The focal length of the mirror
b) The position and nature of the image for an object 3.0 meters from the mirror
c) The magnification of the image

**Solution**:
a) For a convex mirror:
   $$f = -\frac{R}{2} = -\frac{2.0 \text{ m}}{2} = -1.0 \text{ m}$$

b) Using the mirror equation:
   $$\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}$$
   $$\frac{1}{-1.0} = \frac{1}{3.0} + \frac{1}{d_i}$$
   $$d_i = -0.75 \text{ m}$$
   
   The negative image distance indicates a virtual image located 0.75 meters behind the mirror.

c) Magnification:
   $$m = -\frac{d_i}{d_o} = -\frac{-0.75 \text{ m}}{3.0 \text{ m}} = 0.25$$
   
   The positive magnification indicates an upright image with 1/4 the linear dimensions of the object.

### Conclusion

The mathematical principles governing mirrors and lenses provide a quantitative framework for analyzing optical systems. The mirror and lens equations, together with the appropriate sign conventions, enable the prediction of image location, size, and orientation for various optical configurations. Understanding these principles is essential for the design and optimization of optical instruments across diverse applications, from astronomical observation to microscopic imaging to everyday visual aids.