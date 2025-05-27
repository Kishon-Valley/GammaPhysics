##  Reflection and Transmission

Wave phenomena are fundamental to understanding how waves interact with boundaries and interfaces. Reflection and transmission are two key behaviors that occur when a wave encounters a change in medium or a boundary. These phenomena are governed by the principles of wave mechanics and are essential in fields such as optics, acoustics, and seismology.

![Wave Reflection Types](/content/waves-and-oscillations/wave-phenomena/images/wave-reflection-types.svg)

### Reflection of Waves

Reflection occurs when a wave encounters a boundary or interface between two different media and bounces back into the original medium. The behavior of the reflected wave depends on the nature of the boundary and the properties of the media involved. Reflection is a common phenomenon observed in various types of waves, including light, sound, and water waves.

### Law of Reflection
For a wave incident on a smooth, flat boundary, the angle of incidence ($\theta_i$) is equal to the angle of reflection ($\theta_r$). This is expressed as:

$$
\theta_i = \theta_r
$$

![Law of Reflection](/content/waves-and-oscillations/wave-phenomena/images/law-of-reflection.svg)

#### Phase Change on Reflection
When a wave reflects off a boundary, its phase may change depending on the type of boundary. The phase change is particularly important in understanding interference patterns and standing waves.

- **Fixed End Reflection**: If a wave reflects off a fixed boundary (e.g., a string tied to a wall), the reflected wave undergoes a phase change of $\pi$ radians (180 degrees). This means the wave is inverted upon reflection. For example, a crest of the wave becomes a trough after reflection.
  
- **Free End Reflection**: If the boundary is free (e.g., the end of a string is free to move), the reflected wave does not undergo a phase change and remains upright. A crest remains a crest, and a trough remains a trough.

#### Reflection Coefficient
The reflection coefficient ($R$) quantifies the fraction of the wave's amplitude that is reflected. It depends on the impedance mismatch between the two media. Impedance is a measure of how much a medium resists the propagation of a wave. For a wave traveling from medium 1 to medium 2, the reflection coefficient is given by:

$$
R = \frac{Z_2 - Z_1}{Z_2 + Z_1}
$$

where $Z_1$ and $Z_2$ are the impedances of the two media. If $Z_1 = Z_2$, there is no reflection, and the wave is entirely transmitted. If $Z_2 \gg Z_1$ or $Z_2 \ll Z_1$, most of the wave is reflected.

---

### Transmission of Waves

Transmission occurs when a wave passes through a boundary into a second medium. The transmitted wave may change its speed, wavelength, and direction depending on the properties of the new medium. Transmission is a key phenomenon in understanding how waves propagate through different materials.

#### Refraction
When a wave enters a new medium at an angle, its direction of propagation changes due to a change in wave speed. This phenomenon is known as refraction. The relationship between the angles of incidence ($\theta_i$) and refraction ($\theta_t$) is given by Snell's Law:

$$
n_1 \sin(\theta_i) = n_2 \sin(\theta_t)
$$

where $n_1$ and $n_2$ are the refractive indices of the two media. The refractive index is related to the wave speed ($v$) in the medium by:

$$
n = \frac{c}{v}
$$

where $c$ is the speed of light in a vacuum. Refraction is responsible for phenomena such as the bending of light in lenses and the apparent displacement of objects underwater.

![Wave Transmission](/content/waves-and-oscillations/wave-phenomena/images/wave-transmission.svg)

#### Transmission Coefficient
The transmission coefficient ($T$) quantifies the fraction of the wave's amplitude that is transmitted into the second medium. It is related to the reflection coefficient by the equation:

$$
T = 1 - R
$$

For a wave traveling from medium 1 to medium 2, the transmission coefficient is given by:

$$
T = \frac{2Z_2}{Z_2 + Z_1}
$$

where $Z_1$ and $Z_2$ are the impedances of the two media. The transmission coefficient indicates how much of the wave's energy is transferred into the second medium.

---

### Impedance and Wave Transmission

The amount of energy transmitted across an interface depends on the impedance mismatch between the two media. Understanding and managing this impedance is crucial for many practical applications.

![Impedance Matching](/content/waves-and-oscillations/wave-phenomena/images/impedance-matching.svg)

---

### Applications of Reflection and Transmission

The principles of reflection and transmission find extensive applications across numerous fields of science and technology, fundamentally shaping our modern world.

![Wave Applications](/content/waves-and-oscillations/wave-phenomena/images/wave-applications.svg)

Key applications include:

1. **Medical Imaging**: 
   - Ultrasound imaging relies on reflection and transmission of sound waves
   - Different tissues create distinct reflection patterns
   - Real-time imaging through impedance differences

2. **Optical Systems**: 
   - Fiber optics utilize total internal reflection
   - Lenses and mirrors for imaging systems
   - Anti-reflection coatings for improved transmission

3. **Telecommunications**: 
   - Signal transmission in cables and waveguides
   - Impedance matching for efficient power transfer
   - Minimizing signal reflections in transmission lines

4. **Musical Instruments**: 
   - Sound production through controlled wave reflection
   - Standing wave formation in strings and tubes
   - Resonance enhancement through proper impedance matching

#### Optical Technologies and Imaging Systems

In the field of optics, reflection and transmission principles form the foundation of numerous imaging and communication technologies. Modern mirrors exploit the law of reflection to create precise optical systems, from simple bathroom mirrors to sophisticated astronomical telescopes. When light strikes a silvered glass surface, the reflected rays maintain their spatial relationships, allowing for the formation of clear, undistorted images. This same principle enables the design of solar concentrators, where carefully curved reflective surfaces focus sunlight to generate power or heat.

The manipulation of light through transmission has revolutionized medical imaging and communications. Optical lenses, which rely on precise control of refraction, enable technologies from microscopes to cameras. When light passes through a convex lens, the varying thickness of the glass causes different parts of the wavefront to travel at different speeds, focusing the light to a point. This principle allows for the magnification of tiny cellular structures in microscopes and the capture of distant galaxies through telescopes.

Perhaps one of the most transformative applications is in fiber optic communications. These thin glass fibers utilize total internal reflection, where light bouncing at shallow angles remains trapped within the fiber core. The refractive index difference between the core and cladding, typically around $\Delta n = 0.01$, ensures that light signals can travel for kilometers with minimal loss. The transmission equation:

$$
\theta_c = \arcsin\left(\frac{n_2}{n_1}\right)
$$

determines the critical angle $\theta_c$ for total internal reflection, enabling engineers to design fibers that can carry terabits of data per second across ocean floors.

#### Acoustic Engineering and Medical Diagnostics

The behavior of sound waves at interfaces has deep implications for both architectural acoustics and medical imaging. In concert hall design, architects carefully calculate reflection patterns to ensure optimal sound distribution. The angle-dependent reflection coefficient:

$$
R(\theta) = \frac{Z_2\cos\theta_i - Z_1\cos\theta_t}{Z_2\cos\theta_i + Z_1\cos\theta_t}
$$

helps determine how different frequencies of sound will behave at various surfaces, enabling the creation of spaces with superior acoustic properties.

Medical ultrasound imaging represents a sophisticated application of acoustic reflection principles. When ultrasonic waves encounter boundaries between different tissues, the impedance mismatch causes partial reflection. The amplitude of the reflected wave, given by:

$$
A_r = A_i\left(\frac{Z_2 - Z_1}{Z_2 + Z_1}\right)
$$

provides information about tissue density and composition. Modern ultrasound systems can process these reflections to create real-time images of internal organs, monitor fetal development, or guide surgical procedures. The frequency of ultrasound waves, typically between 2-18 MHz, is carefully chosen to balance penetration depth with resolution, as higher frequencies provide better resolution but experience greater attenuation.

#### Electromagnetic Applications and Communication Systems

The principles of reflection and transmission extend beyond visible light and sound to the entire electromagnetic spectrum. Radar systems utilize the reflection of radio waves to detect and track objects. The power of the reflected signal follows the radar equation:

$$
P_r = \frac{P_tG_tA_e\sigma}{(4\pi)^2R^4}
$$

where $P_r$ is the received power, $P_t$ is the transmitted power, $G_t$ is the antenna gain, $A_e$ is the effective aperture, $\sigma$ is the radar cross-section, and $R$ is the range to the target.

In wireless communications, understanding how electromagnetic waves reflect off buildings and terrain is crucial for optimal antenna placement. Modern 5G networks use beam-forming techniques that actively manage multiple reflections to improve signal strength and reduce interference. The transmission and reflection of radio waves also enables technologies like RFID tags, where the modulated reflection of incident waves carries identification information.

#### Seismological Studies and Earth Science

In geophysics, the reflection and transmission of seismic waves provide invaluable information about Earth's interior structure. When seismic waves encounter boundaries between different rock layers, they undergo both reflection and refraction. The amplitude of reflected waves depends on the acoustic impedance contrast:

$$
R = \frac{\rho_2v_2 - \rho_1v_1}{\rho_2v_2 + \rho_1v_1}
$$

where $\rho$ is the density and $v$ is the seismic velocity in each layer. This relationship becomes more complex when considering the angle of incidence. For non-normal incidence, the reflection coefficient becomes:

$$
R(\theta) = \frac{\rho_2v_2\cos\theta_i - \rho_1v_1\cos\theta_t}{\rho_2v_2\cos\theta_i + \rho_1v_1\cos\theta_t}
$$

The transmission angle $\theta_t$ is related to the incident angle $\theta_i$ through Snell's law:

$$
\frac{\sin\theta_i}{v_1} = \frac{\sin\theta_t}{v_2}
$$

In seismic exploration, the two-way travel time $t$ for a wave to reflect off a layer at depth $h$ is given by:

$$
t = \frac{2h\cos\theta_i}{v_1}
$$

This relationship enables geophysicists to convert measured time delays into depth information. For multiple layers, the total travel time becomes:

$$
t_{total} = 2\sum_{i=1}^{n} \frac{h_i\cos\theta_i}{v_i}
$$

The amplitude of the received signal decreases with depth due to several factors:
1. Geometric spreading: amplitude decreases as $1/r$
2. Absorption: exponential decay $e^{-\alpha r}$
3. Transmission losses at each interface

The combined effect gives the recorded amplitude $A(r)$ at distance $r$:

$$
A(r) = A_0\frac{e^{-\alpha r}}{r}\prod_{i=1}^{n} T_i
$$

where $T_i$ are the transmission coefficients at each interface.

In modern seismic surveys, arrays of geophones record the ground motion $u(t)$ at various offsets $x$ from the source. The recorded wave field can be expressed as:

$$
u(x,t) = \sum_{j=1}^{M} A_j(x)s(t - \tau_j(x))
$$

where $s(t)$ is the source wavelet, $A_j(x)$ is the amplitude factor for the $j$th reflection, and $\tau_j(x)$ is the travel time.

This mathematical framework enables several key applications:

1. **Hydrocarbon Exploration**: By analyzing the reflection patterns and amplitudes, geophysicists can identify potential oil and gas reservoirs. The presence of hydrocarbons often creates distinctive amplitude variations with offset (AVO):

$$
R(\theta) = A + B\sin^2\theta + C\sin^2\theta\tan^2\theta
$$

where $A$, $B$, and $C$ are functions of the elastic properties of the rocks.

2. **Crustal Studies**: Deep seismic soundings reveal the structure of Earth's crust. The critical angle $\theta_c$ for total internal reflection:

$$
\theta_c = \arcsin\left(\frac{v_1}{v_2}\right)
$$

creates head waves that travel along geological boundaries, providing information about deep structures.

3. **Earthquake Hazard Assessment**: Analysis of seismic wave propagation helps identify fault zones and assess their potential for generating earthquakes. The energy released in an earthquake scales with the seismic moment $M_0$:

$$
M_0 = \mu AD
$$

where $\mu$ is the shear modulus, $A$ is the fault area, and $D$ is the average displacement.

These sophisticated applications of reflection and transmission principles have revolutionized our understanding of Earth's structure and continue to play a crucial role in resource exploration and hazard assessment. The mathematical framework developed for seismic analysis has also found applications in medical imaging and non-destructive testing of materials.

---

### Practical Questions and Solutions

Let's explore some practical applications of reflection and transmission principles through solved examples.

#### Question 1: Fiber Optic Communication
A fiber optic cable has a core with refractive index $n_1 = 1.48$ and cladding with $n_2 = 1.45$. 

a) Calculate the critical angle for total internal reflection.
b) What is the maximum angle at which light can enter the fiber (acceptance angle)?
c) Calculate the numerical aperture of the fiber.

**Solution**:

a) The critical angle is given by:
$$
\theta_c = \arcsin\left(\frac{n_2}{n_1}\right) = \arcsin\left(\frac{1.45}{1.48}\right) = 78.5°
$$

b) Using the relationship between the acceptance angle $\theta_a$ and refractive indices:
$$
\sin\theta_a = \sqrt{n_1^2 - n_2^2}
$$
$$
\theta_a = \arcsin\sqrt{1.48^2 - 1.45^2} = 16.2°
$$

c) The numerical aperture (NA) is:
$$
NA = \sqrt{n_1^2 - n_2^2} = \sqrt{1.48^2 - 1.45^2} = 0.28
$$

#### Question 2: Ultrasound Imaging
An ultrasound wave travels from soft tissue ($Z_1 = 1.63 \times 10^6$ kg/m²s) to bone ($Z_2 = 7.8 \times 10^6$ kg/m²s).

a) Calculate the reflection coefficient.
b) What percentage of the incident energy is reflected?
c) If the initial intensity is 100 W/m², what is the transmitted intensity?

**Solution**:

a) The reflection coefficient is:
$$
R = \frac{Z_2 - Z_1}{Z_2 + Z_1} = \frac{7.8 - 1.63}{7.8 + 1.63} = 0.655
$$

b) The energy reflection coefficient is:
$$
R_E = R^2 = (0.655)^2 = 0.429 \text{ or } 42.9\%
$$

c) The transmitted intensity:
$$
I_t = I_i(1 - R_E) = 100(1 - 0.429) = 57.1 \text{ W/m}^2
$$

#### Question 3: Seismic Exploration
A seismic wave travels through limestone ($v_1 = 6000$ m/s) and encounters a granite layer ($v_2 = 5500$ m/s) at an angle of 30°.

a) Calculate the angle of transmission.
b) If the wave reflects off a horizontal layer at depth 1 km, calculate the two-way travel time.

**Solution**:

a) Using Snell's law:
$$
\frac{\sin\theta_2}{v_2} = \frac{\sin\theta_1}{v_1}
$$
$$
\theta_2 = \arcsin\left(\frac{v_2\sin\theta_1}{v_1}\right) = \arcsin\left(\frac{5500\sin(30°)}{6000}\right) = 27.3°
$$

b) The two-way travel time:
$$
t = \frac{2h\cos\theta_1}{v_1} = \frac{2(1000)\cos(30°)}{6000} = 0.289 \text{ seconds}
$$

#### Question 4: Optical Coatings
An anti-reflection coating of thickness $d$ and refractive index $n_2 = 1.38$ is applied to glass ($n_3 = 1.52$). The coating is optimized for light in air ($n_1 = 1.00$) at wavelength $\lambda = 550$ nm.

a) Calculate the optimal thickness for destructive interference of reflected light.
b) What is the reflection coefficient at normal incidence?

**Solution**:

a) For destructive interference, the thickness should be:
$$
d = \frac{\lambda}{4n_2} = \frac{550 \times 10^{-9}}{4(1.38)} = 99.6 \text{ nm}
$$

b) The reflection coefficient at the first interface:
$$
R_1 = \left(\frac{n_2 - n_1}{n_2 + n_1}\right)^2 = \left(\frac{1.38 - 1.00}{1.38 + 1.00}\right)^2 = 0.0249
$$

At the second interface:
$$
R_2 = \left(\frac{n_3 - n_2}{n_3 + n_2}\right)^2 = \left(\frac{1.52 - 1.38}{1.52 + 1.38}\right)^2 = 0.0025
$$

#### Question 5: Architectural Acoustics
A concert hall wall has a reflection coefficient of 0.85 for sound waves at 1000 Hz. The sound source produces 90 dB at 10 meters from the wall.

a) Calculate the intensity of the reflected sound at 10 meters from the wall.
b) What is the sound pressure level (SPL) of the combined direct and reflected waves?

**Solution**:

a) First, convert sound pressure level to intensity:
$$
I_0 = 10^{-12} \text{ W/m}^2
$$
$$
I_i = I_0 \times 10^{90/10} = 10^{-3} \text{ W/m}^2
$$

The reflected intensity:
$$
I_r = 0.85I_i = 0.85 \times 10^{-3} = 8.5 \times 10^{-4} \text{ W/m}^2
$$

b) The combined SPL:
$$
SPL = 10\log_{10}\left(\frac{I_i + I_r}{I_0}\right) = 92.3 \text{ dB}
$$

#### Question 6: Wave Transmission in Multiple Layers
A sound wave travels through three media: air ($Z_1 = 415$ kg/m²s), tissue ($Z_2 = 1.63 \times 10^6$ kg/m²s), and bone ($Z_3 = 7.8 \times 10^6$ kg/m²s).

a) Calculate the transmission coefficient for each interface.
b) What percentage of the initial intensity reaches the bone?
c) If the initial sound intensity is 120 dB, what is the intensity level in the bone?

**Solution**:

a) For air-tissue interface:
$$
T_1 = \frac{4Z_1Z_2}{(Z_1 + Z_2)^2} = \frac{4(415)(1.63 \times 10^6)}{(415 + 1.63 \times 10^6)^2} = 0.00102
$$

For tissue-bone interface:
$$
T_2 = \frac{4Z_2Z_3}{(Z_2 + Z_3)^2} = \frac{4(1.63 \times 10^6)(7.8 \times 10^6)}{(1.63 \times 10^6 + 7.8 \times 10^6)^2} = 0.571
$$

b) The overall transmission coefficient:
$$
T_{total} = T_1 \times T_2 = 0.00102 \times 0.571 = 0.000582
$$

Percentage of intensity transmitted = $0.000582 \times 100\% = 0.0582\%$

c) Initial intensity at 120 dB:
$$
I_0 = 10^{-12} \text{ W/m}^2
$$
$$
I_i = I_0 \times 10^{120/10} = 1 \text{ W/m}^2
$$

Final intensity:
$$
I_f = I_i \times T_{total} = 1 \times 0.000582 = 0.000582 \text{ W/m}^2
$$

Final intensity level:
$$
SPL = 10\log_{10}\left(\frac{0.000582}{10^{-12}}\right) = 87.6 \text{ dB}
$$

#### Question 7: Wave Reflection at Moving Boundary
A wave pulse travels along a string with speed $v = 30$ m/s and encounters a boundary moving away at speed $u = 5$ m/s.

a) Calculate the frequency of the reflected wave if the incident wave frequency is 100 Hz.
b) What is the wavelength of the reflected wave?
c) Determine the phase shift between incident and reflected waves.

**Solution**:

a) The frequency of the reflected wave is given by the Doppler effect formula:
$$
f_r = f_i\left(\frac{v - u}{v + u}\right) = 100\left(\frac{30 - 5}{30 + 5}\right) = 71.4 \text{ Hz}
$$

b) The wavelength of the reflected wave:
$$
\lambda_r = \frac{v}{f_r} = \frac{30}{71.4} = 0.42 \text{ m}
$$

c) Phase shift at moving boundary:
$$
\Delta\phi = 2\arctan\left(\frac{u}{v}\right) = 2\arctan\left(\frac{5}{30}\right) = 18.9°
$$

#### Question 8: Impedance Matching
A transducer ($Z_1 = 5 \times 10^6$ kg/m²s) is used to transmit waves into steel ($Z_2 = 47 \times 10^6$ kg/m²s). A matching layer is added between them.

a) Calculate the optimal impedance for the matching layer.
b) If a material with this impedance is used, what is the overall transmission coefficient?
c) Compare this with the transmission coefficient without the matching layer.

**Solution**:

a) The optimal impedance for the matching layer:
$$
Z_m = \sqrt{Z_1Z_2} = \sqrt{(5 \times 10^6)(47 \times 10^6)} = 15.3 \times 10^6 \text{ kg/m²s}
$$

b) With matching layer, transmission through each interface:
$$
T_1 = \frac{4Z_1Z_m}{(Z_1 + Z_m)^2} = \frac{4(5)(15.3)}{(5 + 15.3)^2} = 0.751
$$
$$
T_2 = \frac{4Z_mZ_2}{(Z_m + Z_2)^2} = \frac{4(15.3)(47)}{(15.3 + 47)^2} = 0.751
$$

Overall transmission:
$$
T_{total} = T_1 \times T_2 = 0.751 \times 0.751 = 0.564 \text{ or } 56.4\%
$$

c) Without matching layer:
$$
T = \frac{4Z_1Z_2}{(Z_1 + Z_2)^2} = \frac{4(5)(47)}{(5 + 47)^2} = 0.365 \text{ or } 36.5\%
$$

The matching layer improves transmission by about 20 percentage points.

#### Question 9: Reflection from Layered Media
A wave encounters two thin films with thicknesses $d_1 = \lambda/4$ and $d_2 = \lambda/2$, where $\lambda$ is the wavelength. The reflection coefficients at each interface are $r_1 = 0.3$, $r_2 = 0.2$, and $r_3 = 0.1$.

a) Calculate the phase differences for waves reflected from each interface.
b) Find the total reflection coefficient considering the first two reflections.
c) What thickness of the first layer would maximize constructive interference?

**Solution**:

a) Phase differences:
- First interface: $\phi_1 = 0°$
- Second interface: $\phi_2 = \frac{4\pi d_1}{\lambda} = \pi$
- Third interface: $\phi_3 = \frac{4\pi(d_1 + d_2)}{\lambda} = 3\pi$

b) Total reflection coefficient (first two reflections):
$$
r_{total} = r_1 + r_2e^{i\pi} = 0.3 - 0.2 = 0.1
$$

c) For maximum constructive interference:
$$
d_{max} = \frac{\lambda}{2} \text{ or odd multiples of } \frac{\lambda}{4}
$$

#### Question 10: Wave Transmission Through Waveguide
A waveguide has width $a = 2$ cm and supports TE modes. The operating frequency is 15 GHz.

a) Calculate the cutoff frequency for the TE₁₀ mode.
b) Determine the phase velocity in the waveguide.
c) Find the wave impedance for this mode.

**Solution**:

a) Cutoff frequency for TE₁₀ mode:
$$
f_c = \frac{c}{2a} = \frac{3 \times 10^8}{2(0.02)} = 7.5 \text{ GHz}
$$

b) Phase velocity:
$$
v_p = \frac{c}{\sqrt{1 - (f_c/f)^2}} = \frac{3 \times 10^8}{\sqrt{1 - (7.5/15)^2}} = 3.35 \times 10^8 \text{ m/s}
$$

c) Wave impedance:
$$
Z_{TE} = \frac{\eta_0}{\sqrt{1 - (f_c/f)^2}} = \frac{377}{\sqrt{1 - (7.5/15)^2}} = 419 \text{ Ω}
$$

where $\eta_0 = 377$ Ω is the impedance of free space.

These examples demonstrate how reflection and transmission principles apply across different wave phenomena, from acoustics to electromagnetics. Understanding these concepts is crucial for designing and optimizing wave-based systems and devices.

---

### Additional Practical Questions

#### Question 11: Electromagnetic Wave at Dielectric Interface
An electromagnetic wave in air ($n_1 = 1.0$) is incident on a dielectric material ($n_2 = 1.5$) at an angle of 45°.

a) Calculate the angle of refraction.
b) Determine the reflection coefficient for perpendicular polarization.
c) Calculate the Brewster angle for this interface.

**Solution**:

a) Using Snell's law:
$$
n_1\sin\theta_1 = n_2\sin\theta_2
$$
$$
\theta_2 = \arcsin\left(\frac{n_1\sin\theta_1}{n_2}\right) = \arcsin\left(\frac{1.0\sin(45°)}{1.5}\right) = 28.1°
$$

b) For perpendicular polarization (TE wave):
$$
r_\perp = \frac{n_1\cos\theta_1 - n_2\cos\theta_2}{n_1\cos\theta_1 + n_2\cos\theta_2}
$$
$$
r_\perp = \frac{1.0\cos(45°) - 1.5\cos(28.1°)}{1.0\cos(45°) + 1.5\cos(28.1°)} = -0.291
$$

c) Brewster angle (where reflection coefficient for parallel polarization is zero):
$$
\theta_B = \arctan\left(\frac{n_2}{n_1}\right) = \arctan(1.5) = 56.3°
$$

#### Question 12: Seismic Wave Reflection
A seismic P-wave traveling at 5000 m/s hits a boundary at 30° where the wave speed changes to 6000 m/s.

a) Find the angle of the reflected P-wave.
b) Calculate the angle of the transmitted P-wave.
c) If the densities of the media are ρ₁ = 2700 kg/m³ and ρ₂ = 3000 kg/m³, find the reflection coefficient.

**Solution**:

a) Angle of reflection equals angle of incidence:
$$
\theta_r = \theta_i = 30°
$$

b) Using Snell's law for velocities:
$$
\frac{\sin\theta_1}{v_1} = \frac{\sin\theta_2}{v_2}
$$
$$
\theta_2 = \arcsin\left(\frac{v_2\sin\theta_1}{v_1}\right) = \arcsin\left(\frac{6000\sin(30°)}{5000}\right) = 36.9°
$$

c) Reflection coefficient using acoustic impedances:
$$
Z_1 = \rho_1v_1 = 2700 \times 5000 = 13.5 \times 10^6 \text{ kg/m²s}
$$
$$
Z_2 = \rho_2v_2 = 3000 \times 6000 = 18.0 \times 10^6 \text{ kg/m²s}
$$
$$
R = \frac{Z_2\cos\theta_1 - Z_1\cos\theta_2}{Z_2\cos\theta_1 + Z_1\cos\theta_2} = 0.142
$$

#### Question 13: Transmission Line Reflection
A transmission line with characteristic impedance $Z_0 = 50$ Ω is terminated with a load impedance $Z_L = 75 + j25$ Ω.

a) Calculate the reflection coefficient at the load.
b) Find the standing wave ratio (SWR).
c) Determine the distance to the first voltage minimum from the load.

**Solution**:

a) Complex reflection coefficient:
$$
\Gamma = \frac{Z_L - Z_0}{Z_L + Z_0} = \frac{(75 + j25) - 50}{(75 + j25) + 50} = 0.304\angle 18.4°
$$

b) Standing wave ratio:
$$
SWR = \frac{1 + |\Gamma|}{1 - |\Gamma|} = \frac{1 + 0.304}{1 - 0.304} = 1.87
$$

c) Distance to first voltage minimum:
$$
d_{min} = \frac{\lambda}{4} - \frac{\lambda}{2\pi}\arg(\Gamma) = \frac{\lambda}{4} - \frac{\lambda}{2\pi}(18.4°) = 0.199\lambda
$$

#### Question 14: Acoustic Wave in Multilayer System
A 1 MHz ultrasound wave travels through a three-layer system: water ($Z_1 = 1.5 \times 10^6$ kg/m²s), acrylic ($Z_2 = 3.2 \times 10^6$ kg/m²s), and aluminum ($Z_3 = 17 \times 10^6$ kg/m²s). The acrylic layer is λ/4 thick.

a) Calculate the transmission coefficient for normal incidence through the entire system.
b) What is the optimal thickness of acrylic for maximum transmission?
c) Compare the transmission with and without the acrylic layer.

**Solution**:

a) For quarter-wave matching layer:
$$
T_{total} = \frac{4Z_1Z_3}{(Z_1 + Z_3)^2}\left(\frac{2Z_2}{Z_1 + Z_3}\right)^2
$$
$$
T_{total} = \frac{4(1.5)(17)}{(1.5 + 17)^2}\left(\frac{2(3.2)}{1.5 + 17}\right)^2 = 0.312
$$

b) Optimal thickness:
$$
d_{opt} = \frac{\lambda}{4} = \frac{v_{acrylic}}{4f} = \frac{2730}{4(10^6)} = 0.68 \text{ mm}
$$

c) Without acrylic layer:
$$
T_{direct} = \frac{4Z_1Z_3}{(Z_1 + Z_3)^2} = \frac{4(1.5)(17)}{(1.5 + 17)^2} = 0.301
$$

The acrylic layer improves transmission by about 3.7%.

#### Question 15: Quantum Wave Reflection
An electron with energy E = 10 eV encounters a potential step of height V₀ = 15 eV.

a) Calculate the reflection coefficient.
b) Find the transmission coefficient if E > V₀.
c) Determine the decay constant in the classically forbidden region.

**Solution**:

a) For E < V₀ (total reflection):
$$
R = 1 \text{ (total reflection)}
$$

b) If E were greater than V₀, transmission coefficient would be:
$$
T = \frac{4\sqrt{E(E-V_0)}}{(\sqrt{E} + \sqrt{E-V_0})^2}
$$

c) Decay constant in forbidden region:
$$
\kappa = \frac{\sqrt{2m(V_0-E)}}{\hbar} = \sqrt{\frac{2m_e(15-10)\text{ eV}}{(\hbar c)^2}}c = 1.72 \times 10^{10} \text{ m}^{-1}
$$

where $m_e$ is the electron mass and $\hbar$ is the reduced Planck constant.

These additional examples cover:
1. Electromagnetic waves at dielectric interfaces
2. Seismic wave reflection and transmission
3. Transmission line behavior
4. Acoustic waves in multilayer systems
5. Quantum mechanical wave reflection

Each problem demonstrates different aspects of wave reflection and transmission, from classical to quantum mechanical systems.

---

### Summary

Wave reflection and transmission are fundamental phenomena that govern how waves interact with boundaries between different media. The key principles include:

1. **Basic Laws**:
   - Law of Reflection: angle of incidence equals angle of reflection
   - Snell's Law: $n_1\sin\theta_1 = n_2\sin\theta_2$
   - Conservation of Energy: $R + T = 1$

2. **Key Parameters**:
   - Impedance mismatch determines reflection strength
   - Phase changes occur at boundaries
   - Polarization affects reflection coefficients

3. **Applications**:
   - Optical systems: fiber optics, anti-reflection coatings
   - Acoustics: ultrasound imaging, architectural design
   - Seismology: Earth structure mapping
   - Electronics: transmission lines, waveguides
   - Quantum mechanics: particle tunneling

4. **Optimization Techniques**:
   - Impedance matching layers
   - Quarter-wave transformers
   - Multilayer coatings
   - Brewster angle utilization

Understanding these principles enables the design of efficient wave-based technologies, from medical imaging devices to optical communication systems.

