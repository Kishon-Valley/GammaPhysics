## Central Potentials and the Hydrogen Atom

### Introduction

Central potentials play a significant role in quantum mechanics, with the hydrogen atom serving as the quintessential example. The study of particles in central potentials provides insights into atomic structure and forms the foundation for understanding more complex multi-electron atoms and molecules.

![Hydrogen Atom Orbitals](https://chem.libretexts.org/@api/deki/files/206118/CNX_Chem_06_03_Orbitals2.jpg)

## Mathematical Framework

In quantum mechanics, a central potential depends only on the distance from a fixed point, typically chosen as the origin. Mathematically, this means the potential energy function takes the form $V(\vec{r}) = V(r)$, where $r = |\vec{r}|$ is the distance from the origin. The most important example is the Coulomb potential that describes the electrostatic interaction between the positively charged nucleus and the negatively charged electron in the hydrogen atom.

![Central Potential and Effective Potential](https://phys.libretexts.org/@api/deki/files/4321/CNX_UPhysics_41_07_CentriPoten.jpg)

The time-independent Schrödinger equation for a particle of mass $m$ in a central potential $V(r)$ is:

$$-\frac{\hbar^2}{2m}\nabla^2\psi(\vec{r}) + V(r)\psi(\vec{r}) = E\psi(\vec{r})$$

In spherical coordinates $(r, \theta, \phi)$, the Laplacian operator takes the form:

$$\nabla^2 = \frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial}{\partial r}\right) + \frac{1}{r^2\sin\theta}\frac{\partial}{\partial \theta}\left(\sin\theta\frac{\partial}{\partial \theta}\right) + \frac{1}{r^2\sin^2\theta}\frac{\partial^2}{\partial \phi^2}$$

The central nature of the potential allows us to separate variables by writing $\psi(r, \theta, \phi) = R(r)Y(\theta, \phi)$, where $R(r)$ is the radial function and $Y(\theta, \phi)$ represents the angular dependence.

## Angular Momentum and Spherical Harmonics

The angular part of the wavefunction satisfies the eigenvalue equation:

$$\hat{L}^2 Y_{lm}(\theta, \phi) = l(l+1)\hbar^2 Y_{lm}(\theta, \phi)$$
$$\hat{L}_z Y_{lm}(\theta, \phi) = m\hbar Y_{lm}(\theta, \phi)$$

Here, $\hat{L}^2$ is the square of the angular momentum operator, $\hat{L}_z$ is the z-component of angular momentum, $l$ is the angular momentum quantum number (taking values $0, 1, 2, ...$), and $m$ is the magnetic quantum number (taking values $-l, -l+1, ..., 0, ..., l-1, l$).

The solutions to these equations are the spherical harmonics, $Y_{lm}(\theta, \phi)$, which form a complete orthonormal set of functions on the surface of a sphere. The first few spherical harmonics are:

$$Y_{00}(\theta, \phi) = \frac{1}{\sqrt{4\pi}}$$

$$Y_{10}(\theta, \phi) = \sqrt{\frac{3}{4\pi}}\cos\theta$$

$$Y_{1\pm1}(\theta, \phi) = \mp\sqrt{\frac{3}{8\pi}}\sin\theta e^{\pm i\phi}$$

The physical significance of these quantum numbers becomes evident when we consider the angular momentum: $l$ determines the magnitude of angular momentum $(|\vec{L}| = \sqrt{l(l+1)}\hbar)$, while $m$ specifies the z-component $(L_z = m\hbar)$.

![Spherical Harmonics](https://mathworld.wolfram.com/images/eps-svg/SphericalHarmonics_1000.svg)

## Radial Equation

After separating the angular variables, we obtain the radial equation:

$$-\frac{\hbar^2}{2m}\left[\frac{1}{r^2}\frac{d}{dr}\left(r^2\frac{dR(r)}{dr}\right) - \frac{l(l+1)}{r^2}R(r)\right] + V(r)R(r) = ER(r)$$

The term $\frac{l(l+1)\hbar^2}{2mr^2}$ acts as an effective potential that combines with $V(r)$ to create a centrifugal barrier for $l > 0$. This equation can be simplified by defining a new function $u(r) = rR(r)$, resulting in:

$$-\frac{\hbar^2}{2m}\frac{d^2u(r)}{dr^2} + \left[V(r) + \frac{l(l+1)\hbar^2}{2mr^2}\right]u(r) = Eu(r)$$

This transformation converts the radial equation into a one-dimensional Schrödinger equation with an effective potential $V_{\text{eff}}(r) = V(r) + \frac{l(l+1)\hbar^2}{2mr^2}$.

## The Hydrogen Atom

The hydrogen atom consists of a proton (nucleus) and an electron interacting through the Coulomb potential:

$$V(r) = -\frac{e^2}{4\pi\epsilon_0 r} = -\frac{k_e e^2}{r}$$

where $e$ is the elementary charge, $\epsilon_0$ is the permittivity of free space, and $k_e = \frac{1}{4\pi\epsilon_0}$ is Coulomb's constant.

![Energy Levels of Hydrogen](https://phys.libretexts.org/@api/deki/files/4554/CNX_UPhysics_30_05_HEnergy.jpg)

The radial equation for hydrogen becomes:

$$-\frac{\hbar^2}{2\mu}\frac{d^2u(r)}{dr^2} + \left[-\frac{k_e e^2}{r} + \frac{l(l+1)\hbar^2}{2\mu r^2}\right]u(r) = Eu(r)$$

where $\mu$ is the reduced mass of the electron-proton system, approximately equal to the electron mass $m_e$ since the proton is much more massive.

Solving this equation yields the energy eigenvalues:

$$E_n = -\frac{\mu k_e^2 e^4}{2\hbar^2 n^2} = -\frac{13.6 \text{ eV}}{n^2}$$

where $n$ is the principal quantum number, taking values $1, 2, 3, ...$. The energy depends only on $n$, not on $l$ or $m$, leading to degeneracy in the energy levels.

The radial functions are associated Laguerre polynomials multiplied by exponential factors. For the ground state ($n=1, l=0$), the radial function is:

$$R_{10}(r) = 2\left(\frac{Z}{a_0}\right)^{3/2}e^{-Zr/a_0}$$

where $a_0 = \frac{4\pi\epsilon_0\hbar^2}{\mu e^2} \approx 0.529 \times 10^{-10}$ m is the Bohr radius and $Z$ is the nuclear charge (Z=1 for hydrogen).

The complete wavefunction for the hydrogen atom is the product of the radial and angular parts:

$$\psi_{nlm}(r, \theta, \phi) = R_{nl}(r)Y_{lm}(\theta, \phi)$$

## Quantum Numbers and Selection Rules

The hydrogen atom wavefunctions are characterized by three quantum numbers:
- Principal quantum number $n$ (values: $1, 2, 3, ...$): Primarily determines the energy and the overall size of the orbital
- Angular momentum quantum number $l$ (values: $0, 1, 2, ..., n-1$): Determines the shape of the orbital
- Magnetic quantum number $m$ (values: $-l, -l+1, ..., 0, ..., l-1, l$): Determines the orientation of the orbital

The orbitals are commonly labeled using spectroscopic notation, where $l=0,1,2,3,...$ corresponds to $s,p,d,f,...$ orbitals. For example, the ground state of hydrogen is denoted as $1s$ ($n=1, l=0$).

![Hydrogen Orbital Shapes](https://chem.libretexts.org/@api/deki/files/345280/Fig_7-19.jpg)

Selection rules govern transitions between different energy levels due to the interaction with electromagnetic radiation. For electric dipole transitions, these rules are:
- $\Delta l = \pm 1$
- $\Delta m = 0, \pm 1$
- No restriction on $\Delta n$

These selection rules arise from conservation of angular momentum and parity considerations.

## Electron Spin and the Complete Hydrogen Atom

The complete description of the hydrogen atom includes the electron's intrinsic angular momentum or spin. Electrons have a spin quantum number $s=1/2$, with a z-component quantum number $m_s = \pm 1/2$.

When we account for spin, the complete wavefunction becomes:

$$\psi_{nlm_lm_s}(r, \theta, \phi, \sigma) = R_{nl}(r)Y_{lm_l}(\theta, \phi)\chi_{m_s}(\sigma)$$

where $\chi_{m_s}(\sigma)$ represents the spin function, and $\sigma$ is the spin variable.

The inclusion of spin explains the fine structure in the hydrogen spectrum, resulting from the spin-orbit interaction—a relativistic effect coupling the electron's orbital angular momentum with its spin.

![Electron Spin](https://phys.libretexts.org/@api/deki/files/70400/CNX_UPhysics_41_06_SpinZ.jpg)

## Zeeman Effect and Stark Effect

External fields break the spherical symmetry of the hydrogen atom, lifting the degeneracy of energy levels:

1. **Zeeman Effect**: When a magnetic field is applied, the energy levels split according to the magnetic quantum number $m$, with the energy shift given by:
   $$\Delta E = \mu_B B m_l g_l$$
   where $\mu_B$ is the Bohr magneton, $B$ is the magnetic field strength, and $g_l$ is the Landé g-factor.

2. **Stark Effect**: When an electric field is applied, the energy levels split due to the interaction between the field and the atom's electric dipole moment:
   $$\Delta E \propto E \cdot \langle \psi | \vec{r} | \psi \rangle$$
   where $E$ is the electric field strength and $\vec{r}$ is the position operator.

These effects provide experimental verification of quantum theory and serve as techniques for spectroscopic analysis.

![Zeeman Effect](https://phys.libretexts.org/@api/deki/files/4551/CNX_UPhysics_30_04_Zeeman.jpg)

## Numerical Methods for Central Potentials

For central potentials that do not admit analytical solutions, numerical methods become essential. These include:

1. **Shooting Method**: Start with trial solutions at the origin and infinity, then adjust the energy until they match at an intermediate point.

2. **Matrix Diagonalization**: Expand the wavefunction in a basis set (like harmonic oscillator eigenfunctions) and convert the Schrödinger equation to a matrix eigenvalue problem.

3. **Variational Method**: Propose a trial wavefunction with adjustable parameters and minimize the expectation value of energy.

These methods extend the study of central potentials beyond exactly solvable systems like the hydrogen atom.

![Numerical Wavefunction Solutions](https://phys.libretexts.org/@api/deki/files/54358/7.7.14.png)

## Applications and Extensions

The hydrogen atom model extends to several related systems:

1. **Hydrogen-like Ions**: For single-electron ions with nuclear charge $Z$ (like He$^+$, Li$^{2+}$), the energy levels scale as:
   $$E_n = -\frac{Z^2 \times 13.6 \text{ eV}}{n^2}$$

2. **Quantum Defect Theory**: For alkali metals (with one valence electron), the energy levels can be approximated as:
   $$E_n = -\frac{13.6 \text{ eV}}{(n-\delta_l)^2}$$
   where $\delta_l$ is the quantum defect that accounts for the screening effect of inner electrons.

3. **Muonic Hydrogen**: Replacing the electron with a muon (which is about 207 times heavier) results in energy levels about 207 times deeper and orbital radii about 207 times smaller, providing tests of QED and measurements of the proton size.

![Hydrogen-like Ions](https://chem.libretexts.org/@api/deki/files/345279/Fig_7-18.jpg)

## Relativistic Corrections and the Dirac Equation

The non-relativistic Schrödinger equation provides an excellent first approximation for the hydrogen atom, but several effects require relativistic corrections:

1. **Relativistic Kinetic Energy**: At high speeds near the nucleus, the electron's kinetic energy deviates from the non-relativistic approximation.

2. **Spin-Orbit Coupling**: The interaction between the electron's orbital motion and its intrinsic spin causes energy level splitting.

3. **Darwin Term**: Arises from the zitterbewegung (trembling motion) of the electron, contributing to the energy of s-orbitals.

The Dirac equation provides a fully relativistic treatment of the hydrogen atom, predicting the fine structure correctly and explaining the intrinsic spin of the electron. The energy levels in the Dirac theory are:

$$E_{n,j} = m_ec^2\left[1 + \frac{(Z\alpha)^2}{(n-j-1/2+\sqrt{(j+1/2)^2-(Z\alpha)^2})^2}\right]^{-1/2}$$

where $\alpha \approx 1/137$ is the fine structure constant and $j$ is the total angular momentum quantum number.

![Fine Structure](https://phys.libretexts.org/@api/deki/files/70395/CNX_UPhysics_41_01_Spectra.jpg)

## Experimental Verification and Modern Applications

The hydrogen atom spectrum provides stringent tests of quantum mechanical theories:

1. **Spectroscopy**: The hydrogen spectrum, with its characteristic Balmer, Lyman, and Paschen series, directly confirms the quantized energy levels.

2. **Lamb Shift**: The small energy difference between the 2s$_{1/2}$ and 2p$_{1/2}$ states, not predicted by the Dirac equation, was explained by quantum electrodynamics through vacuum fluctuations.

3. **Hyperfine Structure**: The interaction between the electron and proton magnetic moments creates a small splitting, used in the 21-cm line of hydrogen observed in radio astronomy.

Modern applications of hydrogen atom physics include:

1. **Hydrogen Maser**: An atomic clock based on the hyperfine transition in hydrogen, used for precision timekeeping.

2. **Rydberg Atoms**: Highly excited hydrogen-like atoms with extreme properties, useful for studying quantum-classical boundaries and quantum information.

3. **Quantum Computing**: Proposals use hydrogen-like systems as qubits, leveraging their well-understood energy level structure.

![Hydrogen Spectrum](https://phys.libretexts.org/@api/deki/files/4552/CNX_UPhysics_30_05_HSpectrum.jpg)

## Practice Problems

Below are ten practice problems to help consolidate your understanding of central potentials and the hydrogen atom.

![Quantum Physics Problem Concepts](https://phys.libretexts.org/@api/deki/files/4549/CNX_UPhysics_30_03_bohratom.jpg)

### Problem 1: Energy Levels
**Question:** Calculate the energy of the first excited state ($n=2$) of the hydrogen atom in electron volts (eV).

**Answer:** The energy of a state with principal quantum number $n$ is given by $E_n = -\frac{13.6 \text{ eV}}{n^2}$. For the first excited state ($n=2$):

$$E_2 = -\frac{13.6 \text{ eV}}{2^2} = -\frac{13.6 \text{ eV}}{4} = -3.4 \text{ eV}$$

This is one-fourth the magnitude of the ground state energy (-13.6 eV).

### Problem 2: Bohr Radius
**Question:** The Bohr radius is approximately 0.529 Å. Calculate the most probable distance from the nucleus for an electron in the 2p orbital of hydrogen.

**Answer:** For the hydrogen atom, the radial probability density is $P(r) = r^2|R_{nl}(r)|^2$. For 2p orbitals ($n=2, l=1$), the most probable radius occurs at $r = 4a_0$, where $a_0$ is the Bohr radius. Therefore:

$$r_{\text{most probable}} = 4 \times 0.529 \text{ Å} = 2.116 \text{ Å}$$

This illustrates how excited states have electron probability densities that peak farther from the nucleus.

### Problem 3: Selection Rules
**Question:** A hydrogen atom is in the 3d state. To which states can it transition via electric dipole radiation?

**Answer:** For the 3d state, we have $n=3$ and $l=2$. According to the electric dipole selection rules:
- $\Delta l = \pm 1$
- $\Delta m = 0, \pm 1$
- No restriction on $\Delta n$

Therefore, transitions are allowed to:
1. States with $l=1$ (p orbitals): 2p ($n=2, l=1$) and any higher np state
2. States with $l=3$ (f orbitals): 4f ($n=4, l=3$) and higher nf states

The most common transitions would be 3d → 2p (emission) and 3d → 4f (absorption).

### Problem 4: Angular Momentum
**Question:** What is the magnitude of the orbital angular momentum for an electron in a 3d orbital?

**Answer:** For a state with angular momentum quantum number $l$, the magnitude of the orbital angular momentum is given by $|\vec{L}| = \sqrt{l(l+1)}\hbar$. For a 3d orbital, $l=2$, so:

$$|\vec{L}| = \sqrt{2(2+1)}\hbar = \sqrt{6}\hbar \approx 2.45\hbar$$

This means the angular momentum is approximately 2.45 times the reduced Planck constant.

### Problem 5: Spectral Lines
**Question:** Calculate the wavelength of the photon emitted when an electron in a hydrogen atom transitions from the n=3 to the n=2 state.

**Answer:** The energy difference between the states is:

$$\Delta E = E_2 - E_3 = -\frac{13.6 \text{ eV}}{2^2} - \left(-\frac{13.6 \text{ eV}}{3^2}\right) = -3.4 \text{ eV} - (-1.51 \text{ eV}) = -1.89 \text{ eV}$$

The negative sign indicates energy is released. Using the relation $E = \frac{hc}{\lambda}$:

$$\lambda = \frac{hc}{|\Delta E|} = \frac{1240 \text{ eV} \cdot \text{nm}}{1.89 \text{ eV}} = 656 \text{ nm}$$

This corresponds to the H-α line in the Balmer series, which appears red in the visible spectrum.

### Problem 6: Zeeman Effect
**Question:** A hydrogen atom in the 2p state ($l=1$) is placed in a magnetic field of 1.0 T. Calculate the energy splitting between adjacent Zeeman sublevels in eV.

**Answer:** For the Zeeman effect, the energy shift is given by $\Delta E = \mu_B B m_l g_l$, where $\mu_B = 5.788 \times 10^{-5}$ eV/T is the Bohr magneton, $B = 1.0$ T is the magnetic field strength, $m_l$ ranges from $-l$ to $l$ in integer steps, and $g_l \approx 1$ for orbital angular momentum.

For the 2p state, $l=1$, so $m_l = -1, 0, 1$. The energy difference between adjacent levels is:

$$\Delta E = \mu_B B \Delta m_l g_l = 5.788 \times 10^{-5} \text{ eV/T} \times 1.0 \text{ T} \times 1 \times 1 = 5.788 \times 10^{-5} \text{ eV}$$

This small energy splitting can be detected spectroscopically as a splitting of the spectral lines.

### Problem 7: Spherical Harmonics Normalization
**Question:** Verify that the spherical harmonic $Y_{10}(\theta, \phi) = \sqrt{\frac{3}{4\pi}}\cos\theta$ is properly normalized.

**Answer:** A spherical harmonic is properly normalized if $\int_0^{2\pi}\int_0^{\pi} |Y_{lm}(\theta, \phi)|^2 \sin\theta d\theta d\phi = 1$.

For $Y_{10}(\theta, \phi) = \sqrt{\frac{3}{4\pi}}\cos\theta$:

$$\int_0^{2\pi}\int_0^{\pi} \left|\sqrt{\frac{3}{4\pi}}\cos\theta\right|^2 \sin\theta d\theta d\phi = \frac{3}{4\pi}\int_0^{2\pi}d\phi \int_0^{\pi} \cos^2\theta \sin\theta d\theta$$

$$= \frac{3}{4\pi} \times 2\pi \times \int_0^{\pi} \cos^2\theta \sin\theta d\theta = \frac{3}{2} \times \int_0^{\pi} \cos^2\theta \sin\theta d\theta$$

Using the substitution $u = \cos\theta$, $du = -\sin\theta d\theta$, and the limits change from $\theta=0$ to $u=1$ and from $\theta=\pi$ to $u=-1$:

$$\frac{3}{2} \times \int_{1}^{-1} u^2 (-du) = \frac{3}{2} \times \int_{-1}^{1} u^2 du = \frac{3}{2} \times \left[\frac{u^3}{3}\right]_{-1}^{1} = \frac{3}{2} \times \frac{2}{3} = 1$$

Therefore, $Y_{10}(\theta, \phi)$ is properly normalized.

### Problem 8: Uncertainty Principle
**Question:** For the ground state of hydrogen, the electron's position uncertainty is approximately equal to the Bohr radius $a_0$. Estimate the uncertainty in the electron's momentum.

**Answer:** According to the Heisenberg uncertainty principle, $\Delta x \cdot \Delta p \geq \frac{\hbar}{2}$. If we take $\Delta x \approx a_0$ for the ground state, then:

$$\Delta p \geq \frac{\hbar}{2\Delta x} = \frac{\hbar}{2a_0}$$

Since $a_0 = \frac{\hbar^2}{m_e e^2 k_e}$, we can rewrite:

$$\Delta p \geq \frac{\hbar}{2} \times \frac{m_e e^2 k_e}{\hbar^2} = \frac{m_e e^2 k_e}{2\hbar}$$

Substituting values: $m_e = 9.11 \times 10^{-31}$ kg, $e = 1.602 \times 10^{-19}$ C, $k_e = 8.99 \times 10^9$ N·m²/C², $\hbar = 1.055 \times 10^{-34}$ J·s:

$$\Delta p \gtrsim 1.92 \times 10^{-24} \text{ kg} \cdot \text{m/s}$$

This corresponds to an uncertainty in velocity of about $2.1 \times 10^6 \text{ m/s}$, which is significant compared to the expected orbital velocity.

### Problem 9: Hydrogen-like Ions
**Question:** Calculate the ground state energy and the Bohr radius for the He⁺ ion (Z=2).

**Answer:** For hydrogen-like ions with nuclear charge Z, the energy formula is scaled by Z²:

$$E_n = -\frac{Z^2 \times 13.6 \text{ eV}}{n^2}$$

For the ground state of He⁺ (Z=2, n=1):

$$E_1 = -\frac{2^2 \times 13.6 \text{ eV}}{1^2} = -54.4 \text{ eV}$$

The Bohr radius scales inversely with Z:

$$a_0(Z) = \frac{a_0(Z=1)}{Z} = \frac{0.529 \text{ Å}}{2} = 0.2645 \text{ Å}$$

This shows that the electron in He⁺ is bound more tightly (higher energy magnitude) and orbits closer to the nucleus than in hydrogen.

### Problem 10: Fine Structure
**Question:** The fine structure of hydrogen splits the n=2 energy level into two sublevels: 2s₁/₂ and 2p₁/₂ at one energy, and 2p₃/₂ at a slightly higher energy. Calculate the wavelength of radiation needed to excite an electron from the 2p₃/₂ state to the 3s₁/₂ state.

**Answer:** The energy of the n=2 level without fine structure is E₂ = -3.4 eV. The 2p₃/₂ state is shifted up from this by approximately 4.5 × 10⁻⁵ eV due to spin-orbit coupling. 

The energy of the n=3 level is E₃ = -1.51 eV, and the 3s₁/₂ state has negligible fine structure shift.

Therefore:
$$\Delta E = E_{3s_{1/2}} - E_{2p_{3/2}} = -1.51 \text{ eV} - (-3.4 \text{ eV} + 4.5 \times 10^{-5} \text{ eV})$$
$$\Delta E = -1.51 \text{ eV} - (-3.39955 \text{ eV}) = 1.88955 \text{ eV}$$

The wavelength is then:
$$\lambda = \frac{hc}{\Delta E} = \frac{1240 \text{ eV} \cdot \text{nm}}{1.88955 \text{ eV}} = 656.2 \text{ nm}$$

This is very close to the wavelength of the H-α line but with a tiny shift due to fine structure, illustrating how high-resolution spectroscopy can resolve these subtle quantum effects. 

## Conclusion

The central potential problem, exemplified by the hydrogen atom, stands as one of the most beautiful and fruitful examples in quantum mechanics. Its exact solution provided the theoretical foundation for understanding atomic structure, paving the way for the quantum mechanical description of the periodic table of elements and chemical bonding.

The mathematical techniques developed for solving the hydrogen atom—separation of variables, special functions, perturbation theory—have applications throughout quantum physics. Meanwhile, the experimental study of hydrogen continues to yield insights into fundamental physics, from precision tests of quantum electrodynamics to understanding the structure of the proton.


