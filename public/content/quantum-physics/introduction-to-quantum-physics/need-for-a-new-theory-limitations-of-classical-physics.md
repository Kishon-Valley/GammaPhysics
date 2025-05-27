## Need for a New Theory: Limitations of Classical Physics

### Introduction

By the end of the nineteenth century, physics appeared to be approaching completion, with Newtonian mechanics and Maxwell's electromagnetic theory providing a comprehensive description of most observed phenomena. Lord Kelvin famously remarked that physics was essentially complete, with only "two clouds" on the horizon: the Michelson-Morley experiment and blackbody radiation. These "clouds," however, would precipitate a fundamental revolution in our understanding of the physical world. A series of experimental discoveries revealed significant limitations in classical physics, exposing its inability to account for phenomena at atomic and subatomic scales. These failures became the driving force behind the development of quantum mechanics—a theoretical framework that would fundamentally transform our understanding of nature.

## Blackbody Radiation and the Ultraviolet Catastrophe

The study of blackbody radiation presented one of the earliest and most profound challenges to classical physics. A blackbody—a theoretical object that absorbs all incident electromagnetic radiation—emits radiation with a characteristic spectrum dependent only on its temperature. Classical physics, specifically the Rayleigh-Jeans law derived from the equipartition theorem, predicted that the spectral energy density of blackbody radiation at thermal equilibrium would follow:

![Blackbody Radiation](/images/quantum-physics/blackbody-radiation.svg)

$$u(\nu, T) = \frac{8\pi\nu^2}{c^3}k_BT$$

where $\nu$ is frequency, $T$ is temperature, $k_B$ is Boltzmann's constant, and $c$ is the speed of light. This formula correctly described the spectrum at low frequencies but catastrophically failed at high frequencies, predicting:

$$\nu \to \infty \implies u(\nu, T) \to \infty$$

This divergence, known as the "ultraviolet catastrophe," contradicted experimental observations, which showed that the energy density peaked at a specific frequency and then declined exponentially at higher frequencies.

Max Planck resolved this paradox in 1900 by introducing a radical hypothesis: electromagnetic energy could only be emitted or absorbed in discrete packets (quanta) with energy proportional to frequency:

$$E = h\nu$$

where $h$ is Planck's constant ($6.626 \times 10^{-34}$ J·s). This quantization led to Planck's law for blackbody radiation:

$$u(\nu, T) = \frac{8\pi h\nu^3}{c^3}\frac{1}{e^{h\nu/k_BT} - 1}$$

This formula accurately described the entire spectrum and converged to the Rayleigh-Jeans law at low frequencies. Planck initially considered quantization a mathematical artifice rather than a physical reality, but his work marked the first departure from classical physics and the birth of quantum theory.

## The Photoelectric Effect

The photoelectric effect presented another significant challenge to classical electromagnetic theory. When light strikes certain metals, electrons are ejected from the surface. According to classical wave theory, the energy of ejected electrons should increase with the intensity of the incident light. However, Heinrich Hertz (1887) and Philipp Lenard (1902) observed that:

![Photoelectric Effect](/images/quantum-physics/photoelectric-effect.svg)

1. Electrons are only emitted if the incident light exceeds a threshold frequency, regardless of intensity.
2. The maximum kinetic energy of ejected electrons increases linearly with frequency, not intensity.
3. Electron emission occurs immediately, with no delay, even at low light intensities.

These observations contradicted classical predictions. In 1905, Albert Einstein extended Planck's quantum hypothesis, proposing that light itself consists of discrete quanta (later called photons), each with energy $E = h\nu$. The photoelectric effect could then be explained by the equation:

$$K_{max} = h\nu - \phi$$

where $K_{max}$ is the maximum kinetic energy of ejected electrons and $\phi$ is the work function (minimum energy required to remove an electron from the metal). This explanation, which earned Einstein the 1921 Nobel Prize, provided compelling evidence for the particle nature of light and further demonstrated the inadequacy of classical physics.

## The Compton Effect

In 1923, Arthur Compton provided additional evidence for the particle nature of electromagnetic radiation through his experiments on X-ray scattering. Classical wave theory predicted that the wavelength of scattered radiation should be identical to that of the incident radiation. However, Compton observed that X-rays scattered by electrons exhibited increased wavelengths, with the change depending on the scattering angle.

![Compton Effect](/images/quantum-physics/compton-effect.svg)

Compton explained this phenomenon by treating X-rays as particles (photons) that collide elastically with electrons, conserving both energy and momentum. The wavelength shift is given by:

$$\lambda' - \lambda = \frac{h}{m_ec}(1 - \cos\theta)$$

where $\lambda'$ is the wavelength of scattered radiation, $\lambda$ is the incident wavelength, $m_e$ is the electron mass, and $\theta$ is the scattering angle. The quantity $h/m_ec$ is known as the Compton wavelength of the electron ($2.43 \times 10^{-12}$ m). The Compton effect provided irrefutable evidence for the particle-like behavior of radiation and further undermined classical wave theory.

## Atomic Spectra and the Failure of Classical Models

Classical physics also failed to explain the discrete spectral lines observed in atomic emission and absorption spectra. According to the Rutherford model (1911), electrons orbit the nucleus much like planets orbit the sun. However, classical electrodynamics dictates that accelerating charged particles must radiate electromagnetic energy continuously. This would cause electrons to lose energy, spiral into the nucleus within approximately $10^{-10}$ seconds, and produce a continuous spectrum—contrary to the observed discrete spectral lines and the stability of atoms.

![Bohr Model of the Atom](/images/quantum-physics/bohr-model.svg)

Niels Bohr addressed this issue in 1913 by introducing three postulates for the hydrogen atom:

1. Electrons can only occupy certain discrete orbits where they do not radiate energy.
2. The allowed orbits are those where the electron's angular momentum is quantized: $L = n\hbar$ (where $n$ is an integer and $\hbar = h/2\pi$).
3. Radiation is emitted or absorbed only when an electron transitions between allowed orbits, with energy $E = h\nu = |E_f - E_i|$.

These postulates led to the energy levels of the hydrogen atom:

$$E_n = -\frac{13.6 \text{ eV}}{n^2}$$

and the Rydberg formula for spectral lines:

$$\frac{1}{\lambda} = R\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$$

where $R$ is the Rydberg constant. Bohr's model successfully explained the hydrogen spectrum but could not be generalized to more complex atoms and lacked a rigorous theoretical foundation. It represented an uncomfortable hybrid of classical and quantum concepts, highlighting the need for a more comprehensive theory.

## Specific Heat of Solids

The classical Dulong-Petit law (1819) predicted that the molar heat capacity of crystalline solids should be constant at all temperatures:

$$
C_V = 3R \approx 24.9\ \text{J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}
$$

where $R$ is the gas constant. This prediction follows from the equipartition theorem, which assigns energy $k_BT/2$ per degree of freedom. With six degrees of freedom per atom (three kinetic and three potential), the total energy is $3k_BT$ per atom, leading to the above heat capacity.

However, experimental measurements showed that heat capacities decrease significantly at low temperatures, approaching zero as temperature approaches absolute zero. This discrepancy was addressed by Einstein (1907), who applied quantum ideas to atomic vibrations, treating each atom as a quantum harmonic oscillator with energy:

$$E = \left(n + \frac{1}{2}\right)h\nu_E$$

where $n$ is a non-negative integer and $\nu_E$ is the Einstein frequency. This led to the Einstein model of specific heat:

$$C_V = 3R\left(\frac{\theta_E}{T}\right)^2\frac{e^{\theta_E/T}}{(e^{\theta_E/T} - 1)^2}$$

where $\theta_E = h\nu_E/k_B$ is the Einstein temperature. While this model captured the general temperature dependence, it did not accurately describe the low-temperature behavior. Peter Debye (1912) refined the model by considering a continuous distribution of vibrational frequencies, leading to the Debye $T^3$ law at low temperatures:

$$C_V \propto T^3 \text{ as } T \to 0$$

These quantum models of specific heat provided further evidence that classical physics was inadequate at the atomic scale.

## Matter Waves and the de Broglie Hypothesis

In 1924, Louis de Broglie proposed that the wave-particle duality observed for light might also apply to matter. He hypothesized that particles such as electrons should exhibit wave-like properties, with wavelength:

![Double-Slit Experiment](/images/quantum-physics/double-slit.svg)

![De Broglie Wavelength](/images/quantum-physics/debroglie-wavelength.svg)

$$\lambda = \frac{h}{p}$$

where $p$ is the particle's momentum. This hypothesis was experimentally confirmed by Davisson and Germer in 1927, who observed electron diffraction patterns consistent with de Broglie's predicted wavelength. The wave nature of matter further undermined classical mechanics and provided crucial insights for the development of quantum mechanics.

## The Necessity of Quantum Theory

The accumulation of these experimental anomalies made it clear that classical physics was fundamentally incomplete. The inability to explain blackbody radiation, the photoelectric effect, the Compton effect, atomic stability, discrete spectra, specific heat behavior, and matter waves pointed to the necessity of a new theoretical framework. Quantum mechanics emerged in the 1920s through the work of Heisenberg, Schrödinger, Born, Dirac, and others, providing a consistent and experimentally verified description of microscopic phenomena.

This new theory introduced revolutionary concepts such as wave-particle duality, quantization of energy, the uncertainty principle, and the probabilistic interpretation of physical measurements. The Schrödinger equation:

![Heisenberg's Uncertainty Principle](/images/quantum-physics/uncertainty-principle.svg)

$$i\hbar\frac{\partial\Psi}{\partial t} = \hat{H}\Psi$$

and Heisenberg's matrix mechanics provided mathematical frameworks for quantum phenomena, fundamentally transforming our understanding of the physical world at its most basic level.

In summary, the limitations of classical physics were exposed by a series of experimental results that could not be explained by existing theories. The resolution of these problems required the development of quantum mechanics, which has become one of the most successful and far-reaching theories in the history of science, despite its counterintuitive implications for our understanding of reality.

## Questions and Calculations

**Question 1:**  
Calculate the wavelength of a photon with energy 3.0 eV and determine which region of the electromagnetic spectrum it belongs to.

**Answer:**  
The wavelength of a photon is related to its energy by:

$$\lambda = \frac{hc}{E}$$

where $h$ is Planck's constant, $c$ is the speed of light, and $E$ is the energy. Substituting the values:

$$\lambda = \frac{(6.626 \times 10^{-34}\text{ J}\cdot\text{s})(3.00 \times 10^8\text{ m/s})}{(3.0\text{ eV})(1.602 \times 10^{-19}\text{ J/eV})}$$

$$\lambda = \frac{1.988 \times 10^{-25}\text{ J}\cdot\text{m}}{4.806 \times 10^{-19}\text{ J}}$$

$$\lambda = 4.14 \times 10^{-7}\text{ m} = 414\text{ nm}$$

This wavelength falls in the visible region of the electromagnetic spectrum, specifically in the violet-blue range.

**Question 2:**  
According to the Rayleigh-Jeans law, calculate the spectral energy density of blackbody radiation at a frequency of $10^{15}$ Hz and temperature of 5000 K. Compare this with the value predicted by Planck's law and explain the discrepancy.

**Answer:**  
Using the Rayleigh-Jeans law:

$$u(\nu, T) = \frac{8\pi\nu^2}{c^3}k_BT$$

Substituting the values:

$$u(10^{15}\text{ Hz}, 5000\text{ K}) = \frac{8\pi(10^{15}\text{ Hz})^2}{(3.00 \times 10^8\text{ m/s})^3}(1.381 \times 10^{-23}\text{ J/K})(5000\text{ K})$$

$$u(10^{15}\text{ Hz}, 5000\text{ K}) = 2.42 \times 10^{-6}\text{ J/m}^3\text{/Hz}$$

Using Planck's law:

$$u(\nu, T) = \frac{8\pi h\nu^3}{c^3}\frac{1}{e^{h\nu/k_BT} - 1}$$

Substituting the values:

$$u(10^{15}\text{ Hz}, 5000\text{ K}) = \frac{8\pi(6.626 \times 10^{-34}\text{ J}\cdot\text{s})(10^{15}\text{ Hz})^3}{(3.00 \times 10^8\text{ m/s})^3}\frac{1}{e^{(6.626 \times 10^{-34}\text{ J}\cdot\text{s})(10^{15}\text{ Hz})/(1.381 \times 10^{-23}\text{ J/K})(5000\text{ K})} - 1}$$

$$u(10^{15}\text{ Hz}, 5000\text{ K}) = 1.60 \times 10^{-6}\text{ J/m}^3\text{/Hz}$$

The Rayleigh-Jeans law predicts a higher energy density than Planck's law at this frequency. The discrepancy arises because the Rayleigh-Jeans law fails at high frequencies (the ultraviolet catastrophe), while Planck's law correctly accounts for the quantization of energy, which limits the energy density at high frequencies.

**Question 3:**  
A metal with a work function of 2.0 eV is illuminated with light of wavelength 400 nm. Calculate the maximum kinetic energy of the ejected photoelectrons and their maximum speed.

**Answer:**  
First, calculate the energy of the incident photons:

$$E_{photon} = \frac{hc}{\lambda} = \frac{(6.626 \times 10^{-34}\text{ J}\cdot\text{s})(3.00 \times 10^8\text{ m/s})}{400 \times 10^{-9}\text{ m}} = 4.97 \times 10^{-19}\text{ J}$$

Converting to eV:

$$E_{photon} = \frac{4.97 \times 10^{-19}\text{ J}}{1.602 \times 10^{-19}\text{ J/eV}} = 3.10\text{ eV}$$

The maximum kinetic energy of the ejected photoelectrons is:

$$K_{max} = E_{photon} - \phi = 3.10\text{ eV} - 2.0\text{ eV} = 1.10\text{ eV}$$

Converting to joules:

$$K_{max} = (1.10\text{ eV})(1.602 \times 10^{-19}\text{ J/eV}) = 1.76 \times 10^{-19}\text{ J}$$

The maximum speed of the photoelectrons can be calculated from:

$$K_{max} = \frac{1}{2}m_ev^2$$

Rearranging for $v$:

$$v = \sqrt{\frac{2K_{max}}{m_e}} = \sqrt{\frac{2(1.76 \times 10^{-19}\text{ J})}{9.11 \times 10^{-31}\text{ kg}}} = 6.23 \times 10^5\text{ m/s}$$

**Question 4:**  
Calculate the Compton wavelength shift for X-rays with an initial wavelength of 0.1 nm scattered at an angle of 60° by free electrons.

**Answer:**  
The Compton wavelength shift is given by:

$$\Delta\lambda = \lambda' - \lambda = \frac{h}{m_ec}(1 - \cos\theta)$$

Substituting the values:

$$\Delta\lambda = \frac{6.626 \times 10^{-34}\text{ J}\cdot\text{s}}{(9.11 \times 10^{-31}\text{ kg})(3.00 \times 10^8\text{ m/s})}(1 - \cos60°)$$

$$\Delta\lambda = (2.43 \times 10^{-12}\text{ m})(1 - 0.5)$$

$$\Delta\lambda = 1.21 \times 10^{-12}\text{ m} = 0.00121\text{ nm}$$

The new wavelength is:

$$\lambda' = \lambda + \Delta\lambda = 0.1\text{ nm} + 0.00121\text{ nm} = 0.10121\text{ nm}$$

**Question 5:**  
Calculate the energy of the photon emitted when an electron in a hydrogen atom transitions from the $n = 3$ energy level to the $n = 1$ energy level. In which region of the electromagnetic spectrum does this photon lie?

**Answer:**  
The energy levels of the hydrogen atom are given by:

$$E_n = -\frac{13.6\text{ eV}}{n^2}$$

The energy of the initial state ($n = 3$):

$$E_3 = -\frac{13.6\text{ eV}}{3^2} = -1.51\text{ eV}$$

The energy of the final state ($n = 1$):

$$E_1 = -\frac{13.6\text{ eV}}{1^2} = -13.6\text{ eV}$$

The energy of the emitted photon:

$$E_{photon} = |E_3 - E_1| = |(-1.51\text{ eV}) - (-13.6\text{ eV})| = 12.09\text{ eV}$$

Converting to joules:

$$E_{photon} = (12.09\text{ eV})(1.602 \times 10^{-19}\text{ J/eV}) = 1.94 \times 10^{-18}\text{ J}$$

The wavelength of the photon:

$$\lambda = \frac{hc}{E_{photon}} = \frac{(6.626 \times 10^{-34}\text{ J}\cdot\text{s})(3.00 \times 10^8\text{ m/s})}{1.94 \times 10^{-18}\text{ J}} = 1.03 \times 10^{-7}\text{ m} = 103\text{ nm}$$

This wavelength falls in the ultraviolet region of the electromagnetic spectrum (specifically, the Lyman series).

**Question 6:**  
A solid has a Debye temperature of 300 K. Calculate the molar heat capacity at (a) 30 K and (b) 3000 K, and explain the difference in terms of quantum theory.

**Answer:**  
At low temperatures ($T \ll \theta_D$), the Debye model predicts that the molar heat capacity varies as $T^3$:

$$C_V \approx \frac{12\pi^4}{5}R\left(\frac{T}{\theta_D}\right)^3$$

(a) At $T = 30\text{ K}$, which is much less than $\theta_D = 300\text{ K}$:

$$C_V \approx \frac{12\pi^4}{5}(8.314\text{ J/mol}\cdot\text{K})\left(\frac{30\text{ K}}{300\text{ K}}\right)^3$$

$$C_V \approx (234.8\text{ J/mol}\cdot\text{K})(0.001) = 0.235\text{ J/mol}\cdot\text{K}$$

(b) At $T = 3000\text{ K}$, which is much greater than $\theta_D = 300\text{ K}$, the classical Dulong-Petit law applies:

$$C_V \approx 3R = 3(8.314\text{ J/mol}\cdot\text{K}) = 24.94\text{ J/mol}\cdot\text{K}$$

The difference is explained by quantum theory: at low temperatures, only low-frequency vibrational modes are excited (quantum effects dominate), resulting in a heat capacity that varies as $T^3$. At high temperatures, all vibrational modes are excited (classical limit), leading to the constant Dulong-Petit value of $3R$.

**Question 7:**  
Calculate the de Broglie wavelength of (a) an electron accelerated through a potential difference of 100 V and (b) a proton with the same kinetic energy. Compare the results and explain their significance.

**Answer:**  
(a) For an electron accelerated through a potential difference of 100 V, the kinetic energy is:

$$K = eV = (1.602 \times 10^{-19}\text{ C})(100\text{ V}) = 1.602 \times 10^{-17}\text{ J}$$

The momentum is:

$$p = \sqrt{2m_eK} = \sqrt{2(9.11 \times 10^{-31}\text{ kg})(1.602 \times 10^{-17}\text{ J})} = 5.41 \times 10^{-24}\text{ kg}\cdot\text{m/s}$$

The de Broglie wavelength is:

$$\lambda_e = \frac{h}{p} = \frac{6.626 \times 10^{-34}\text{ J}\cdot\text{s}}{5.41 \times 10^{-24}\text{ kg}\cdot\text{m/s}} = 1.22 \times 10^{-10}\text{ m} = 0.122\text{ nm}$$

(b) For a proton with the same kinetic energy, the momentum is:

$$p = \sqrt{2m_pK} = \sqrt{2(1.673 \times 10^{-27}\text{ kg})(1.602 \times 10^{-17}\text{ J})} = 2.32 \times 10^{-22}\text{ kg}\cdot\text{m/s}$$

The de Broglie wavelength is:

$$\lambda_p = \frac{h}{p} = \frac{6.626 \times 10^{-34}\text{ J}\cdot\text{s}}{2.32 \times 10^{-22}\text{ kg}\cdot\text{m/s}} = 2.86 \times 10^{-12}\text{ m} = 0.00286\text{ nm}$$

The electron's wavelength is about 43 times larger than the proton's wavelength for the same kinetic energy. This difference is significant because the electron's wavelength is comparable to atomic spacings (0.1-0.5 nm), making quantum effects (like diffraction) observable. The proton's wavelength is much smaller than atomic dimensions, so its wave-like properties are less apparent, and it behaves more classically.

**Question 8:**  
A metal has a work function of 4.5 eV. Calculate the threshold frequency and wavelength for the photoelectric effect. If light with a wavelength of 200 nm is incident on this metal, will photoelectrons be emitted? If so, what is their maximum kinetic energy?

**Answer:**  
The threshold frequency is related to the work function by:

$$\nu_0 = \frac{\phi}{h} = \frac{4.5\text{ eV} \times 1.602 \times 10^{-19}\text{ J/eV}}{6.626 \times 10^{-34}\text{ J}\cdot\text{s}} = 1.09 \times 10^{15}\text{ Hz}$$

The threshold wavelength is:

$$\lambda_0 = \frac{c}{\nu_0} = \frac{3.00 \times 10^8\text{ m/s}}{1.09 \times 10^{15}\text{ Hz}} = 2.76 \times 10^{-7}\text{ m} = 276\text{ nm}$$

For light with a wavelength of 200 nm, the photon energy is:

$$E_{photon} = \frac{hc}{\lambda} = \frac{(6.626 \times 10^{-34}\text{ J}\cdot\text{s})(3.00 \times 10^8\text{ m/s})}{200 \times 10^{-9}\text{ m}} = 9.94 \times 10^{-19}\text{ J}$$

Converting to eV:

$$E_{photon} = \frac{9.94 \times 10^{-19}\text{ J}}{1.602 \times 10^{-19}\text{ J/eV}} = 6.20\text{ eV}$$

Since the photon energy (6.20 eV) exceeds the work function (4.5 eV), photoelectrons will be emitted. Their maximum kinetic energy is:

$$K_{max} = E_{photon} - \phi = 6.20\text{ eV} - 4.5\text{ eV} = 1.70\text{ eV}$$

**Question 9:**  
Calculate the temperature at which the peak of the blackbody radiation spectrum occurs at a wavelength of 500 nm. How does this relate to the color of the Sun's radiation?

**Answer:**  
Wien's displacement law relates the wavelength of maximum intensity ($\lambda_{max}$) to the temperature of a blackbody:

$$\lambda_{max}T = b$$

where $b = 2.898 \times 10^{-3}\text{ m}\cdot\text{K}$ is Wien's displacement constant. Rearranging for temperature:

$$T = \frac{b}{\lambda_{max}} = \frac{2.898 \times 10^{-3}\text{ m}\cdot\text{K}}{500 \times 10^{-9}\text{ m}} = 5796\text{ K}$$

This temperature is very close to the effective temperature of the Sun's photosphere (approximately 5778 K). At this temperature, the peak of the blackbody spectrum falls in the green-blue region of the visible spectrum (around 500 nm). However, the Sun appears yellow-white because it emits across the entire visible spectrum, and our eyes perceive this combination of wavelengths as yellow-white rather than the peak wavelength color.

**Question 10:**  
The specific heat capacity of diamond at room temperature (300 K) is about 6.12 J/mol·K, which is significantly less than the classical Dulong-Petit value. Calculate the Einstein temperature of diamond and explain why diamond's heat capacity is lower than predicted by classical theory.

**Answer:**  
According to the Einstein model, the molar heat capacity is given by:

$$C_V = 3R\left(\frac{\theta_E}{T}\right)^2\frac{e^{\theta_E/T}}{(e^{\theta_E/T} - 1)^2}$$

We need to find $\theta_E$ given that $C_V = 6.12\text{ J/mol}\cdot\text{K}$ at $T = 300\text{ K}$. Rearranging and solving numerically:

$$\frac{C_V}{3R} = \left(\frac{\theta_E}{T}\right)^2\frac{e^{\theta_E/T}}{(e^{\theta_E/T} - 1)^2}$$

$$\frac{6.12\text{ J/mol}\cdot\text{K}}{3(8.314\text{ J/mol}\cdot\text{K})} = \left(\frac{\theta_E}{300\text{ K}}\right)^2\frac{e^{\theta_E/300\text{ K}}}{(e^{\theta_E/300\text{ K}} - 1)^2}$$

$$0.245 = \left(\frac{\theta_E}{300\text{ K}}\right)^2\frac{e^{\theta_E/300\text{ K}}}{(e^{\theta_E/300\text{ K}} - 1)^2}$$

Solving this equation numerically gives $\theta_E \approx 1320\text{ K}$.

Diamond's heat capacity is lower than the classical prediction because its Einstein temperature is much higher than room temperature ($\theta_E \gg T$). This high Einstein temperature results from the strong carbon-carbon bonds in diamond, which create high-frequency vibrational modes. According to quantum theory, these high-frequency modes require significant energy to excite and are not fully activated at room temperature. As a result, not all vibrational degrees of freedom contribute to the heat capacity, leading to a value lower than the classical Dulong-Petit prediction of $3R \approx 24.9\text{ J/mol}\cdot\text{K}$.

## Summary

Classical physics, despite its successes in describing macroscopic phenomena, failed to explain several experimental observations at the atomic and subatomic scales. The key limitations included:

1. The ultraviolet catastrophe in blackbody radiation, resolved by Planck's quantum hypothesis that energy is emitted and absorbed in discrete packets.

2. The photoelectric effect, explained by Einstein's proposal that light consists of photons with energy proportional to frequency.

3. The Compton effect, which demonstrated the particle-like behavior of X-rays in their interaction with electrons.

4. The stability of atoms and discrete atomic spectra, addressed by Bohr's quantized orbital model but ultimately requiring the full quantum mechanical framework.

5. The temperature dependence of specific heat in solids, which contradicted the classical Dulong-Petit law and required quantum considerations of vibrational energy levels.

6. The wave-like behavior of matter, proposed by de Broglie and confirmed by electron diffraction experiments.

These limitations necessitated the development of quantum mechanics, a revolutionary theory that introduced concepts such as wave-particle duality, quantization of energy, the uncertainty principle, and probabilistic interpretations. Despite its counterintuitive nature, quantum mechanics has proven remarkably successful in explaining microscopic phenomena and has led to numerous technological applications, from lasers and semiconductors to nuclear magnetic resonance and quantum computing.
