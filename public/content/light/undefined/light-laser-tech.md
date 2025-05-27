## Laser Technology

### Fundamental Principles

Laser operation is based on three fundamental quantum mechanical processes: stimulated absorption, spontaneous emission, and stimulated emission. The term "LASER" is an acronym for Light Amplification by Stimulated Emission of Radiation, which describes the physical process underlying its operation.


![Fundamental Quantum Processes in Laser Operation](/content/images/applications/laser/quantum-processes.svg)
#### Quantum Mechanical Foundations

The interaction between electromagnetic radiation and matter occurs through discrete energy transitions in atomic or molecular systems. For a two-level quantum system with energy states $E_1$ and $E_2$ (where $E_2 > E_1$), the energy difference corresponds to a photon with frequency:

$$ \nu = \frac{E_2 - E_1}{h} $$

where $h$ is Planck's constant.

The three fundamental processes governing laser operation are:

1. **Stimulated Absorption**: An incident photon with energy $h\nu = E_2 - E_1$ is absorbed by an atom in the ground state $E_1$, causing a transition to the excited state $E_2$. The rate of this process is proportional to the radiation intensity $I(\nu)$ and the number of atoms in the ground state $N_1$:

   $$ R_{12} = B_{12} \cdot I(\nu) \cdot N_1 $$

   where $B_{12}$ is the Einstein coefficient for stimulated absorption.

2. **Spontaneous Emission**: An atom in the excited state $E_2$ transitions to the ground state $E_1$ by emitting a photon with energy $h\nu = E_2 - E_1$. This process occurs randomly with a characteristic lifetime $\tau$ and is independent of external radiation:

   $$ R_{21}^{spont} = A_{21} \cdot N_2 = \frac{N_2}{\tau} $$

   where $A_{21}$ is the Einstein coefficient for spontaneous emission and $N_2$ is the number of atoms in the excited state.

3. **Stimulated Emission**: An incident photon with energy $h\nu = E_2 - E_1$ interacts with an atom in the excited state $E_2$, causing it to transition to the ground state $E_1$ and emit a second photon identical to the incident photon in frequency, phase, direction, and polarization. The rate is:

   $$ R_{21}^{stim} = B_{21} \cdot I(\nu) \cdot N_2 $$

   where $B_{21}$ is the Einstein coefficient for stimulated emission.

The Einstein coefficients are related by:

$$ \frac{A_{21}}{B_{21}} = \frac{8\pi h \nu^3}{c^3} $$
$$ B_{12} = B_{21} $$

#### Population Inversion

Under thermal equilibrium, the population distribution between energy levels follows the Boltzmann distribution:

$$ \frac{N_2}{N_1} = \frac{g_2}{g_1} \exp\left(-\frac{E_2 - E_1}{k_B T}\right) $$

where $g_1$ and $g_2$ are the degeneracies of the energy levels, $k_B$ is the Boltzmann constant, and $T$ is the temperature.

For laser operation, a non-equilibrium condition called population inversion must be established, where:

$$ \frac{N_2}{g_2} > \frac{N_1}{g_1} $$

This condition cannot be achieved in a two-level system through optical pumping alone, necessitating at least three or four energy levels.

### Laser Components and Structure

A laser consists of three essential components:

![Basic Laser Components and Structure](/content/images/applications/laser/laser-components.svg)

1. **Gain Medium**: The material that undergoes population inversion and provides amplification through stimulated emission. The gain coefficient $\gamma(\nu)$ is given by:

   $$ \gamma(\nu) = \frac{c^2}{8\pi \nu^2} A_{21} g(\nu) \left(\frac{N_2}{g_2} - \frac{N_1}{g_1}\right) $$

   where $g(\nu)$ is the normalized lineshape function.

2. **Pumping Mechanism**: The energy source that creates and maintains population inversion. Common pumping methods include:
   - Optical pumping (using flash lamps or other lasers)
   - Electrical pumping (direct current in gas lasers or injection current in semiconductor lasers)
   - Chemical reactions
   - Gas-dynamic processes

3. **Optical Resonator**: The cavity that provides feedback and mode selection, typically consisting of two mirrors that form a Fabry-Perot interferometer. For a cavity of length $L$, the resonant frequencies are:

   $$ \nu_q = q \cdot \frac{c}{2L} $$

   where $q$ is an integer and $c$ is the speed of light.

The threshold condition for laser oscillation is reached when the round-trip gain equals the round-trip losses:

$$ R_1 R_2 \exp(2\gamma L) = 1 $$

where $R_1$ and $R_2$ are the mirror reflectivities.

### Laser Types and Characteristics

#### Solid-State Lasers

Solid-state lasers utilize crystalline or glass materials doped with active ions. The Nd:YAG laser is a prominent example, with neodymium ions (Nd³⁺) embedded in a yttrium aluminum garnet (YAG) host crystal. The primary emission wavelength is 1064 nm, corresponding to the ⁴F₃/₂ → ⁴I₁₁/₂ transition in Nd³⁺.

![Common Laser Types and Energy Level Structures](/content/images/applications/laser/laser-types.svg)

The rate equations for a four-level solid-state laser are:

$$ \frac{dN_2}{dt} = W_p N_1 - \frac{N_2}{\tau_2} - B_{21} I N_2 $$
$$ \frac{dI}{dt} = c B_{21} N_2 I - \frac{I}{\tau_c} $$

where $W_p$ is the pumping rate, $\tau_2$ is the upper level lifetime, $\tau_c$ is the cavity photon lifetime, and $I$ is the intracavity photon density.

#### Gas Lasers

Gas lasers use electrical discharges to excite gas molecules or atoms. The helium-neon (He-Ne) laser operates at 632.8 nm using a mixture of helium and neon gases. The excitation mechanism involves:

1. Electron impact excitation of helium atoms to metastable states
2. Resonant energy transfer from helium to neon atoms
3. Stimulated emission between specific neon energy levels

CO₂ lasers emit at 10.6 μm and achieve high power efficiency (up to 20%) through vibrational-rotational transitions in CO₂ molecules.

#### Semiconductor Lasers

Semiconductor lasers (laser diodes) use p-n junctions in direct bandgap semiconductors. When forward-biased, electrons and holes recombine across the junction, emitting photons. The emission wavelength is determined by the bandgap energy $E_g$:

$$ \lambda = \frac{hc}{E_g} $$

For GaAs, $E_g \approx 1.42$ eV, yielding $\lambda \approx 870$ nm.

The threshold current density for a semiconductor laser is:

$$ J_{th} = \frac{ed}{η_{i}\tau_r} \left(\frac{\alpha_i + \frac{1}{2L}\ln\frac{1}{R_1 R_2}}{Γ}\right) $$

where $d$ is the active layer thickness, $η_i$ is the internal quantum efficiency, $\tau_r$ is the radiative recombination lifetime, $\alpha_i$ is the internal loss, and $Γ$ is the optical confinement factor.

#### Fiber Lasers

Fiber lasers incorporate the gain medium within an optical fiber, typically doped with rare-earth ions such as erbium (Er³⁺), ytterbium (Yb³⁺), or thulium (Tm³⁺). The fiber core serves as both the gain medium and the waveguide for the laser radiation.

The advantages of fiber lasers include:
- High beam quality (M² approaching 1)
- Efficient heat dissipation due to high surface-to-volume ratio
- Robust and compact design
- High efficiency (>30%)

Erbium-doped fiber lasers operate at 1.55 μm, coinciding with the minimum attenuation window of silica fibers, making them ideal for telecommunications applications.

### Laser Beam Characteristics

#### Gaussian Beam Propagation

The fundamental transverse mode of a laser (TEM₀₀) has a Gaussian intensity profile:

![Gaussian Beam Propagation](/content/images/applications/laser/gaussian-beam.svg)

$$ I(r,z) = I_0 \left(\frac{w_0}{w(z)}\right)^2 \exp\left(-\frac{2r^2}{w(z)^2}\right) $$

where $w(z)$ is the beam radius at position $z$, given by:

$$ w(z) = w_0 \sqrt{1 + \left(\frac{z}{z_R}\right)^2} $$

The parameter $z_R = \frac{\pi w_0^2}{\lambda}$ is the Rayleigh range, and $w_0$ is the beam waist radius.

The divergence angle of a Gaussian beam is:

$$ \theta = \frac{\lambda}{\pi w_0} $$

#### Beam Quality

The beam quality factor M² quantifies the deviation of a laser beam from an ideal Gaussian beam:

![Laser Resonator Modes and Stability](/content/images/applications/laser/resonator-modes.svg)

$$ M^2 = \frac{\pi w_0 \theta}{\lambda} $$

For an ideal Gaussian beam, M² = 1. Higher values indicate increased divergence and reduced focusability.

#### Coherence Properties

Lasers exhibit high degrees of temporal and spatial coherence. The coherence time $\tau_c$ is related to the spectral linewidth $\Delta\nu$ by:

$$ \tau_c \approx \frac{1}{2\pi\Delta\nu} $$

The coherence length is:

$$ L_c = c\tau_c \approx \frac{c}{2\pi\Delta\nu} $$

### Laser Applications

#### Materials Processing

Laser material processing utilizes the high power density achievable with focused laser beams. The power density for a Gaussian beam focused to a spot of radius $w_f$ is:

![Laser Applications and Techniques](/content/images/applications/laser/laser-applications.svg)

$$ I = \frac{2P}{\pi w_f^2} $$

where $P$ is the laser power.

For laser cutting, the maximum cutting speed $v$ is approximately:

$$ v \approx \frac{P}{ρd\sqrt{πα}(c_p(T_m-T_0)+L_m)} $$

where $ρ$ is the material density, $d$ is the thickness, $α$ is the thermal diffusivity, $c_p$ is the specific heat, $T_m$ is the melting temperature, $T_0$ is the initial temperature, and $L_m$ is the latent heat of melting.

#### Optical Communications

In fiber-optic communications, directly modulated semiconductor lasers are characterized by their modulation bandwidth, limited by the relaxation oscillation frequency:

$$ f_r = \frac{1}{2\pi}\sqrt{\frac{vg a_0 S_0}{\tau_p}} $$

where $v_g$ is the group velocity, $a_0$ is the differential gain, $S_0$ is the photon density, and $\tau_p$ is the photon lifetime.

The bit rate-distance product for dispersion-limited systems is:

$$ B \cdot L \leq \frac{c}{2\lambda^2|D|\Delta\lambda} $$

where $B$ is the bit rate, $L$ is the transmission distance, $D$ is the dispersion parameter, and $\Delta\lambda$ is the spectral width.

#### Medical Applications

In laser surgery, the thermal relaxation time $\tau_{th}$ determines the pulse duration required for selective photothermolysis:

$$ \tau_{th} = \frac{d^2}{4α} $$

where $d$ is the target structure diameter and $α$ is the thermal diffusivity.

For photodynamic therapy, the light dose is:

$$ D = E \cdot t $$

where $E$ is the irradiance (W/cm²) and $t$ is the exposure time.

#### Scientific Research

Ultrafast lasers generate pulses with durations in the femtosecond (10⁻¹⁵ s) to picosecond (10⁻¹² s) range. The time-bandwidth product for transform-limited pulses is:

![Nonlinear Optical Processes in Lasers](/content/images/applications/laser/nonlinear-optics.svg)

$$ \Delta\nu \cdot \Delta t \geq K $$

where $K$ is a constant depending on the pulse shape (0.441 for Gaussian pulses).

High-intensity laser-matter interactions enter the relativistic regime when the normalized vector potential approaches unity:

$$ a_0 = \frac{eE_0}{m_e\omega c} \approx 0.85 \times 10^{-9} \lambda[\mu m] \sqrt{I[W/cm^2]} $$

where $E_0$ is the electric field amplitude, $\omega$ is the angular frequency, and $I$ is the intensity.

### Practice Problems

1. **Laser Threshold Calculation**

Problem: A Nd:YAG laser has the following parameters: stimulated emission cross-section σ = 2.8 × 10⁻¹⁹ cm², upper-level lifetime τ = 230 μs, cavity length L = 10 cm, output coupler reflectivity R = 0.98, and internal losses α = 0.01 cm⁻¹. Calculate the threshold population inversion density.

Solution:
The threshold condition requires that the round-trip gain equals the round-trip losses:
$$ \exp(2\sigma N_{th}L) = \frac{1}{R}\exp(\alpha L) $$

Taking the natural logarithm of both sides:
$$ 2\sigma N_{th}L = \ln\left(\frac{1}{R}\right) + \alpha L $$

Solving for $N_{th}$:
$$ N_{th} = \frac{\ln\left(\frac{1}{R}\right) + \alpha L}{2\sigma L} $$

Substituting the values:
$$ N_{th} = \frac{\ln\left(\frac{1}{0.98}\right) + 0.01 \times 10}{2 \times 2.8 \times 10^{-19} \times 10} = 1.8 \times 10^{16} \text{ cm}^{-3} $$

2. **Gaussian Beam Propagation**

Problem: A laser operating at λ = 1064 nm has a beam waist radius w₀ = 0.5 mm. Calculate: (a) the Rayleigh range, (b) the beam radius at z = 10 m, and (c) the far-field divergence angle.

Solution:
(a) The Rayleigh range is:
$$ z_R = \frac{\pi w_0^2}{\lambda} = \frac{\pi \times (0.5 \times 10^{-3})^2}{1064 \times 10^{-9}} = 0.74 \text{ m} $$

(b) The beam radius at z = 10 m is:
$$ w(z) = w_0 \sqrt{1 + \left(\frac{z}{z_R}\right)^2} = 0.5 \times 10^{-3} \sqrt{1 + \left(\frac{10}{0.74}\right)^2} = 6.76 \text{ mm} $$

(c) The far-field divergence angle is:
$$ \theta = \frac{\lambda}{\pi w_0} = \frac{1064 \times 10^{-9}}{\pi \times 0.5 \times 10^{-3}} = 0.68 \text{ mrad} $$

3. **Semiconductor Laser Characteristics**

Problem: A GaAs laser diode (n = 3.6) has an active region length of 300 μm and width of 2 μm. The facet reflectivity is 0.32 (due to the semiconductor-air interface). If the gain coefficient is 40 cm⁻¹ at the threshold current, calculate the threshold gain and the internal losses.

Solution:
The threshold condition is:
$$ R_1 R_2 \exp(2(\gamma_{th} - \alpha_i)L) = 1 $$

With identical facets, R₁ = R₂ = R = 0.32, and taking the natural logarithm:
$$ 2(\gamma_{th} - \alpha_i)L = -\ln(R^2) $$

The mirror loss is:
$$ \alpha_m = \frac{1}{2L}\ln\left(\frac{1}{R^2}\right) = \frac{1}{2 \times 300 \times 10^{-4}}\ln\left(\frac{1}{0.32^2}\right) = 38 \text{ cm}^{-1} $$

Given that the threshold gain coefficient γ_{th} = 40 cm⁻¹, the internal losses are:
$$ \alpha_i = \gamma_{th} - \alpha_m = 40 - 38 = 2 \text{ cm}^{-1} $$

4. **Optical Resonator Modes**

Problem: A laser cavity has length L = 25 cm and mirror radii of curvature R₁ = 50 cm and R₂ = ∞ (flat mirror). Calculate: (a) the g-parameters of the cavity, (b) determine if the cavity is stable, and (c) calculate the TEM₀₀ mode radius at the flat mirror for λ = 633 nm.

Solution:
(a) The g-parameters are defined as:
$$ g_1 = 1 - \frac{L}{R_1} = 1 - \frac{25}{50} = 0.5 $$
$$ g_2 = 1 - \frac{L}{R_2} = 1 - \frac{25}{\infty} = 1 $$

(b) A cavity is stable if $0 \leq g_1g_2 \leq 1$. Here, $g_1g_2 = 0.5 \times 1 = 0.5$, which falls within the stability range, so the cavity is stable.

(c) The mode radius at the flat mirror (mirror 2) is:
$$ w_2 = \sqrt{\frac{\lambda L}{\pi}} \left[\frac{g_1}{g_2(1-g_1g_2)}\right]^{1/4} = \sqrt{\frac{633 \times 10^{-9} \times 0.25}{\pi}} \left[\frac{0.5}{1(1-0.5)}\right]^{1/4} = 0.41 \text{ mm} $$

5. **Q-Switching Dynamics**

Problem: A Q-switched Nd:YAG laser has the following parameters: gain medium length = 10 cm, stimulated emission cross-section σ = 2.8 × 10⁻¹⁹ cm², initial population inversion N₀ = 3 × 10¹⁷ cm⁻³, cavity round-trip time τᵣₜ = 2 ns, and output coupler reflectivity R = 0.5. Calculate: (a) the initial small-signal gain, (b) the number of photons in the output pulse, and (c) the pulse duration.

Solution:
(a) The initial small-signal gain is:
$$ G_0 = \exp(2\sigma N_0 l) = \exp(2 \times 2.8 \times 10^{-19} \times 3 \times 10^{17} \times 10) = \exp(1.68) = 5.37 $$

(b) The number of photons in the output pulse can be estimated from:
$$ N_{ph} = \frac{A l N_0}{2} \ln\left(\frac{G_0}{G_{th}}\right) $$

Assuming a mode area A = 0.1 cm² and threshold gain $G_{th} = 2$ (for R = 0.5):
$$ N_{ph} = \frac{0.1 \times 10 \times 3 \times 10^{17}}{2} \ln\left(\frac{5.37}{2}\right) = 1.5 \times 10^{17} \times 0.99 = 1.49 \times 10^{17} \text{ photons} $$

(c) The pulse duration is approximately:
$$ \tau_p \approx \frac{\tau_{rt}}{\ln(G_0)} = \frac{2 \times 10^{-9}}{1.68} = 1.19 \text{ ns} $$

6. **Mode-Locking Parameters**

Problem: A mode-locked Ti:Sapphire laser operates at λ = 800 nm with a bandwidth Δλ = 30 nm. Calculate: (a) the transform-limited pulse duration assuming a Gaussian pulse shape, (b) the cavity length required for a repetition rate of 80 MHz, and (c) the peak power if the average power is 1 W.

Solution:
(a) For a Gaussian pulse, the time-bandwidth product is $\Delta\nu \cdot \Delta t = 0.441$. First, convert the wavelength bandwidth to frequency:
$$ \Delta\nu = \frac{c \Delta\lambda}{\lambda^2} = \frac{3 \times 10^8 \times 30 \times 10^{-9}}{(800 \times 10^{-9})^2} = 1.41 \times 10^{13} \text{ Hz} $$

The transform-limited pulse duration is:
$$ \Delta t = \frac{0.441}{\Delta\nu} = \frac{0.441}{1.41 \times 10^{13}} = 31.3 \text{ fs} $$

(b) The cavity length for a repetition rate of 80 MHz is:
$$ L = \frac{c}{2f_{rep}} = \frac{3 \times 10^8}{2 \times 80 \times 10^6} = 1.875 \text{ m} $$

(c) The duty cycle is:
$$ D = \Delta t \times f_{rep} = 31.3 \times 10^{-15} \times 80 \times 10^6 = 2.5 \times 10^{-6} $$

The peak power is:
$$ P_{peak} = \frac{P_{avg}}{D} = \frac{1}{2.5 \times 10^{-6}} = 4 \times 10^5 \text{ W} = 400 \text{ kW} $$

7. **Laser Rate Equations**

Problem: A four-level laser system has the following parameters: pump rate R = 10⁹ s⁻¹, upper-level lifetime τ₂ = 1 ms, cavity photon lifetime τₚ = 10 ns, and stimulated emission coefficient B = 10⁻¹⁰ cm³/s. Calculate: (a) the steady-state population inversion at threshold, (b) the steady-state population inversion and photon density at twice the threshold pump rate, and (c) the relaxation oscillation frequency at twice threshold.

Solution:
(a) At threshold, the steady-state condition gives:
$$ \frac{1}{\tau_p} = B N_{th} $$
$$ N_{th} = \frac{1}{B \tau_p} = \frac{1}{10^{-10} \times 10^{-8}} = 10^{18} \text{ cm}^{-3} $$

(b) At twice the threshold pump rate (2R), the steady-state population inversion is:
$$ N_{ss} = \frac{N_{th}}{1 + \frac{S_{ss}}{S_{sat}}} $$

where $S_{sat} = \frac{1}{B \tau_2} = \frac{1}{10^{-10} \times 10^{-3}} = 10^{13} \text{ cm}^{-3}$

For a four-level system at 2R:
$$ S_{ss} = S_{sat} \left(\frac{R}{R_{th}} - 1\right) = 10^{13} \times (2 - 1) = 10^{13} \text{ cm}^{-3} $$

Therefore:
$$ N_{ss} = \frac{10^{18}}{1 + \frac{10^{13}}{10^{13}}} = \frac{10^{18}}{2} = 5 \times 10^{17} \text{ cm}^{-3} $$

(c) The relaxation oscillation frequency at twice threshold is:
$$ \omega_{RO} = \sqrt{\frac{R - R_{th}}{\tau_2 \tau_p}} = \sqrt{\frac{R_{th}}{\tau_2 \tau_p}} = \sqrt{\frac{10^9}{10^{-3} \times 10^{-8}}} = 10^{10} \text{ rad/s} = 1.59 \text{ GHz} $$

8. **Laser Thermal Effects**

Problem: A diode-pumped Nd:YAG laser rod has diameter d = 5 mm, length L = 10 cm, and thermal conductivity k = 14 W/(m·K). The rod absorbs 100 W of pump power, with 30% converted to laser output and 70% to heat. Calculate: (a) the temperature difference between the rod center and surface, (b) the thermal lens focal length, and (c) the maximum stress in the rod.

Solution:
(a) The heat generated is Q = 0.7 × 100 = 70 W. The temperature difference between the center and surface of a uniformly heated rod is:
$$ \Delta T = \frac{Q}{4\pi k L} = \frac{70}{4\pi \times 14 \times 0.1} = 39.8 \text{ K} $$

(b) The thermal lens focal length is:
$$ \frac{1}{f} = \frac{dn/dT \times P_{heat}}{2\pi k A} $$

For Nd:YAG, $dn/dT \approx 7.3 \times 10^{-6}$ K⁻¹, and the rod cross-sectional area $A = \pi(d/2)^2 = \pi \times (2.5 \times 10^{-3})^2 = 1.96 \times 10^{-5}$ m².

$$ \frac{1}{f} = \frac{7.3 \times 10^{-6} \times 70}{2\pi \times 14 \times 1.96 \times 10^{-5}} = 0.84 \text{ m}^{-1} $$

Therefore, $f = 1.19$ m.

(c) The maximum stress (at the rod surface) is:
$$ \sigma_{max} = \frac{\alpha E \Delta T}{4(1-\nu)} $$

For Nd:YAG, thermal expansion coefficient $\alpha = 7.8 \times 10^{-6}$ K⁻¹, Young's modulus $E = 280$ GPa, and Poisson's ratio $\nu = 0.3$.

$$ \sigma_{max} = \frac{7.8 \times 10^{-6} \times 280 \times 10^9 \times 39.8}{4(1-0.3)} = 24.4 \text{ MPa} $$

9. **Nonlinear Optics in Lasers**

Problem: A Q-switched Nd:YAG laser produces pulses with energy E = 100 mJ, duration τ = 10 ns, and beam diameter d = 5 mm. The beam is focused into a KDP crystal (nonlinear coefficient d₃₆ = 0.39 pm/V) for second-harmonic generation. Calculate: (a) the peak intensity, (b) the coherence length for SHG at λ = 1064 nm, and (c) the conversion efficiency for a 1 cm long crystal.

Solution:
(a) The peak intensity is:
$$ I_{peak} = \frac{E}{\tau \times \pi(d/2)^2} = \frac{100 \times 10^{-3}}{10 \times 10^{-9} \times \pi \times (2.5 \times 10^{-3})^2} = 5.09 \times 10^{11} \text{ W/m}^2 = 50.9 \text{ GW/cm}^2 $$

(b) The coherence length is:
$$ L_c = \frac{\pi}{|k_{2\omega} - 2k_{\omega}|} = \frac{\lambda}{4|n_{2\omega} - n_{\omega}|} $$

For KDP, $n_{\omega} \approx 1.494$ and $n_{2\omega} \approx 1.477$ at these wavelengths, so:
$$ L_c = \frac{1064 \times 10^{-9}}{4|1.477 - 1.494|} = \frac{1064 \times 10^{-9}}{4 \times 0.017} = 15.6 \text{ μm} $$

(c) For a non-phase-matched crystal, the conversion efficiency is:
$$ \eta = \frac{2\omega^2 d_{eff}^2 I L^2}{n_{\omega}^2 n_{2\omega} \epsilon_0 c^3} \text{sinc}^2\left(\frac{\Delta k L}{2}\right) $$

For KDP, $d_{eff} = d_{36} = 0.39 \times 10^{-12}$ m/V. With $L = 1$ cm and $\Delta k = \frac{2\pi}{\lambda}(2n_{\omega} - n_{2\omega}) = \frac{2\pi}{1064 \times 10^{-9}}(2 \times 1.494 - 1.477) = 2.83 \times 10^6$ m⁻¹:

$$ \eta = \frac{2(2\pi \times 2.82 \times 10^{14})^2 (0.39 \times 10^{-12})^2 \times 5.09 \times 10^{11} \times (0.01)^2}{(1.494)^2 \times 1.477 \times 8.85 \times 10^{-12} \times (3 \times 10^8)^3} \times \text{sinc}^2\left(\frac{2.83 \times 10^6 \times 0.01}{2}\right) $$

$$ \eta \approx 0.0015 \times \text{sinc}^2(14150) \approx 0.0015 \times (2.5 \times 10^{-9}) \approx 3.75 \times 10^{-12} $$

This extremely low efficiency demonstrates why phase-matching is essential for practical nonlinear frequency conversion.

10. **Ultrafast Laser Pulse Propagation**

Problem: An ultrashort laser pulse with initial duration τ₀ = 100 fs and central wavelength λ = 800 nm propagates through 10 cm of fused silica (group velocity dispersion β₂ = 36 fs²/mm). Calculate: (a) the pulse duration after propagation, (b) the dispersion length, and (c) the spectral bandwidth of the pulse assuming a transform-limited Gaussian pulse.

Solution:
(a) For a Gaussian pulse propagating in a dispersive medium, the pulse duration evolves as:
$$ \tau(z) = \tau_0 \sqrt{1 + \left(\frac{z}{L_D}\right)^2} $$

where $L_D = \frac{\tau_0^2}{|\beta_2|}$ is the dispersion length.

$$ \tau(0.1) = 100 \times 10^{-15} \sqrt{1 + \left(\frac{0.1}{L_D}\right)^2} $$

(b) The dispersion length is:
$$ L_D = \frac{\tau_0^2}{|\beta_2|} = \frac{(100 \times 10^{-15})^2}{36 \times 10^{-15} \times 10^{-3}} = 0.278 \text{ m} = 27.8 \text{ cm} $$

(c) Substituting the dispersion length:
$$ \tau(0.1) = 100 \times 10^{-15} \sqrt{1 + \left(\frac{0.1}{0.278}\right)^2} = 100 \times 10^{-15} \sqrt{1 + 0.129} = 106.3 \text{ fs} $$

(d) For a transform-limited Gaussian pulse, the time-bandwidth product is:
$$ \Delta\nu \cdot \tau_0 = 0.441 $$

The spectral bandwidth is:
$$ \Delta\nu = \frac{0.441}{\tau_0} = \frac{0.441}{100 \times 10^{-15}} = 4.41 \times 10^{12} \text{ Hz} $$

Converting to wavelength:
$$ \Delta\lambda = \frac{\lambda^2}{c} \Delta\nu = \frac{(800 \times 10^{-9})^2}{3 \times 10^8} \times 4.41 \times 10^{12} = 9.4 \text{ nm} $$

These problems cover a comprehensive range of laser physics principles and applications, providing practical examples of the theoretical concepts discussed in the main text.

### Conclusion

Laser technology continues to advance with developments in new gain media, resonator designs, and control techniques. The unique properties of laser radiation—monochromaticity, coherence, directionality, and high intensity—enable applications across diverse fields including communications, manufacturing, medicine, scientific research, and defense systems.