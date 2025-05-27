## Energy Transport in Wave Systems

### Energy Propagation Mechanisms

Wave phenomena facilitate energy transport through spatial propagation of disturbances without accompanying mass transport. This mechanism characterizes diverse physical systems, from mechanical waves in elastic media to electromagnetic radiation in vacuum, enabling energy transmission across various spatial and temporal scales.

![Wave Energy Transfer](/content/waves-and-oscillations/wave-propagation/images/wave-energy-transfer.svg)


## Wave Amplitude and Energy

The amplitude of a wave – its maximum displacement from equilibrium – is directly related to the energy it carries. This relationship is not linear but quadratic:

![Wave Energy vs Amplitude](/content/waves-and-oscillations/wave-propagation/images/wave-energy-amplitude.svg)

$E \propto A^2$

This means that doubling the amplitude quadruples the energy! This relationship has important implications in many real-world situations, from the destructive power of large ocean waves to the design of sound-proofing materials.

### Power and Energy Transfer Rate

The rate at which waves transfer energy – their power – depends on both the energy per wave and the frequency of the waves:

![Wave Power and Frequency](/content/waves-and-oscillations/wave-propagation/images/wave-power-frequency.svg)

$P = E × f$

This explains why high-frequency waves often carry more power than low-frequency ones with the same amplitude. It's also why radio transmitters use high frequencies to transmit data more efficiently.


### Energy Distribution in Wave Systems

In mechanical wave systems, energy propagation manifests through periodic interconversion between kinetic and potential energy densities. This energy partition exhibits spatial and temporal periodicity corresponding to the wave's phase progression. The total energy density remains constant in the absence of dissipative mechanisms, demonstrating local energy conservation in the wave system.

For transverse waves in continuous media, particle motion occurs perpendicular to the wave propagation direction. The associated energy distribution comprises kinetic energy from particle velocities and potential energy from medium deformation. The phase relationship between these energy components determines the wave's propagation characteristics.

### Kinetic Energy Density Analysis

The kinetic energy density in a wave system arises from the transverse velocity field. Consider an infinitesimal element of length $dx$ in a string with linear mass density $\mu$. The element undergoes transverse oscillations with velocity $\frac{\partial y}{\partial t}$, yielding a differential mass $dm = \mu dx$. The instantaneous kinetic energy of this differential element is given by:

$$
dK = \frac{1}{2}dm\left(\frac{\partial y}{\partial t}\right)^2 = \frac{1}{2}\mu dx\left(\frac{\partial y}{\partial t}\right)^2
$$

This expression demonstrates the quadratic dependence of kinetic energy density on transverse velocity. At maximum displacement, the velocity vanishes, corresponding to zero kinetic energy. Conversely, at equilibrium position, maximum velocity yields peak kinetic energy, illustrating the periodic energy conversion characteristic of wave motion.

### Potential Energy: The Energy of Deformation

As the wave distorts the string from its equilibrium position, it creates regions of local stretching. This deformation stores elastic potential energy in the string. The amount of stretching is related to the local slope of the string, given by $\frac{\partial y}{\partial x}$. For a small segment of length $dx$, the potential energy is:

$$
dU = \frac{1}{2}T\left(\frac{\partial y}{\partial x}\right)^2dx
$$

Here, $T$ represents the tension in the string. The quadratic dependence on the slope indicates that the potential energy increases rapidly with greater deformation. When a segment of the string reaches its maximum displacement, its slope (and thus its potential energy) is at its peak, while at the equilibrium position, the string is momentarily straight, and its potential energy is minimal.

### The Energy Balance

The total energy density at any point along the string represents the sum of kinetic and potential energy contributions per unit length. An important feature of wave motion emerges when we examine this total energy density:

$$
\mathcal{E} = \mu\left(\frac{\partial y}{\partial t}\right)^2 = T\left(\frac{\partial y}{\partial x}\right)^2
$$

Energy density oscillates between kinetic and potential forms, but their sum remains constant as the wave propagates. This conservation of energy density is a manifestation of the broader principle of energy conservation in physical systems.

For a sinusoidal wave described by $y(x,t) = A\sin(kx - \omega t)$, we can calculate the average energy density over one complete cycle:

$$
\bar{\mathcal{E}} = \frac{1}{2}\mu\omega^2A^2 = \frac{1}{2}T k^2A^2
$$

This expression shows that the average energy density is proportional to:
- The square of the wave amplitude ($A^2$)
- The square of the angular frequency ($\omega^2$)
- The linear mass density of the string ($\mu$)

This relationship explains why larger amplitude waves carry more energy and why high-frequency waves can be more energetic than low-frequency waves of the same amplitude.

## Power Transmission in Wave Motion

### The Flow of Energy Through Space

Wave motion serves as a fundamental and efficient physical mechanism by which energy is transported through space without the bulk movement of matter. As a wave propagates through a medium, it carries energy from one region to another, creating a continuous flow of power. This process of power transfer helps us understand how energy travels through physical systems and plays a key role in technologies like wave-based communication, sensors, and mechanical systems.

### Instantaneous Power Flow

The instantaneous rate at which energy flows past any point in the medium gives us the power transmission. For a wave on a string, this power flow arises from the combined action of the tension force and the transverse motion of the string. At any instant, the power transmitted through a point is given by:

$$
P(t) = -T\frac{\partial y}{\partial x}\frac{\partial y}{\partial t}
$$

This equation describes how energy moves through a wave.  The negative sign indicates the direction of energy transfer, while the product of the slope ($\frac{\partial y}{\partial x}$) and the transverse velocity ($\frac{\partial y}{\partial t}$) determines the magnitude of power flow. When either the slope or the velocity becomes zero, the instantaneous power transmission momentarily vanishes.

### Average Power in Sinusoidal Waves

For a sinusoidal wave, the time-averaged power over one complete cycle provides a precise quantification of energy transfer, capturing the effective rate at which energy is transported through the medium :

$$
\bar{P} = \frac{1}{2}T\omega^2A^2\sqrt{\frac{T}{\mu}} = \frac{1}{2}\mu\omega^2A^2v
$$

This expression shows that the average power depends on several key factors:

The wave's amplitude enters quadratically ($A^2$), meaning that doubling the amplitude quadruples the power transmitted. This explains why high-amplitude waves can be so destructive – they carry substantially more power than their smaller counterparts.

The frequency appears as $\omega^2$, indicating that high-frequency waves transmit more power than low-frequency waves of the same amplitude. This relationship becomes crucial in applications ranging from musical instruments to communication systems.

The wave speed $v = \sqrt{\frac{T}{\mu}}$ appears linearly, showing that faster waves carry more power. This explains why waves in taut strings (high tension) or light strings (low mass density) can transmit more power.

### Power Flow in Three Dimensions

When waves propagate through three-dimensional space, as with sound waves or electromagnetic radiation, the concept of power flow extends to intensity – the power per unit area. The intensity $I$ follows an inverse-square relationship with distance:

$$
I = \frac{P}{4\pi r^2}
$$

This fundamental relationship explains many familiar phenomena:
- Why sound becomes fainter as we move away from its source
- How radiation from a point source spreads through space
- The distribution of energy in spherical wave fronts

For a plane wave (like a light beam or a well-collimated sound wave), the intensity relationship simplifies to:

$$
I = \frac{P}{A}
$$

where $A$ is the cross-sectional area of the beam. This relationship becomes particularly important in applications like laser systems and directed sound beams.

### Energy Dissipation and Attenuation

In real physical systems, power transmission never occurs without some loss. As waves propagate, they gradually lose energy through various dissipation mechanisms. The amplitude of a wave typically decays exponentially with distance:

$$
A(x) = A_0e^{-\alpha x}
$$

where $\alpha$ is the attenuation coefficient. Since power depends on amplitude squared, the power attenuation follows:

$$
P(x) = P_0e^{-2\alpha x}
$$

This attenuation becomes crucial in practical applications:
- Determining the range of wireless communication systems
- Designing acoustic insulation
- Planning the placement of wave energy harvesting devices

### Applications in Modern Technology

Understanding power transmission in waves has enabled numerous technological advances:

1. **Optical Fiber Communications**: By carefully managing power levels and attenuation in optical fibers, we can transmit information over vast distances with minimal signal loss.

2. **Ultrasonic Medical Devices**: Precise control of wave power enables medical procedures that can destroy tissue (high power) or safely image internal structures (low power).

3. **Wave Energy Conversion**: Ocean wave power plants harness the immense power carried by ocean waves, converting it into useful electrical energy.

4. **Musical Acoustics**: The power transmission characteristics of strings and air columns determine the volume and timbre of musical instruments.

## The Reality of Wave Energy Loss

### Understanding Energy Dissipation in Real Systems

In the idealized world of perfect wave motion, energy would propagate forever without loss. However, the real world presents a far more complex and fascinating picture. As waves travel through physical media, they inevitably encounter various mechanisms that drain their energy, leading to a gradual diminution of their amplitude and power. This process of energy loss, known as attenuation, shapes the behavior of waves in all natural and engineered systems.

### Mechanisms of Energy Dissipation

The phenomenon of energy dissipation in wave motion arises from a combination of interacting mechanisms, including medium resistance, dispersion, and boundary interactions, each contributing to the gradual attenuation of wave amplitude and energy over time or distance.

#### Internal Friction and Viscous Damping

When waves propagate through a medium, the periodic motion of particles against each other generates friction at the microscopic level. This internal friction converts organized wave energy into random thermal motion. The rate at which energy is lost through this mechanism follows a velocity-dependent relationship:

$$
\frac{dE}{dt} = -b\left(\frac{\partial y}{\partial t}\right)^2
$$

Here, $b$ represents the damping coefficient, a measure of the medium's internal resistance to motion. The quadratic dependence on velocity tells us that faster oscillations lead to more rapid energy loss, explaining why high-frequency waves often attenuate more quickly than low-frequency ones.

#### Spatial Attenuation of Wave Amplitude

As waves lose energy to their environment, their amplitude decreases with distance traveled. This decay typically follows an exponential pattern:

$$
A(x) = A_0e^{-\alpha x}
$$

The attenuation coefficient $\alpha$ encapsulates all the various loss mechanisms and depends on both the medium properties and the wave characteristics. Since the energy density is proportional to the square of the amplitude, the energy decay follows an even steeper exponential:

$$
E(x) = E_0e^{-2\alpha x}
$$

This relationship has deep implications for wave propagation in real systems, from sound waves in air to electromagnetic waves in optical fibers.

### Frequency-Dependent Attenuation

One of the most fascinating aspects of wave attenuation is its dependency on frequency. In many media, higher frequency waves attenuate more rapidly than lower frequency waves. This phenomenon leads to a natural filtering effect:

$$
\alpha(\omega) = \alpha_0 + k\omega^n
$$

where $n$ typically ranges from 1 to 2 depending on the medium and loss mechanisms. This frequency-dependent attenuation explains many familiar phenomena:

1. Why distant thunder sounds more like a rumble than a sharp crack
2. Why underwater sound propagation favors low frequencies
3. Why optical fibers exhibit different transmission windows for different wavelengths

### Resonant Absorption

In certain media, waves can encounter resonant absorption, where energy is selectively absorbed at specific frequencies matching natural oscillation modes of the medium's constituents. The absorption coefficient near a resonance frequency $\omega_0$ often follows a Lorentzian profile:

$$
\alpha(\omega) = \frac{\alpha_{\text{max}}}{1 + (\omega - \omega_0)^2/\gamma^2}
$$

where $\gamma$ represents the width of the resonance and $\alpha_{\text{max}}$ is the peak absorption coefficient.

### Compensating for Energy Loss

Understanding energy loss mechanisms has led to various strategies for mitigating their effects:

#### Active Amplification

In many systems, periodic amplification compensates for attenuation. The power gain required at each amplification stage follows:

$$
G = e^{2\alpha L}
$$

where $L$ is the distance between amplifiers. This principle underlies the design of:
- Long-distance optical fiber networks
- Underwater acoustic communication systems
- Seismic monitoring arrays

#### Impedance Matching

Minimizing energy loss at interfaces between different media requires matching their wave impedances. The transmission coefficient for wave power at an interface is:

$$
T = \frac{4Z_1Z_2}{(Z_1 + Z_2)^2}
$$

where $Z_1$ and $Z_2$ are the characteristic impedances of the two media.

### Applications and Implications

The understanding of wave energy loss has practical implications including :

1. **Communication Systems Design**
   The maximum transmission distance for a communication link depends on the balance between initial signal power, attenuation rate, and minimum detectable signal level:
   $$
   L_{\text{max}} = \frac{1}{2\alpha}\ln\left(\frac{P_{\text{initial}}}{P_{\text{min}}}\right)
   $$

2. **Medical Ultrasound**
   Tissue-specific attenuation coefficients help determine:
   - Optimal frequencies for imaging different structures
   - Safe power levels for diagnostic procedures
   - Required compensation in image processing

3. **Architectural Acoustics**
   Understanding energy loss helps in:
   - Designing concert halls with optimal reverberation times
   - Creating effective sound barriers
   - Developing acoustic treatments for noise control

4. **Seismic Monitoring**
   Accounting for wave attenuation is crucial for:
   - Estimating earthquake magnitudes
   - Locating seismic events
   - Characterizing subsurface structures

## Real-World Applications and Detailed Examples

### Ocean Wave Energy Harvesting

The ocean represents one of Earth's largest reservoirs of wave energy. Understanding how this energy can be harnessed requires a deep appreciation of wave power dynamics. For deep water waves, the average power per unit width of wavefront follows:

$$
\bar{P} = \frac{\rho g^2 H^2 T}{32\pi}
$$

where:
- $\rho$ is the water density (approximately 1025 kg/m³)
- $g$ is gravitational acceleration (9.81 m/s²)
- $H$ is the wave height (trough to crest)
- $T$ is the wave period

This relationship reveals why ocean wave energy converters are typically deployed in regions with both large wave heights and longer periods. For example, a wave with:
- Height $H = 2$ meters
- Period $T = 10$ seconds

Delivers an average power per meter of wavefront:

$$
\begin{aligned}
\bar{P} &= \frac{1025 \times (9.81)^2 \times (2)^2 \times 10}{32\pi} \\
&\approx 49.4 \text{ kW/m}
\end{aligned}
$$

### Seismic Wave Attenuation

In seismology, the amplitude of seismic waves decreases with distance due to both geometric spreading and material absorption. The combined effect follows:

$$
A(r) = A_0\left(\frac{r_0}{r}\right)^n e^{-\alpha(r-r_0)}
$$

where:
- $r_0$ is a reference distance
- $n$ depends on wave type (1 for body waves, 0.5 for surface waves)
- $\alpha$ is the absorption coefficient

This relationship helps seismologists:
1. Estimate earthquake magnitudes from distant measurements
2. Understand wave propagation through Earth's layers
3. Design earthquake-resistant structures

### Electromagnetic Wave Propagation

In optical fibers and other waveguides, signal attenuation follows the Beer-Lambert law:

$$
P(z) = P_0e^{-\alpha z}
$$

The attenuation coefficient $\alpha$ typically varies with wavelength, leading to "transmission windows" where losses are minimal. Modern optical fibers achieve remarkably low attenuation:

$$
\alpha \approx 0.2 \text{ dB/km at } \lambda = 1550 \text{ nm}
$$

### Comprehensive Worked Examples

#### Example 1: Wave Energy in a Guitar String

A guitar string vibrates with:
- Amplitude $A = 2$ mm
- Frequency $f = 440$ Hz (A4 note)
- Linear mass density $\mu = 3.6 \times 10^{-3}$ kg/m
- Tension $T = 120$ N

Calculate:
a) The wave speed
b) The average energy density
c) The power transmitted

**Solution**:

a) Wave speed:
   $$
   \begin{aligned}
   v &= \sqrt{\frac{T}{\mu}} \\
   &= \sqrt{\frac{120}{3.6 \times 10^{-3}}} \\
   &= 182.6 \text{ m/s}
   \end{aligned}
   $$

b) Average energy density:
   $$
   \begin{aligned}
   \omega &= 2\pi f = 2\pi(440) = 2765.8 \text{ rad/s} \\
   \bar{\mathcal{E}} &= \frac{1}{2}\mu\omega^2A^2 \\
   &= \frac{1}{2}(3.6 \times 10^{-3})(2765.8)^2(0.002)^2 \\
   &= 0.274 \text{ J/m}
   \end{aligned}
   $$

c) Power transmitted:
   $$
   \begin{aligned}
   \bar{P} &= \frac{1}{2}\mu\omega^2A^2v \\
   &= 0.274 \times 182.6 \\
   &= 50.0 \text{ W}
   \end{aligned}
   $$

#### Example 2: Attenuation in Optical Fiber

An optical signal with initial power $P_0 = 1$ mW is transmitted through a fiber with attenuation coefficient $\alpha = 0.2$ dB/km. Calculate:
a) The power after 50 km
b) The maximum distance for reliable detection if the minimum detectable power is 1 µW

**Solution**:

a) First, convert dB/km to natural units:
   $$
   \begin{aligned}
   0.2 \text{ dB/km} &= \frac{0.2}{4.343} \text{ km}^{-1} \\
   &= 0.046 \text{ km}^{-1}
   \end{aligned}
   $$
   
   Then calculate power:
   $$
   \begin{aligned}
   P(50) &= (1 \text{ mW})e^{-0.046 \times 50} \\
   &= 0.100 \text{ mW} = 100 \text{ µW}
   \end{aligned}
   $$

b) Maximum distance:
   $$
   \begin{aligned}
   L_{\text{max}} &= \frac{1}{\alpha}\ln\left(\frac{P_0}{P_{\text{min}}}\right) \\
   &= \frac{1}{0.046}\ln\left(\frac{1000}{1}\right) \\
   &= 150.8 \text{ km}
   \end{aligned}
   $$

#### Example 3: Sound Wave Intensity

A spherical sound wave has power $P = 100$ W. Calculate:
a) The intensity at 10 m from the source
b) The distance where the intensity equals the threshold of pain (1 W/m²)

**Solution**:

a) At 10 meters:
   $$
   \begin{aligned}
   I &= \frac{P}{4\pi r^2} \\
   &= \frac{100}{4\pi(10)^2} \\
   &= 0.796 \text{ W/m}^2
   \end{aligned}
   $$

b) Distance for pain threshold:
   $$
   \begin{aligned}
   1 &= \frac{100}{4\pi r^2} \\
   r &= \sqrt{\frac{100}{4\pi}} \\
   &= 2.82 \text{ m}
   \end{aligned}
   $$

These examples illustrate how wave energy and power principles apply across different physical systems and scales, from microscopic vibrations to large-scale wave phenomena.

## Key Takeaways

1. Wave energy involves both kinetic and potential components that continuously interchange.
2. Power transmission depends on wave amplitude, frequency, and medium properties.
3. Real waves experience attenuation due to energy dissipation.
4. The study of wave energy and power has important applications in:
   - Ocean energy harvesting
   - Seismic monitoring
   - Communication systems
   - Musical acoustics

## Practical Problems

### Problem 1: Wave Power Calculation

A string wave has amplitude $A = 0.02$ m, frequency $f = 100$ Hz, and tension $T = 100$ N. If the linear mass density is $\mu = 0.05$ kg/m, calculate:

a) The wave speed
b) The average power transmitted

**Solution**:

a) Wave speed:
   $$
   \begin{aligned}
   v &= \sqrt{\frac{T}{\mu}} \\
   &= \sqrt{\frac{100}{0.05}} \\
   &= 44.72 \text{ m/s}
   \end{aligned}
   $$

b) Average power:
   $$
   \begin{aligned}
   \bar{P} &= \frac{1}{2}\mu\omega^2A^2v \\
   &= \frac{1}{2}(0.05)(2\pi\cdot100)^2(0.02)^2(44.72) \\
   &\approx 176.8 \text{ W}
   \end{aligned}
   $$

### Problem 2: Energy Attenuation

A wave's amplitude decreases by 20% over a distance of 5 meters. Find the attenuation coefficient $\alpha$.

**Solution**:
Using $A(x) = A_0e^{-\alpha x}$:
$$
\begin{aligned}
0.8A_0 &= A_0e^{-5\alpha} \\
\ln(0.8) &= -5\alpha \\
\alpha &= -\frac{\ln(0.8)}{5} \\
&\approx 0.045 \text{ m}^{-1}
\end{aligned}
$$

### Problem Set 1: Wave Energy Fundamentals

#### Problem 1.1: Energy Distribution in a Standing Wave
A string of length $L = 2$ m is fixed at both ends and vibrates in its fundamental mode with amplitude $A = 3$ cm. The string has linear mass density $\mu = 0.05$ kg/m and tension $T = 100$ N.

a) What is the fundamental frequency?
b) Calculate the maximum kinetic energy density at the antinode.
c) Find the total energy stored in the standing wave.

**Solution**:

a) The fundamental frequency:
   $$
   \begin{aligned}
   v &= \sqrt{\frac{T}{\mu}} = \sqrt{\frac{100}{0.05}} = 44.72 \text{ m/s} \\
   f_1 &= \frac{v}{2L} = \frac{44.72}{4} = 11.18 \text{ Hz}
   \end{aligned}
   $$

b) Maximum kinetic energy density at antinode:
   $$
   \begin{aligned}
   \omega &= 2\pi f = 70.27 \text{ rad/s} \\
   \mathcal{E}_k &= \frac{1}{2}\mu\omega^2A^2 \\
   &= \frac{1}{2}(0.05)(70.27)^2(0.03)^2 \\
   &= 2.22 \text{ J/m}
   \end{aligned}
   $$

c) Total energy (integrating over length):
   $$
   \begin{aligned}
   E_{\text{total}} &= \int_0^L \mathcal{E}_k \sin^2(\pi x/L) dx \\
   &= 2.22 \text{ J/m} \times L/2 \\
   &= 2.22 \text{ J}
   \end{aligned}
   $$

#### Problem 1.2: Power in a Traveling Wave
A sinusoidal wave travels along a rope with amplitude $A = 2$ cm, frequency $f = 50$ Hz, and wavelength $\lambda = 0.4$ m. The rope has linear density $\mu = 0.03$ kg/m.

a) Calculate the wave speed
b) Determine the power transmitted by the wave
c) If the wave encounters a boundary where 20% of the power is reflected, what is the amplitude of the reflected wave?

**Solution**:

a) Wave speed:
   $$
   v = f\lambda = 50 \times 0.4 = 20 \text{ m/s}
   $$

b) Power transmitted:
   $$
   \begin{aligned}
   \omega &= 2\pi f = 314.16 \text{ rad/s} \\
   \bar{P} &= \frac{1}{2}\mu\omega^2A^2v \\
   &= \frac{1}{2}(0.03)(314.16)^2(0.02)^2(20) \\
   &= 11.83 \text{ W}
   \end{aligned}
   $$

c) Reflected wave amplitude:
   $$
   \begin{aligned}
   \frac{P_r}{P_i} &= 0.2 = \left(\frac{A_r}{A_i}\right)^2 \\
   A_r &= A_i\sqrt{0.2} = 0.02\sqrt{0.2} = 0.00894 \text{ m}
   \end{aligned}
   $$

### Problem Set 2: Wave Attenuation and Energy Loss

#### Problem 2.1: Signal Attenuation in Communication
A radio transmitter broadcasts with initial power $P_0 = 1000$ W. The signal experiences both geometric spreading (inverse square law) and exponential attenuation with coefficient $\alpha = 0.05$ km⁻¹.

a) At what distance will the power density be 1 µW/m²?
b) What percentage of the original power remains after 10 km?
c) How much additional power would be needed at the source to double the effective range?

**Solution**:

a) Distance for target power density:
   $$
   \begin{aligned}
   \frac{P_0e^{-\alpha r}}{4\pi r^2} &= 10^{-6} \\
   1000e^{-0.05r} &= 10^{-6}(4\pi r^2) \\
   r &\approx 15.7 \text{ km}
   \end{aligned}
   $$

b) Power remaining after 10 km:
   $$
   \begin{aligned}
   \frac{P(10)}{P_0} &= \frac{e^{-0.05 \times 10}}{4\pi(10)^2} \times 100\% \\
   &\approx 0.0067\%
   \end{aligned}
   $$

c) For double range:
   $$
   \begin{aligned}
   P_{\text{new}} &= P_0e^{\alpha r} \\
   &= 1000e^{0.05 \times 15.7} \\
   &\approx 2197 \text{ W}
   \end{aligned}
   $$

#### Problem 2.2: Resonant Absorption
A wave encounters a medium with resonant absorption at frequency $f_0 = 1000$ Hz. The absorption coefficient follows a Lorentzian profile:

$$
\alpha(f) = \frac{\alpha_{\text{max}}}{1 + [(f-f_0)/\gamma]^2}
$$

where $\alpha_{\text{max}} = 0.5$ m⁻¹ and $\gamma = 50$ Hz.

a) Calculate the absorption coefficient at $f = 1025$ Hz
b) Find the frequencies where absorption is half the maximum
c) What thickness of material would reduce the wave amplitude by 90% at resonance?

**Solution**:

a) At 1025 Hz:
   $$
   \begin{aligned}
   \alpha(1025) &= \frac{0.5}{1 + [(1025-1000)/50]^2} \\
   &= 0.2 \text{ m}^{-1}
   \end{aligned}
   $$

b) Half-maximum frequencies:
   $$
   \begin{aligned}
   0.25 &= \frac{0.5}{1 + [(f-1000)/50]^2} \\
   f &= 1000 \pm 50 \text{ Hz}
   \end{aligned}
   $$

c) Thickness for 90% reduction:
   $$
   \begin{aligned}
   0.1 &= e^{-0.5x} \\
   x &= \frac{-\ln(0.1)}{0.5} = 4.61 \text{ m}
   \end{aligned}
   $$

### Problem Set 3: Wave Energy Applications

#### Problem 3.1: Ocean Wave Energy Converter
An ocean wave energy converter spans 10 meters of wavefront. The incident waves have:
- Height $H = 3$ m
- Period $T = 12$ s
- Water density $\rho = 1025$ kg/m³

a) Calculate the total power available to the converter
b) If the conversion efficiency is 30%, what is the average electrical power output?
c) How many homes could this power (assume 5 kW per home)?

**Solution**:

a) Available power:
   $$
   \begin{aligned}
   \bar{P} &= \frac{\rho g^2 H^2 T}{32\pi} \times 10 \text{ m} \\
   &= \frac{1025 \times (9.81)^2 \times 9 \times 12}{32\pi} \times 10 \\
   &= 1.34 \times 10^6 \text{ W}
   \end{aligned}
   $$

b) Electrical power output:
   $$
   P_{\text{electrical}} = 0.30 \times 1.34 \times 10^6 = 402 \text{ kW}
   $$

c) Number of homes:
   $$
   N = \frac{402 \text{ kW}}{5 \text{ kW/home}} = 80 \text{ homes}
   $$

These problems cover a wide range of applications and difficulty levels, helping to reinforce understanding of wave energy concepts through practical scenarios.

## Practice Problems

### Problem 1: Wave Energy on a String
A wave traveling on a string has the following parameters:
- Amplitude: A = 3 cm
- Frequency: f = 50 Hz
- Linear mass density: μ = 0.02 kg/m
- Tension: T = 80 N

Calculate:
a) The wave speed
b) The wavelength
c) The average energy density
d) The power transmitted by the wave

**Solution**:
a) Wave speed:
   $$
   \begin{aligned}
   v &= \sqrt{\frac{T}{\mu}} \\
   &= \sqrt{\frac{80}{0.02}} \\
   &= 63.2 \text{ m/s}
   \end{aligned}
   $$

b) Wavelength:
   $$
   \begin{aligned}
   \lambda &= \frac{v}{f} \\
   &= \frac{63.2}{50} \\
   &= 1.26 \text{ m}
   \end{aligned}
   $$

c) Average energy density:
   $$
   \begin{aligned}
   \bar{\mathcal{E}} &= \frac{1}{2}\mu\omega^2A^2 \\
   \omega &= 2\pi f = 2\pi \times 50 = 314.16 \text{ rad/s} \\
   \bar{\mathcal{E}} &= \frac{1}{2} \times 0.02 \times (314.16)^2 \times (0.03)^2 \\
   &= 2.96 \text{ J/m}
   \end{aligned}
   $$

d) Power transmitted:
   $$
   \begin{aligned}
   P &= \bar{\mathcal{E}}v \\
   &= 2.96 \times 63.2 \\
   &= 187.1 \text{ W}
   \end{aligned}
   $$

### Problem 2: Energy Attenuation
A wave travels through a medium where its amplitude decreases exponentially with distance according to $A(x) = A_0e^{-\alpha x}$, where α = 0.5 m⁻¹.

a) If the initial amplitude is 5 cm, what is the amplitude at x = 2 m?
b) What fraction of the initial energy remains at x = 2 m?
c) At what distance will the wave energy be reduced to 10% of its initial value?

**Solution**:
a) At x = 2 m:
   $$
   \begin{aligned}
   A(2) &= 0.05e^{-0.5 \times 2} \\
   &= 0.05e^{-1} \\
   &= 0.0184 \text{ m}
   \end{aligned}
   $$

b) Energy is proportional to A², so:
   $$
   \begin{aligned}
   \frac{E(x)}{E_0} &= \frac{A^2(x)}{A_0^2} = e^{-2\alpha x} \\
   \frac{E(2)}{E_0} &= e^{-2 \times 0.5 \times 2} = e^{-2} \\
   &= 0.135 \text{ or } 13.5\%
   \end{aligned}
   $$

c) For 10% energy:
   $$
   \begin{aligned}
   0.1 &= e^{-2\alpha x} \\
   \ln(0.1) &= -2\alpha x \\
   x &= \frac{-\ln(0.1)}{2\alpha} = \frac{2.30}{1.0} = 2.30 \text{ m}
   \end{aligned}
   $$

### Problem 3: Ocean Wave Energy
Ocean waves approaching a beach have:
- Wave height: H = 1.5 m
- Period: T = 8 s
- Water depth: d = 10 m
- Wave length: λ = 80 m

Calculate:
a) The wave energy per unit surface area
b) The wave power per unit width of wavefront
c) The total power reaching a 100 m wide section of beach

**Solution**:
a) Energy per unit area:
   $$
   \begin{aligned}
   E &= \frac{1}{8}\rho g H^2 \\
   &= \frac{1}{8} \times 1025 \times 9.81 \times (1.5)^2 \\
   &= 2,820 \text{ J/m²}
   \end{aligned}
   $$

b) Wave power per unit width:
   $$
   \begin{aligned}
   P &= \frac{\rho g^2 H^2 T}{32\pi} \\
   &= \frac{1025 \times (9.81)^2 \times (1.5)^2 \times 8}{32\pi} \\
   &= 17,430 \text{ W/m}
   \end{aligned}
   $$

c) Total power for 100 m width:
   $$
   \begin{aligned}
   P_{total} &= 17,430 \times 100 \\
   &= 1.743 \text{ MW}
   \end{aligned}
   $$



## Practice Problems

### Problem 1: Wave Energy on a String
A wave traveling on a string has the following parameters:
- Amplitude: A = 3 cm
- Frequency: f = 50 Hz
- Linear mass density: μ = 0.02 kg/m
- Tension: T = 80 N

Calculate:
a) The wave speed
b) The wavelength
c) The average energy density
d) The power transmitted by the wave

**Solution**:
a) Wave speed:
   $$
   \begin{aligned}
   v &= \sqrt{\frac{T}{\mu}} \\
   &= \sqrt{\frac{80}{0.02}} \\
   &= 63.2 \text{ m/s}
   \end{aligned}
   $$

b) Wavelength:
   $$
   \begin{aligned}
   \lambda &= \frac{v}{f} \\
   &= \frac{63.2}{50} \\
   &= 1.26 \text{ m}
   \end{aligned}
   $$

c) Average energy density:
   $$
   \begin{aligned}
   \bar{\mathcal{E}} &= \frac{1}{2}\mu\omega^2A^2 \\
   \omega &= 2\pi f = 2\pi \times 50 = 314.16 \text{ rad/s} \\
   \bar{\mathcal{E}} &= \frac{1}{2} \times 0.02 \times (314.16)^2 \times (0.03)^2 \\
   &= 2.96 \text{ J/m}
   \end{aligned}
   $$

d) Power transmitted:
   $$
   \begin{aligned}
   P &= \bar{\mathcal{E}}v \\
   &= 2.96 \times 63.2 \\
   &= 187.1 \text{ W}
   \end{aligned}
   $$

### Problem 2: Energy Attenuation
A wave travels through a medium where its amplitude decreases exponentially with distance according to $A(x) = A_0e^{-\alpha x}$, where α = 0.5 m⁻¹.

a) If the initial amplitude is 5 cm, what is the amplitude at x = 2 m?
b) What fraction of the initial energy remains at x = 2 m?
c) At what distance will the wave energy be reduced to 10% of its initial value?

**Solution**:
a) At x = 2 m:
   $$
   \begin{aligned}
   A(2) &= 0.05e^{-0.5 \times 2} \\
   &= 0.05e^{-1} \\
   &= 0.0184 \text{ m}
   \end{aligned}
   $$

b) Energy is proportional to A², so:
   $$
   \begin{aligned}
   \frac{E(x)}{E_0} &= \frac{A^2(x)}{A_0^2} = e^{-2\alpha x} \\
   \frac{E(2)}{E_0} &= e^{-2 \times 0.5 \times 2} = e^{-2} \\
   &= 0.135 \text{ or } 13.5\%
   \end{aligned}
   $$

c) For 10% energy:
   $$
   \begin{aligned}
   0.1 &= e^{-2\alpha x} \\
   \ln(0.1) &= -2\alpha x \\
   x &= \frac{-\ln(0.1)}{2\alpha} = \frac{2.30}{1.0} = 2.30 \text{ m}
   \end{aligned}
   $$

### Problem 3: Ocean Wave Energy
Ocean waves approaching a beach have:
- Wave height: H = 1.5 m
- Period: T = 8 s
- Water depth: d = 10 m
- Wave length: λ = 80 m

Calculate:
a) The wave energy per unit surface area
b) The wave power per unit width of wavefront
c) The total power reaching a 100 m wide section of beach

**Solution**:
a) Energy per unit area:
   $$
   \begin{aligned}
   E &= \frac{1}{8}\rho g H^2 \\
   &= \frac{1}{8} \times 1025 \times 9.81 \times (1.5)^2 \\
   &= 2,820 \text{ J/m²}
   \end{aligned}
   $$

b) Wave power per unit width:
   $$
   \begin{aligned}
   P &= \frac{\rho g^2 H^2 T}{32\pi} \\
   &= \frac{1025 \times (9.81)^2 \times (1.5)^2 \times 8}{32\pi} \\
   &= 17,430 \text{ W/m}
   \end{aligned}
   $$

c) Total power for 100 m width:
   $$
   \begin{aligned}
   P_{total} &= 17,430 \times 100 \\
   &= 1.743 \text{ MW}
   \end{aligned}
   $$

## Real-World Applications

### 1. Ocean Wave Energy Harvesting
- Wave energy converters (WECs) extract energy from surface waves
- Point absorbers oscillate with wave motion
- Oscillating water columns use wave-driven air compression
- Efficiency depends on:
  * Wave height and period
  * Device resonance matching
  * Energy conversion mechanism

### 2. Seismic Wave Analysis
- Earthquake energy propagation through Earth's layers
- P-waves (compression) and S-waves (shear)
- Energy attenuation with distance
- Applications in:
  * Earthquake magnitude measurement
  * Subsurface structure mapping
  * Tsunami early warning systems

### 3. Electromagnetic Wave Applications
- Radio and microwave communication
- Solar energy harvesting
- Medical imaging (X-rays, MRI)
- Energy considerations in:
  * Antenna design
  * Solar panel efficiency
  * Radiation shielding

### 4. Acoustic Energy Applications
- Sound system design
- Noise control and absorption
- Ultrasonic cleaning and welding
- Medical ultrasound
- Factors affecting efficiency:
  * Impedance matching
  * Energy absorption
  * Focusing and beam forming

These applications demonstrate how understanding wave energy transfer is crucial in modern technology, from renewable energy to medical diagnostics and communications systems.

