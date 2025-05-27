## Reflection and Refraction of Light

### Propagation of Light Rays

A light ray propagates in a straight line through a homogeneous medium until it encounters an interface between two media with different optical properties. The subsequent behavior of the ray is determined by the physical properties of both media and the geometry of the interface, forming the basis of geometrical optics.

![Reflection of Light](/content/light/geometrical/images/reflection.svg)

When a light ray is incident on a smooth, reflective surface, it undergoes reflection, maintaining propagation in the original medium while changing direction. The law of reflection states that the angle of incidence equals the angle of reflection, both measured with respect to the normal to the surface at the point of incidence. This relationship is independent of the angle of incidence and the wavelength of the incident light.

Reflection can be classified into two types based on the surface characteristics. Specular reflection occurs at smooth surfaces where the surface irregularities are significantly smaller than the wavelength of light, resulting in a coherent reflection that preserves image formation. Diffuse reflection occurs at rough surfaces where irregularities cause incident light to scatter in multiple directions according to Lambert's cosine law, preventing image formation despite high reflectivity.

### Refraction at Media Interfaces

![Refraction of Light](/content/light/geometrical/images/refraction.svg)

When a light ray traverses an interface between two transparent media, it undergoes refraction—a change in propagation direction due to the difference in light velocity between the media. This phenomenon is governed by Snell's law:

$$
n_1 \sin \theta_i = n_2 \sin \theta_r
$$

Where $n_1$ and $n_2$ are the refractive indices of the incident and refractive media respectively, and $\theta_i$ and $\theta_r$ are the angles of incidence and refraction measured from the normal. The refractive index of a medium is defined as the ratio of the speed of light in vacuum ($c$) to its speed in the medium ($v$):

$$
n = \frac{c}{v}
$$

The direction of refraction follows a predictable pattern: when light propagates from a medium of lower refractive index to one of higher refractive index, it bends toward the normal; conversely, when propagating from a higher to lower refractive index medium, it bends away from the normal. This principle explains the apparent position shift of submerged objects viewed from above—a direct consequence of refraction at the water-air interface.

### Total Internal Reflection

![Total Internal Reflection](/content/light/geometrical/images/total-internal-reflection.svg)

A specific case arises when light attempts to propagate from a medium of higher refractive index to one of lower refractive index at an angle of incidence exceeding a critical value. Beyond this critical angle, no refracted ray exists, and all incident energy is reflected back into the original medium—a phenomenon termed total internal reflection (TIR). The critical angle ($\theta_c$) is determined by:

$$
\sin \theta_c = \frac{n_2}{n_1}
$$

This equation is derived directly from Snell's law by setting the angle of refraction to 90°, representing the limiting case where the refracted ray propagates along the interface. For angles of incidence greater than $\theta_c$, the mathematical solution to Snell's law would require $\sin \theta_r > 1$, which is physically impossible. Consequently, all incident energy undergoes reflection with 100% efficiency, exceeding the reflectivity achievable with metallic reflectors.

The critical angle can be expressed as:

$$
\theta_c = \sin^{-1}\left(\frac{n_2}{n_1}\right)
$$

For a typical glass-air interface where $n_{\text{glass}} \approx 1.5$ and $n_{\text{air}} \approx 1.0$, the critical angle is approximately 41.8°.

Total internal reflection is the operational principle behind optical fibers, which enable long-distance signal transmission with minimal attenuation. In these waveguides, light propagates through a core with higher refractive index, surrounded by a cladding with lower refractive index, maintaining confinement through successive total internal reflections.

#### Optical Fiber Waveguides: Quantitative Analysis

An optical fiber consists of a cylindrical core with refractive index $n_{\text{core}}$ surrounded by a cladding with refractive index $n_{\text{cladding}}$ where $n_{\text{core}} > n_{\text{cladding}}$. The propagation characteristics are determined by several parameters:

1. **Numerical Aperture (NA)**: Quantifies the light-gathering capability of the fiber:

   $$
   \text{NA} = \sqrt{n_{\text{core}}^2 - n_{\text{cladding}}^2}
   $$

   The NA determines the maximum acceptance angle ($\theta_{\text{max}}$) for light entering the fiber:

   $$
   \theta_{\text{max}} = \sin^{-1}(\text{NA})
   $$

2. **Normalized Frequency (V-Number)**: Determines the number of propagation modes supported by the fiber:

   $$
   V = \frac{2\pi a}{\lambda} \cdot \text{NA}
   $$

   Where $a$ is the core radius and $\lambda$ is the wavelength. Single-mode propagation occurs when $V < 2.405$.

3. **Mode Field Diameter**: For single-mode fibers, characterizes the effective diameter of the guided mode, which extends partially into the cladding.

4. **Dispersion**: Pulse broadening mechanism in optical fibers, comprising:
   - Material dispersion: Due to wavelength-dependent refractive index
   - Waveguide dispersion: Due to fiber geometry
   - Modal dispersion: In multimode fibers, due to different path lengths

During total internal reflection, an evanescent field penetrates into the second medium despite the absence of a propagating refracted wave. The penetration depth ($d_p$) is given by:

$$
d_p = \frac{\lambda}{2\pi\sqrt{n_1^2\sin^2\theta - n_2^2}}
$$

This evanescent field enables applications in fiber optic sensors, where external media properties modulate the transmission characteristics through interaction with the evanescent field.

### Mathematical Derivation from Fermat's Principle

The laws of reflection and refraction can be derived from Fermat's principle of least time, which states that light follows the path between two points that minimizes the transit time. For a ray traveling from point A in medium 1 to point B in medium 2, the total transit time is:

$$
t = \frac{\sqrt{x^2 + h_1^2}}{v_1} + \frac{\sqrt{(d - x)^2 + h_2^2}}{v_2}
$$

Where $x$ is the horizontal coordinate of the interface crossing point, $h_1$ and $h_2$ are the vertical distances of points A and B from the interface, $d$ is the total horizontal separation, and $v_1$ and $v_2$ are the respective velocities in each medium.

Applying the condition for minimum time:

$$
\frac{dt}{dx} = \frac{x}{v_1\sqrt{x^2 + h_1^2}} - \frac{d-x}{v_2\sqrt{(d-x)^2 + h_2^2}} = 0
$$

Rearranging:

$$
\frac{x}{v_1\sqrt{x^2 + h_1^2}} = \frac{d-x}{v_2\sqrt{(d-x)^2 + h_2^2}}
$$

The left side equals $\frac{\sin\theta_1}{v_1}$ and the right side equals $\frac{\sin\theta_2}{v_2}$, where $\theta_1$ and $\theta_2$ are the angles of incidence and refraction. Thus:

$$
\frac{\sin\theta_1}{v_1} = \frac{\sin\theta_2}{v_2}
$$

Substituting $n = \frac{c}{v}$:

$$
n_1\sin\theta_1 = n_2\sin\theta_2
$$

This derivation demonstrates that Snell's law is a direct consequence of the principle of least time, illustrating how the path of light optimizes transit time rather than distance.

Fermat's principle generalizes to the principle of least action in Lagrangian mechanics. The variational calculus approach underlying Fermat's principle also appears in quantum mechanics through Feynman's path integral formulation, establishing connections between classical optics and quantum theory.

### Applications in Optical Systems

The principles of reflection and refraction are implemented in numerous optical systems. Mirrors utilize reflection for image formation—plane mirrors for direct reflection, spherical mirrors for magnification or field-of-view expansion. Lenses employ refraction to converge or diverge light rays, enabling the function of cameras, microscopes, telescopes, and corrective optics.

Prisms combine refraction and total internal reflection. When polychromatic light enters a prism, wavelength-dependent refraction produces angular dispersion, separating the component wavelengths. Optical instruments such as binoculars and periscopes utilize prisms with total internal reflection for beam deviation with minimal energy loss.

Optical fibers represent a significant application, utilizing total internal reflection to guide light through thin dielectric waveguides. These structures form the physical layer of modern telecommunications networks, enabling high-bandwidth data transmission across global distances.

### Quantitative Problem Analysis

#### Problem 1: Mirror Image Formation
A subject is positioned 1.5 meters from a plane mirror, with an observer 2 meters behind the subject.

**Problem**: Calculate:
a) The distance between the subject and their image
b) The distance between the observer and the subject's image
c) The minimum mirror height required for a subject of height 1.7 meters

**Solution**:
a) In a plane mirror, image distance equals object distance:
   Distance = 1.5 meters × 2 = 3.0 meters
   
b) Observer-to-image distance:
   Distance = Observer-to-mirror distance - Mirror-to-subject distance + Subject-to-image distance
   = (2.0 + 1.5) + 1.5 = 5.0 meters

c) Minimum mirror height:
   Required height = Subject height ÷ 2 = 1.7 m ÷ 2 = 0.85 meters
   This allows full-height viewing when the subject is positioned at the center of the mirror's vertical field of view.

#### Problem 2: Optical Fiber Parameters
An optical fiber has a core with refractive index n₁ = 1.48 and cladding with n₂ = 1.32.

**Problem**: Determine:
a) The critical angle for total internal reflection
b) The maximum acceptance angle for incident light
c) The numerical aperture of the fiber

**Solution**:
a) Critical angle:
   $$
   \theta_c = \sin^{-1}\left(\frac{n_2}{n_1}\right) = \sin^{-1}\left(\frac{1.32}{1.48}\right) = 63.2°
   $$

b) Maximum acceptance angle:
   $$
   \theta_{max} = \sin^{-1}(\sqrt{n_1^2 - n_2^2}) = \sin^{-1}(\sqrt{1.48^2 - 1.32^2}) = 41.8°
   $$

c) Numerical aperture:
   $$
   NA = \sqrt{n_1^2 - n_2^2} = \sqrt{1.48^2 - 1.32^2} = 0.67
   $$

#### Problem 3: Prism Analysis
A glass prism with refractive index 1.5 has an apex angle of 60°.

**Problem**: Calculate:
a) The angle of deviation for a light ray incident at 45°
b) The minimum angle of deviation
c) The critical angle for the glass-air interface

**Solution**:
a) For 45° incidence:
   1. First refraction (air to glass):
      $$
      \sin \theta_2 = \frac{\sin 45°}{1.5} = 28.1°
      $$
   2. Second refraction (glass to air):
      $$
      \sin \theta_3 = 1.5 \sin(31.9°) = 45.9°
      $$
   3. Total deviation = 32.8°

b) Minimum deviation:
   $$
   D_{min} = 2 \sin^{-1}\left(\frac{n \sin(A/2)}{1}\right) - A = 37.2°
   $$
   where A is the apex angle (60°)

c) Critical angle:
   $$
   \theta_c = \sin^{-1}\left(\frac{1}{1.5}\right) = 41.8°
   $$

#### Problem 4: Practical Applications
**Problem**: Solve these practical scenarios using principles of reflection and refraction:
a) A spear fisher aims at a fish that appears to be 2 meters below the water surface. If the actual depth of the fish is 2.5 meters, calculate the refractive index of water.
b) A laser beam is directed at a 45° angle onto a glass plate (n = 1.52) submerged in water (n = 1.33). Calculate the angle of refraction in the glass.
c) A fiber optic cable has a core with refractive index 1.48. What is the minimum refractive index required for the cladding to ensure total internal reflection at a 75° angle of incidence?

**Solution**:
a) **Spear Fishing Correction**:
   - The apparent depth relates to actual depth by: apparent depth = actual depth/refractive index
   - 2 m = 2.5 m/n
   - n = 2.5 m/2 m = 1.25
   - This approximates the refractive index of water (actual value ≈ 1.33)
   - The discrepancy illustrates why experienced spear fishers aim below the apparent position

b) **Laser in Multilayer Media**:
   - Using Snell's law: n₁sin(θ₁) = n₂sin(θ₂)
   - For water to glass: 1.33 × sin(45°) = 1.52 × sin(θ₂)
   - 1.33 × 0.7071 = 1.52 × sin(θ₂)
   - sin(θ₂) = 0.9404/1.52 = 0.6186
   - θ₂ = 38.2°
   - The beam bends toward the normal when entering the higher-index glass

c) **Fiber Optic Design**:
   - For total internal reflection: sin(θc) = n₂/n₁
   - With incident angle 75° and core index 1.48, we need θc < 75°
   - n₂/1.48 = sin(θc) < sin(75°) = 0.9659
   - n₂ < 1.48 × 0.9659 = 1.43
   - Maximum cladding index = 1.43
   - Standard cladding indices (typically 1.44-1.46) would not work for this angle

#### Problem 5: Laboratory Exercises
**Problem**: Complete these laboratory exercises and calculate the expected results:
a) A student places a coin at the bottom of a beaker and then fills it with water to a depth of 10 cm. From directly above, how far below the water surface will the coin appear to be?
b) In a laser reflection experiment, a beam strikes a mirror at 30° to the normal. If the mirror is rotated by 10°, by what angle does the reflected beam rotate?
c) A glass prism (n = 1.5) is used to create a spectrum. If white light enters the prism at an angle of 40°, calculate the angular separation between red (λ = 700 nm, n = 1.513) and violet (λ = 400 nm, n = 1.532) light after passing through the prism.

**Solution**:
a) **Apparent Depth Measurement**:
   - Apparent depth = Actual depth/Refractive index
   - For water with n ≈ 1.33: Apparent depth = 10 cm/1.33 = 7.52 cm
   - The coin appears 7.52 cm below the surface
   - This can be verified by measuring the apparent position with a ruler alongside the beaker

b) **Mirror Rotation Effect**:
   - When a mirror rotates by angle α, the reflected beam rotates by 2α
   - Initial reflection angle = 30° (to normal)
   - Mirror rotation = 10°
   - Reflected beam rotation = 2 × 10° = 20°
   - New reflection angle = 30° + 20° = 50° (if mirror rotated away from incident beam)
   - This principle is used in optical scanners and laser light shows

c) **Chromatic Dispersion Calculation**:
   - Using Snell's law for each wavelength:
   - For red light: sin(θred) = sin(40°)/1.513 = 0.4560
   - θred = 27.1°
   - For violet light: sin(θviolet) = sin(40°)/1.532 = 0.4503
   - θviolet = 26.7°
   - Angular separation inside prism = 27.1° - 26.7° = 0.4°
   - After exiting the prism, this separation increases due to a second refraction
   - This is the principle behind spectroscopy and rainbow formation

These problems demonstrate practical applications of reflection and refraction principles that can be verified through hands-on experiments in laboratory or everyday settings.

### Conclusion

Reflection and refraction constitute the primary mechanisms governing light propagation at media interfaces. The laws describing these phenomena—the law of reflection and Snell's law—provide the theoretical basis for optical system design and analysis. Understanding these principles enables the development of optical instruments and explains diverse natural optical phenomena. These concepts form essential components in the fields of optics, photonics, and optical telecommunications.